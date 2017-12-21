import React, { Component } from 'react'

import './sass/Display.sass'



class Display extends Component {
  constructor() {
    super()

    this.state = {
      signCopied: false
    }
  }

  componentDidMount() {

    const clipboard = new Clipboard('.copy-btn')

    clipboard.on('success', (e) => {
      this.setState({ signCopied: true })

      e.clearSelection()
    })
  }

  componentWillReceiveProps() {
    if (this.state.signCopied)
      this.setState({ signCopied: false })
  }

  render() {

    const { fullname, jobTitle, email, companyInfo, selectColor } = this.props
    const { signCopied } = this.state
    const name = typeof fullname === 'string' ? fullname : fullname.join(' ')

    return (
      <div className={ selectColor.length > 1 ? 'Display ' + selectColor : 'Display' }>

        <div className="copy-area">
          <h2 className={name.length < 1 ? 'placeholder' : ''}>
            {name.length < 1 ? 'Jane Doe' : name}
          </h2>

          <h3 className={jobTitle.length < 1 ? 'placeholder' : ''}>
            {jobTitle.length < 1 ? 'Frontend-Developer ' : jobTitle}
          </h3>

          <a href={email.length < 1 ? 'mailto:jdoe@acne.com' : 'mailto:' + email} className={email.length < 1 ? 'placeholder' : ''}>
            {email.length < 1 ? 'jdoe@acne.com' : email}
          </a>

          <p className={companyInfo.length < 1 ? 'company-info placeholder' : 'company-info'}>
            {companyInfo.length < 1 ? `ACME Inc.
            12345 Berlin` : companyInfo}
          </p>
        </div>

        <button className={signCopied ? 'copy-btn copied' : 'copy-btn'} data-clipboard-target=".copy-area">
          {signCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    )
  }
}

export default Display