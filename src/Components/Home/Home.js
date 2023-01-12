import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Reviews from './Reviews';
import Search from './Search';
import Tools from './Tools';

const Home = () => {
    return (
        <div className="px-12">
            <Banner></Banner>
            <h4 className="text-3xl mt-5 font-bold text-center text-teal-500">Tools</h4>
            <Search></Search>
            <Tools></Tools>
            <Reviews></Reviews>
            <Business></Business>
            <Footer></Footer>  
        </div>
    );
};

export default Home;