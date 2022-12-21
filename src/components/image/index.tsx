import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import "./styles.css"
import classnames from "classnames"

interface ImgRoundedProps {
  image: IGatsbyImageData
  rounded?: boolean
  alt?: string
}

const Image = ({ image, alt = "", rounded = false }: ImgRoundedProps) => (
  <GatsbyImage className={classnames({ rounded })} image={image} alt={alt} />
)

export default Image
