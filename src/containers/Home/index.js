import React from 'react';
import './Home.scss'
import Header from "../../component/Header";
import Background from "../../component/background";
import Features from "../Features";
import Articles from "../Articles";

const Home = props => {
    return (
        <>
            <Header />
            <Background/>
            <Features/>
            <Articles/>
            </>
    )
}


export default Home;