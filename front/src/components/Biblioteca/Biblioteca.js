import React from 'react';
import "./Biblioteca.css"

import logo from "../../images/logo.png"

import MusicBar from "../MusicBar/MusicBar"

export default class Biblioteca extends React.Component {
  render(){
    return(
      <div className="alinhar b-background">
        <section className="b-container" >
          <section className="b-titulo-container">
            <h1 className="b-titulo">Minhas músicas</h1>
          </section>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
          <MusicBar musicName={"Nome da musica AQUI"} recording={"DDD"} authorName={"Nome do Autor"}/>
        </section>
      </div>
    )
  }
}