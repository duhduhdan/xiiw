import React, { Fragment } from 'react'

const Phone = ({ phoneRender, listRender, phoneComponents }) => (
  <Fragment>
    <Fragment>{phoneRender || <Fragment />}</Fragment>
    <Fragment>
      {(listRender && listRender({ phoneComponents })) || <Fragment />}
    </Fragment>
  </Fragment>
)

export default Phone
