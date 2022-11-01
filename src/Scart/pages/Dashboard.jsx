import React from "react";
import Header from "../components/Header";
import "../scss/main.scss";
import Hero from "../components/Hero";
import { useEffect } from "react";

const Dashboard = () => {
  console.log('some')
  useEffect(()=> {
    try {
      console.log('first')
    } catch (error) {
      console.log(error)
    }
  },[])
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Dashboard;
