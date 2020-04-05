import React, { Component } from "react";
import { connect } from "react-redux";


class Sidebar extends Component {
  render(){
    const stories = this.props.stories

  return (
    <div>
      <div className="user-info">
        <img
          alt="Perfil"
          src={this.props.picture}
        />
        <div className="user-bio">
          <strong>{this.props.user}</strong>
          <span>{this.props.username}</span>
        </div>
      </div>

      <div className="stories">
        <h2>Stories</h2>
        state.stories.map{}
        <div className="storie">
          <div className="storie-image">
            <img src={this.props.storiePicture} alt="user" />
          </div>
          <div className="storie-user">
            <strong>{this.props.storieUser}</strong>
            <span>{this.props.storieTime}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
}


function mapStateToProps(state){
  return{
    user: state.payload.name,
    username: state.payload.username,
    picture: state.profile.userPicture,
    stories: state.stories
  }
}

export default connect(mapStateToProps)(Sidebar)


// "user": "natgeo",
// "userPicture": "https://randomuser.me/api/portraits/men/11.jpg",
// "time": "há 22 minutos"
