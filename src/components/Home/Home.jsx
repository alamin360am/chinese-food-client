import React from 'react';
import './home.css';

const Home = () => {
    return (
        <main>
            <div className="banner">
                <h1 className="title">All <span>Chinese Recipes</span> are here.</h1>
                <button className="btn-primary">Explore More</button>
            </div>
        </main>
    );
};

export default Home;