import React from 'react';
import './Home.scss'
import Header from "../../component/Header";
import Background from "../../component/background";
import Features from "../Features";
import Articles from "../Articles";
import Footer from "../Footer";

const Home = props => {
    return (
        <div style={{width:'100%' ,  height:'100%'}}>
            <Header />
            <Background/>
            <Features/>
            <Articles/>
            <Footer/>
            </div>
    )
}


export default Home;