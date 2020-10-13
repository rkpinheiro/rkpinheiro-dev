import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import React from "react"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

import Image from "../components/image"

import "./styles.css"

interface GraphqlQuery {
  fileName: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

export default function Home() {
  const data: GraphqlQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="profile">
        <div className="profile-img">
          <Image fixed={data.fileName.childImageSharp.fixed} rounded />
        </div>
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
