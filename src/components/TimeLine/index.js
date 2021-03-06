import React, { Component } from "react";
import { FiHeart } from 'react-icons/fi'
import { connect } from 'react-redux'
import axios from 'axios'

class TimeLine extends Component {

  state = {
    posts: []
  }

  curtir = async () => {
    this.props.user.likes++

    await axios.put(" http://localhost:3000/user/", this.props.user)
      .then(resposta => {
        this.props.dispatch({
          type: 'PUT_LIKES',
          payload: resposta.data
        })
      }) 
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/posts")
      .then(resposta => {
        this.setState({ posts: resposta.data })
      })
  }

  render(){

    return (
      <div className="post">
        {this.state.posts.map(post => (
          <div key = {post.id}>
        <header>
          <img src= {post.userPicture} alt="user" />
          <div className="post-user">
            <strong>{post.user}</strong> 
            <span>{post.location}</span>
          </div>
        </header>
        <div className="post-image">
          <img src={post.postPicture} alt="post" />
        </div>
        <div className="post-likes" onClick = {this.curtir}>
          <FiHeart />
        </div>
        <p>{post.description}</p>
        </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
  user: state.payload
  }
}

export default connect(mapStateToProps)(TimeLine)



// "user": "natgeo",
//       "userPicture": "https://randomuser.me/api/portraits/men/25.jpg",
//       "postPicture": "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/e35/75484620_229829194666049_2204997675360209413_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=YHZqvj446M0AX-G0w2Y&oh=ee053d9653cb1ab3a2ca74c12a3022d9&oe=5EAF8BD0",
//       "location": "Ocean",
//       "description":