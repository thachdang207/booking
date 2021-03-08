import React, { useState } from 'react';
import './Searchbar.css'
import JSONDATA from './data.json';

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
        <div className = "search-bar">
            <form className = "form">
                <input 
                    type="text" 
                    placeholder="Bạn muốn đi đâu?" 
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }}
                />
                <select name="quantity" id="quantity">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                </select>
            </form>
            {/* eslint-disable-next-line array-callback-return */}
            {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                    return val
                } else if (val.city.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className = "city" key ={key}>
                        <p>{val.city}</p>
                    </div>
                )
            })}

        </div>
    );
}

export default Searchbar;