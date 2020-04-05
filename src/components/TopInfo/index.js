import React, { Component } from "react";
import { FiUser, FiHeart, FiHome } from "react-icons/fi";
import { connect } from "react-redux";
import { Link, BrowserRouter } from 'react-router-dom'

class TopInfo extends Component {

  render() {
    return (
      <div className="top-info">
        <span>
        <BrowserRouter>
        <Link to="/">
          <FiHome />
          <b></b>
          </Link>
          </BrowserRouter>
        </span>
        <span>
          <FiHeart />
          <b>{this.props.contador}</b>
        </span>
        <span>
          <BrowserRouter>
          <Link to ="/perfil">
          <FiUser />
          {this.props.user}
          </Link>
          </BrowserRouter>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    contador: state.payload.likes,
    user: state.payload.name
  }
}

export default connect(mapStateToProps)(TopInfo)