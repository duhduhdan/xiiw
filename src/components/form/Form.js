import React, { Component } from 'react'

import { Heading, TextInput, Fieldset } from '../'

class Form extends Component {
  state = { appName: '', isiOS: false, isAndroid: false }

  handleChange = e => {
    const value =
      e.target && e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value
    const name = e.target.name
    this.setState(() => ({ [name]: value }))
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleClear = () => {
    this.setState(() => ({ appName: '', isiOS: false, isAndroid: false }))
  }

  render() {
    const { appName, isiOS, isAndroid } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb4">
          <Heading
            title="Information"
            subHeading="Tell us more about the app you want to build"
          />
        </div>
        <div className="w-100">
          <div className="mb4">
            <TextInput
              label="Name"
              id="app-name"
              tip="required"
              classNames={['br2']}
              onChange={this.handleChange}
              value={appName}
              name="appName"
            />
          </div>
          <Fieldset
            fields={[
              {
                id: 'iOS',
                label: 'iOS',
                name: 'isiOS',
                checked: isiOS,
              },
              {
                id: 'android',
                label: 'Android',
                name: 'isAndroid',
                checked: isAndroid,
              },
            ]}
            legend="Devices"
            tip="chose all that apply"
            onChange={this.handleChange}
          />

          <button
            className="bn grow f6 br2 ph3 pv2 mb2 dib white bg-dark-green a11y"
            type="submit"
          >
            <span className="a11y__content" tabIndex="-1">
              Save
            </span>
          </button>

          <button
            className="dib ph3 pv2 ml3 mb2 ba br2 f6 mid-gray bg-transparent grow"
            type="button"
            onClick={this.handleClear}
          >
            Clear form
          </button>
        </div>
      </form>
    )
  }
}

export default Form
