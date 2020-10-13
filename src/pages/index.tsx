import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import React from "react"

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
    <>
      <div className="profile-img">
        <Image fixed={data.fileName.childImageSharp.fixed} rounded />
      </div>
      <div className="profile-title">
        <p>Hi, there 👋</p>
      </div>
      <div className="profile-description">
        <p>
          Welcome to my personal page. I'm <b>Rurik Pinheiro</b> and this is
          where I put all my programming stuffs.
        </p>
      </div>
    </>
  )
}
