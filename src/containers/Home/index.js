import React from 'react';
import './Home.scss'
import Header from "../../component/Header";
import Background from "../../component/background";
import Features from "../Features";

const Home = props => {
    return (
        <>
            <Header />
            <Background/>
            <Features/>
            </>
    )
}


export default Home;