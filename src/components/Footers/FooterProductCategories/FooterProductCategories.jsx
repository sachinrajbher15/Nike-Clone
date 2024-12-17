import React from 'react'
import '../FooterProductCategories/FooterProductCategories.css'
function FooterProductCategories () {
    return (
        <div className='footer1-container'>
            <div className="icons-list-container">
            <h2 className='footer1-header'>Icons</h2>
                <ul>
                    <li>Air Force 1</li>
                    <li>Huarache</li>
                    <li>Air Max 90</li>
                    <li>Air Max 95</li>
                    <li>Air Max 97</li>
                    <li>Air Max 270</li>
                    <li>Air Max 720</li>
                    <li>All Air Max</li>
                    <li>Vapormax</li>
                </ul>
            </div>
            <div className="shoes-list-container">
            <h2 className='footer1-header'>Shoes</h2>
                <ul>
                    <li>All Shoes</li>
                    <li>Custom Shoes</li>
                    <li>Jordan Shoes</li>
                    <li>Running Shoes</li>
                    <li>Basketball Shoes</li>
                    <li>Football Shoes</li>
                    <li>Gym & Training Shoes</li>
                    <li>Lifestyle Shoes</li>
                </ul>
            </div>
            <div className="clothing--list-container">
                <h2 className='footer1-header'>Clothing</h2>
                <ul>
                    <li>All Clothing</li>
                    <li>Modest Wear</li>
                    <li>Hoodies & Pullovers</li>
                    <li>Shirts & Tops</li>
                    <li>Jackets</li>
                    <li>Compression & Nike Pro</li>
                    <li>Trousers & Leggings</li>
                    <li>Shorts</li>
                </ul>
            </div>
            <div className="kids--list-container">
                <h2 className='footer1-header'>Kids'</h2>
                <ul>   
                    <li>Infant & Toddler Shoes</li>
                    <li>Kids' Shoes</li>
                    <li>Kids' Jordan Shoes</li>
                    <li>Kids' Basketball Shoes</li>
                    <li>Kids' Running Shoes</li>
                    <li>Kids' Clothing</li>
                    <li>Kids' Backpacks</li>
                    <li>Kids' Socks</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterProductCategories;
