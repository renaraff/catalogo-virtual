import React from 'react'
import MenuCatalogo from './Menu'
import Style from "./menu.module.css"
function Sobre() {
  return (
    <>
    <MenuCatalogo></MenuCatalogo>
    <div className={Style.div}>
    <span className={Style.titulo}>Sobre a Greta Gerwig </span>
    <span>Greta Gerwig é uma atriz, roteirista e diretora americana que ganhou reconhecimento pelo seu trabalho com o movimento cinematográfico nova-iorquino Mumblecore. Entre os anos de 2006 e 2009, ela apareceu em diversos filmes dirigidos por Joe Swanberg, tendo colaborado com roteiro e direção de alguns, incluindo Hannah Sobe as Escadas e Nights and Weekends. 
    Filha de uma família de classe média baixa, Greta nasceu em Sacramento, Califórnia, e estudou em uma escola católica só para meninas até se formar em 2002. A cineasta tinha interesse em estudar teatro musical em Nova York, mas acabou completando os estudos em inglês e filosofia na faculdade Barnard.
    No entanto, Greta performou ao lado da amiga e colega de quarto Kate McKinnon em um evento tradicional da universidade Columbia. Sua intenção inicial era ser apenas roteirista, mas Greta não conseguiu passar em nenhum programa voltado para Belas Artes. Por conta disso, focou no cinema independente e em atuar durante os primeiros anos de sua carreira. 
    A partir da década de 2010, Gerwig colaborou com o seu marido Noah Baumbach em uma série de filmes, entre eles Frances Ha, pelo qual foi indicada ao Globo de Ouro. Além disso, apareceu em filmes como Descobrindo o Amor, Para Roma com Amor, Jackie, Mulheres do Século 20 e Ilha dos Cachorros. 
    Como diretora solo, Greta Gerwig dirigiu Lady Bird e Adoráveis Mulheres, ambos reconhecidos pela academia do Oscar para a categoria de melhor filme em seus respectivos anos de lançamento. Além disso, Gerwig já concorreu nas categorias de melhor direção, melhor roteiro e melhor roteiro adaptado.</span>
  </div>
  </>
  )
}

export default Sobre