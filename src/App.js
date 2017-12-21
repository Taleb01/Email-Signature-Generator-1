import React, { Component } from 'react';

import Form from './Components/Form'
import Display from './Components/Display'
import Header from './Components/Header'

import './App.sass'


class App extends Component {
  constructor() {
    super()

    this.state = {
      fullname: [],
      jobTitle: '',
      email: '',
      companyInfo: '',
      selectColor: 'jet-black'
    }

    this.formValueToState = this.formValueToState.bind(this)
  }

  formValueToState(target, value) {

    if (target !== 'fullname') {
      this.setState({
        [target]: value
      })
    } else if (target === 'fullname') {
      const companyDomain = `acme.com`
      const nameArr = value.split(' ')

      if (nameArr.length > 1) {
        const firstChar = nameArr[0].charAt(0).toLowerCase()
        const lastName = nameArr[nameArr.length - 1].toLowerCase()

        this.setState({
          [target]: nameArr,
          email: `${firstChar}${lastName}@${companyDomain}`
        })
      } else {
        const lowercaseName = nameArr[0].toLowerCase()

        this.setState({
          [target]: nameArr[0],
          email: `${lowercaseName}@${companyDomain}`
        })

      }

    }
  }

  render() {
    const { fullname, jobTitle, email, companyInfo, selectColor } = this.state

    return (
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Form
            fullname={fullname}
            jobTitle={jobTitle}
            jobTitle={jobTitle}
            email={email}
            companyInfo={companyInfo}
            formValueToState={this.formValueToState}
          />
          <Display
            fullname={fullname}
            jobTitle={jobTitle}
            jobTitle={jobTitle}
            email={email}
            selectColor={selectColor}
            companyInfo={companyInfo}
          />
        </div>
      </div>
    );
  }
}

export default App;