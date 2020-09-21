import React from "react"
import Img, { FixedObject } from "gatsby-image"
import "./styles.css"
import classnames from "classnames"

interface ImgRoundedProps {
  fixed: FixedObject
  rounded?: boolean
}

const Image = ({ fixed, rounded = false }: ImgRoundedProps) => (
  <Img fixed={fixed} className={classnames({ rounded })} />
)

export default Image
