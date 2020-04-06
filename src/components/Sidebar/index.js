import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios'


class Sidebar extends Component {
  state = {
    stories: []
  }


  componentDidMount = () => {
    axios.get("http://localhost:3000/stories")
      .then(resposta => {
        this.setState({ stories: resposta.data })
      })
  }


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
        {this.state.stories.map(storie => (
        <div key = {storie.id}>
        <div className="storie">
          <div className="storie-image">
            <img src={storie.userPicture} alt="user" />
          </div>
          <div className="storie-user">
            <strong>{storie.user}</strong>
            <span>{storie.time}</span>
          </div>
        </div>
        </div>
        ))}
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
  }
}

export default connect(mapStateToProps)(Sidebar)


// "user": "natgeo",
// "userPicture": "https://randomuser.me/api/portraits/men/11.jpg",
// "time": "há 22 minutos"
