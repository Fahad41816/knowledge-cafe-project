import React from 'react';
import image from '../../image/download (1).jpg';
import style from './navbar.module.css'

const navbar = () => {
    return (
        <div className={style.navbar}>
            <div>
                <h1>Knowledge Cafe</h1>
            </div>
            <div>
                <img className={style.image} src={image} alt="" />
            </div>
        </div>
    );
};

export default navbar;