import React from 'react'

const Fieldset = ({ fields, legend, tip, ...props }) => (
  <fieldset className="pa0 bn">
    <legend className="f6 fw6 db black-70 mb2">
      {legend} {tip && <span className="normal black-60">({tip})</span>}
    </legend>
    <div className="flex mb4">
      {fields.map(({ id, label, name, checked }) => (
        <div className="flex items-center pa2" key={`field--${id}`}>
          <input
            className="mr2"
            type="checkbox"
            id={id}
            checked={checked}
            name={name}
            {...props}
          />
          <label htmlFor={id} className="lh-copy">
            {label}
          </label>
        </div>
      ))}
    </div>
  </fieldset>
)

export default Fieldset
