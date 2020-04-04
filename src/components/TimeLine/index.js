import React, { Component } from "react";
import { FiHeart } from 'react-icons/fi'
import { connect } from 'react-redux'

class TimeLine extends Component {

  curtir = () => {
    this.props.dispatch({ type: 'LIKE'})
  }

  render(){
  return (
    <div className="post">
      <header>
        <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user" />
        <div className="post-user">
          <strong>nasa</strong>
          <span>Mars</span>
        </div>
      </header>
      <div className="post-image">
        <img src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg" alt="post" />
      </div>
      <div className="post-likes" onClick = {this.curtir}>
        <FiHeart />
      </div>
      <p>Waving goodbye to a spacecraft.</p>
    </div>
  );
}
}

export default connect()(TimeLine)