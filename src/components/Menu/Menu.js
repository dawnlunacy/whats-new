import React from 'react';
import './Menu.css';

const Menu = (props) => {
    console.log(props.menu)
    const menuOptions = Object.keys(props.menu);
    const menuOption = menuOptions.map(option => <li key={option}><button className={[option,"menuItem"].join(' ')} > {option} </button></li>)
    console.log(menuOption)
return (
    <nav> 
        <h1>What's New</h1> 
        <ul>
            {menuOption}
        </ul>
    </nav>
)
}

export default Menu;


