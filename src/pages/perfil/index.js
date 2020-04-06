import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default class Perfil extends Component {

  state = {
    infoPerfil: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/perfil")
      .then(resposta => {
        this.setState({ infoPerfil: resposta.data })
      })
  }


    render(){

      const { infoPerfil } = this.state

      return(
      <>
      <Helmet>
          <title>Perfil</title>
      </Helmet>

      <div>
        <div> <img src={infoPerfil.userPicture}></img></div>
            <div><h1>{infoPerfil.name}</h1></div>

            <div>
            <p>Age: {infoPerfil.age}</p>
            <p>Join At: {infoPerfil.joinAt}</p>
            <p>Site: {infoPerfil.site}</p>
            <p>Bio: {infoPerfil.bio}</p>
            </div>
            
            <div>futuros seguidores</div>
            
            <div>
            {infoPerfil.stacks !== undefined && (
              <ul> 
                Stacks:{infoPerfil.stacks.map((item, indice) => (
                  <li key={indice}>{item}</li>
                ))}
              </ul>
            )}
            </div>
            
            <div>
            {infoPerfil.imagens !== undefined && (
            <>
              {infoPerfil.imagens.map((item) => (
              <img key = {item.id} src={item.foto}></img>
              ))}
            </>
            )}
            </div>

      </div>
      </>
      )
    }


}

// "userPicture": "https://randomuser.me/api/portraits/women/19.jpg",
//     "name": "Lara Santos",
//     "age": 20,
//     "joinAt": "09/12/2019",
//     "bio": "Dev Front end vida loca",
//     "site": "www.google.com",
//     "stacks":