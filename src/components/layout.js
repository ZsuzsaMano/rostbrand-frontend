import React from "react"
import Header from './nav'
import Footer from './footer'
import "../styles/style.scss"

export default function Layout({ children }) {
  return (
    <>
    <Header/>
      {children}
      <Footer/>
    </>
  )
}
