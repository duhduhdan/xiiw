const isHex = str => str.length <= 6

const toHex = str => Number(str).toString(16)

export const setBgColor = bg => (isHex(bg) ? `#${bg}` : bg)

export const rgbToHex = rgb =>
  toHex(rgb).length < 2 ? `0${toHex(rgb)}` : toHex(rgb)

export const fullHexColor = rgb =>
  rgb.reduce((accum, curr) => accum + rgbToHex(curr), '')

export const formatRGB = style =>
  style['background-color'].replace(/([a-zA-Z]|\(|\))/g, '').split(', ')
