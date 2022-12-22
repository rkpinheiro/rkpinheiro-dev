import { IGatsbyImageData, getImage } from "gatsby-plugin-image"
import React from "react"
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material"
import Image from "../image"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Divider, Link, Typography, styled } from "@mui/material"

interface GraphqlQuery {
  fileName: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}))

export const ProfileInfo = () => {
  const data: GraphqlQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
        }
      }
    }
  `)

  const profileImg = getImage(data.fileName.childImageSharp)

  return (
    <StyledWrapper>
      {profileImg && (
        <div className="profile-img">
          <Image image={profileImg} rounded />
        </div>
      )}

      <Typography variant="h2" mt={3} gutterBottom>
        I'm <b>Rurik Pinheiro</b>
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: theme => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Link
          href="https://github.com/rkpinheiro"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          aria-label="Github Profile"
        >
          <GitHub />
        </Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link
          href="https://twitter.com/rkpinheiro"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          aria-label="Twitter Profile"
        >
          <Twitter />
        </Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link
          href="https://www.linkedin.com/in/rkpinheiro/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          aria-label="Linkedin Profile"
        >
          <LinkedIn />
        </Link>
      </Box>
      <div></div>
    </StyledWrapper>
  )
}
