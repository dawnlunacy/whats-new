import React from 'react';
import './Menu.css';

const Menu = (props) => {
    console.log("props",props)
    const menuOptions = Object.keys(props.menu);
    const cleanMenuOptions = menuOptions.filter(menuOption => menuOption !== "currentSelected");
    const menuOption = cleanMenuOptions.map(option => <li key={option}><button className={[option,"menuItem"].join(' ')} onClick={event => props.toggleCurrentSelected(event)}> {option} </button></li>)
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


