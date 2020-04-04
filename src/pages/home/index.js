import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";

export default function Home() {
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
