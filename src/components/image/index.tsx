import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { styled } from "@mui/material"

interface ImgRoundedProps {
  image: IGatsbyImageData
  rounded?: boolean
  alt?: string
}

const StyledImage = styled(GatsbyImage)(() => ({
  borderRadius: "50%",
}))

const Image = ({ image, alt = "", rounded = false }: ImgRoundedProps) => (
  <StyledImage image={image} alt={alt} />
)

export default Image
