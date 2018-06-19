import React, { Fragment } from 'react'

const Heading = ({ title, subHeading }) => (
  <Fragment>
    <h2 className="fw6 dark-gray">{title}</h2>
    {(!!subHeading && <p className="gray">{subHeading}</p>) || null}
  </Fragment>
)

export default Heading
