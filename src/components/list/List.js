import React from 'react'

const Ul = `ul`
const Ol = `ol`

const List = ({ ordered, children, ...props }) =>
  React.createElement(ordered ? Ol : Ul, props, children)

export default List
