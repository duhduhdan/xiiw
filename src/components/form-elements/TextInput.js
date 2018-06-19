import React, { Fragment } from 'react'

const TextInput = ({
  iconRender,
  label,
  id,
  tip,
  value,
  classNames = [],
  ...props
}) => (
  <Fragment>
    <label htmlFor={id} className="db mb2 f6 fw6 mid-gray">
      {label} {tip && <span className="normal gray">({tip})</span>}
    </label>
    <div className="flex">
      {!!iconRender && iconRender()}
      <input
        type="text"
        id={id}
        className={classNames
          .concat(`db pa2 w-100 input-reset ba b--black-20`)
          .join(' ')}
        value={value || ''}
        {...props}
      />
    </div>
  </Fragment>
)

export default TextInput
