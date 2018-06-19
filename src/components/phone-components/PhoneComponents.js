import React, { Fragment } from 'react'

import { Heading, List } from '../'

const PhoneComponents = ({ components, openModal }) => (
  <Fragment>
    <Heading
      title="Components"
      subHeading="Choose visual elements you want your app to use."
    />
    <List className="list pl0 mt0">
      {components.map(({ name, description }) => (
        <li
          key={name}
          className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
        >
          <div className="pl3 flex-auto">
            <span className="f5 db black-80 fw6">{name}</span>
            <span className="f6 db black-70">{description}</span>
          </div>
          <div>
            <button
              type="button"
              className="dib h2 w2 ba br-100 f6 mid-gray bg-transparent dim"
              onClick={openModal(name)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </List>
  </Fragment>
)

export default PhoneComponents
