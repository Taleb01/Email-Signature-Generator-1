import React, { Component } from 'react'

import './sass/Form.sass'

class Form extends Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const target = e.target.name
    const value = e.target.value

    this.props.formValueToState(target, value)
  }

  render() {
    const { fullname, jobTitle, email, companyInfo } = this.props

    return (
      <form className="Form">
        <input type="text" id="name" name="fullname" placeholder="Fullname" onChange={(e) => this.handleChange(e)} />
        <input type="text" id="job" name="jobTitle" placeholder="Job Title" onChange={(e) => this.handleChange(e)} />
        <input type="text" id="email" value={email} name="email" placeholder="E-mail address" onChange={(e) => this.handleChange(e)} />
        <textarea id="companyinfo" name="companyInfo" cols="24" rows="5" placeholder="Company information" onChange={(e) => this.handleChange(e)}></textarea>

        <div className="select-wrapper">
          <label htmlFor="#selectcolor">Select Color:</label>
          <select name="selectColor" id="selectcolor" defaultValue="jet-black" onChange={(e) => this.handleChange(e)}>
            <option value="jet-black">Jet Black</option>
            <option value="rose-gold">Rose Gold</option>
            <option value="standard-gold">Standard Gold</option>
            <option value="ming-red">Ming Red</option>
            <option value="stunning-blue">Stunning Blue</option>
          </select>
        </div>
      </form>
    )
  }
}

export default Form