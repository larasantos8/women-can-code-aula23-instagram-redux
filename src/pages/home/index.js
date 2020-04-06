import React, { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";
import axios from 'axios'
import { connect } from "react-redux";

class Home extends Component{
  
  componentDidMount = async () => {
    await axios.get("http://localhost:3000/user")
    .then(resposta => {
      this.props.dispatch({
        type: 'GET_USER',
        payload: resposta.data
      })
    })

    await axios.get("http://localhost:3000/perfil")
    .then(resposta => {
      this.props.dispatch({
        type: 'GET_PROFILE',
        payload: resposta.data
      })
    })
  }
  
  render(){
    return (
      <>
      <Header />
      <div className="home">
      <TimeLine />
      <Sidebar />
      </div>
      </>
      );
    }
  }
  
  export default connect()(Home)