import React from 'react'

const ColorPicker = ({ inputRender, colors, hexValue, updateColor }) => (
  <section className="flex flex-column justify-between h-100">
    <div
      style={{ backgroundColor: `#${hexValue}` }}
      className="flex flex-column items-center justify-center h5 w-100"
    >
      <h2 className="fw6 white-90">#{hexValue}</h2>
    </div>
    <div className="pa3">
      <ul className="flex flex-wrap list pl0 mt0">
        {colors.map(color => (
          <li key={color} className="ma2 w2 h2 grow">
            <button
              style={{ backgroundColor: `#${color}` }}
              onClick={updateColor}
              className="w-100 h-100 bn"
            />
          </li>
        ))}
      </ul>
    </div>
    {inputRender && <div className="pa3">{inputRender({ hexValue })}</div>}
  </section>
)

export default ColorPicker
