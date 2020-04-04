import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="user-info">
        <img
          alt="Perfil"
          src="https://randomuser.me/api/portraits/women/25.jpg"
        />
        <div className="user-bio">
          <strong>Jeniffer</strong>
          <span>jenicarvalho</span>
        </div>
      </div>

      <div className="stories">
        <h2>Stories</h2>

        <div className="storie">
          <div className="storie-image">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
          </div>
          <div className="storie-user">
            <strong>history</strong>
            <span>há 2 horas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
