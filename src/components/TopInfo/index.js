import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import axios from 'axios'
import { connect } from "react-redux";


class TopInfo extends Component {

  componentDidMount = async () => {
    await axios.get("http://localhost:3000/user")
    .then(resposta => {
      this.props.dispatch({
        type: 'GET_USER',
        payload: resposta.data
      })
    })
  }

  render() {
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>{this.props.contador}</b>
        </span>
        <span>
          <FiUser />
          {this.props.name}
        </span>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    contador: state.count,
    user: state.payload
  }
}

export default connect(mapStateToProps)(TopInfo)