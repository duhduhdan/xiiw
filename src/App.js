import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes'
import faHashtag from '@fortawesome/fontawesome-pro-light/faHashtag'

import {
  IPhone,
  Phone,
  Pixel,
  ColorPicker,
  TextInput,
  Form,
  PhoneComponents,
} from './components'

import { components } from './mock'
import { fullHexColor, formatRGB } from './utility/colorHandler'

Modal.setAppElement('#root')

const modalStyle = {
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.9)`,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    width: 420,
    height: 420,
  },
}

class App extends Component {
  state = {
    isOpen: false,
    phoneComponents: [
      components[0].name,
      components[1].name,
      components[2].name,
    ],
    selectedComponent: '',
    deviceType: 'iphone',
    swatch: [
      'd9e3f0',
      'f47373',
      '697689',
      '2ccce4',
      '555555',
      '0693e3',
      '7bdcb5',
      'f78da7',
      '9900ef',
    ],
    currentHex: '0693e3',
  }

  openModal = selectedComponent => {
    return function() {
      this.setState(() => ({ isOpen: true, selectedComponent }))
    }
  }

  closeModal = () => {
    this.setState(() => ({ isOpen: false, selectedComponent: '' }))
  }

  updateColor = e => {
    const color =
      e.target && e.target.style && fullHexColor(formatRGB(e.target.style))
    this.setState(() => ({ currentHex: color }))
  }

  handleChange = e => {
    const value = e.target && e.target.value

    if (value.length <= 6) {
      this.setState(() => ({ currentHex: value }))
    }
  }

  render() {
    const {
      isOpen,
      phoneComponents,
      selectedComponent,
      deviceType,
      swatch,
      currentHex,
    } = this.state

    return (
      <Fragment>
        <Modal
          isOpen={isOpen}
          contentLabel={selectedComponent}
          style={modalStyle}
          onRequestClose={this.closeModal}
        >
          <Fragment>
            <button
              className="absolute right-1 top-1 bn white-80 bg-transparent"
              onClick={this.closeModal}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            <ColorPicker
              inputRender={({ hexValue }) => (
                <TextInput
                  iconRender={() => (
                    <div className="flex flex-column justify-center items-center ph3 br2 br--left bg-black-20">
                      <span className="black-50">
                        <FontAwesomeIcon icon={faHashtag} size="xs" />
                      </span>
                    </div>
                  )}
                  label="Color"
                  id="current-color"
                  tip="HEX value"
                  value={hexValue}
                  classNames={['br2', 'br--right']}
                  onChange={this.handleChange}
                />
              )}
              colors={swatch}
              hexValue={currentHex}
              updateColor={this.updateColor}
            />
          </Fragment>
        </Modal>

        <section className="mw9 center ph3-ns">
          <div className="flex">
            <div className="flex flex-row items-center justify-center w-60 pa2">
              <Phone
                phoneComponents={phoneComponents}
                phoneRender={
                  deviceType === 'iphone' ? (
                    <IPhone bgColor={currentHex} name="Yest" />
                  ) : (
                    <Pixel />
                  )
                }
              />
            </div>

            <div className="w-40 pa2">
              <Form />

              <PhoneComponents
                components={components}
                openModal={this.openModal}
              />
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default App
