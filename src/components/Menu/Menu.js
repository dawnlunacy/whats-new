import React from 'react';
import './Menu.css';
import { FaMapMarked } from 'react-icons/fa'


const Menu = (props) => {
    console.log("props",props)
    const menuOptions = Object.keys(props.menu);
    const cleanMenuOptions = menuOptions.filter(menuOption => {
     return menuOption !== "currentTopic" && menuOption !== "currentDisplay" && menuOption !== "icons"
    });
    const menuOption = cleanMenuOptions.map((option, i) => {
        return <li key={option} ><button 
                                className={[option,"menuItem"].join(' ')} 
                                onClick={event => props.toggleCurrentSelected(event)}>  
                                 {props.menu.icons[i]()}
                                 {option} 
                             </button></li>})
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


