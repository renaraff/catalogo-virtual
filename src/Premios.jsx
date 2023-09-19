import React from 'react'
import MenuCatalogo from './Menu'
import Style from "./menu.module.css"
function Premios() {
  return (
    <>
    <MenuCatalogo></MenuCatalogo>
    <div className={Style.div}>
    <span className={Style.titulo}>Sobre a Greta Gerwig </span>
    <span></span>
  </div>
  </>
  )
}

export default Premios