import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

import Image from "../components/image"

import "./styles.css"
import { IGatsbyImageData, getImage } from "gatsby-plugin-image"

interface GraphqlQuery {
  fileName: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export default function Home() {
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
    <div className="container">
      <div className="profile">
        {profileImg && (
          <div className="profile-img">
            <Image image={profileImg} rounded />
          </div>
        )}
        <div className="profile-title">
          <p>
            I'm <b>Rurik Pinheiro</b>
          </p>
        </div>
        <div className="profile-social">
          <a
            href="https://github.com/rkpinheiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/rkpinheiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/rkpinheiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}
