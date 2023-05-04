import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './chefs.css'
import { Link } from 'react-router-dom';

const Chefs = (props) => {
    const {chef_id, chef_name, chef_photo, experience, likes, numbers_of_recipes} = props.chefs;

    return (
        <div className='chef-card'>
            <div className="chef-img-box">
                <img src={chef_photo} alt="" />
            </div>
            <h3 className="name">{chef_name}</h3>
            <p className="experience">{experience}+ years experience</p>
            <div className="likes">
                <p className="recipe-number">Recipes: <span>{numbers_of_recipes}</span></p>
                <div className="like">
                    <FontAwesomeIcon icon={faThumbsUp} className='icon' />
                    <p>{likes}</p>
                </div>
            </div>
            <Link to={`/${chef_id}`} className="btn-primary">View Recipes</Link>
        </div>
    );
};

export default Chefs;