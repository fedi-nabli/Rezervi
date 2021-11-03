import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Rezervi',
  description: 'Find the best tickets of your favorites shows from the best price'
}

export default Meta
