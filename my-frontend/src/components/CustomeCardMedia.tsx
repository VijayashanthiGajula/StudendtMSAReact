import { CardMedia } from '@mui/material'
import React from 'react'

const CustomeCardMedia = (props: { img: string | undefined }) => {
  return (
    <div>
    <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt="Paella dish"
      />
      </div>
  )
}

export default CustomeCardMedia