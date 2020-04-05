import React, { Component } from "react";
import { connect } from "react-redux";


class Sidebar extends Component {
  render(){
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

        <div className="storie">
          <div className="storie-image">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
          </div>
          <div className="storie-user">
            <strong>{this.props.storieUser}</strong>
            <span>há 2 horas</span>
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
    storiePicture: state.stories.userPicture,
    storieUser: state.stories.user,
    storieTime: state.stories.time
  }
}

export default connect(mapStateToProps)(Sidebar)


// "user": "natgeo",
// "userPicture": "https://randomuser.me/api/portraits/men/11.jpg",
// "time": "há 22 minutos"



// {
//   state.stories.map((item) => (
//     <img key = {item.id} src={item.foto}></img>
//   ))}


// <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
//           </div>
//           <div className="storie-user">
//             <strong>{this.props.storieUser}</strong>
//             <span>{this.props.storieTime}</span>