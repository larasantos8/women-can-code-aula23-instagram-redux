import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";

export default class TopInfo extends Component {
  render() {
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>1</b>
        </span>
        <span>
          <FiUser />
          Eu
        </span>
      </div>
    );
  }
}
