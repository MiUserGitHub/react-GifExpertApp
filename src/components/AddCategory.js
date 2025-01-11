import React from 'react';
import { useState } from 'react';

export const AddCategory = ({categories, setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        setInputValue(e.target.value);
       
    }

    const handleSubmit = (e) => { 

        e.preventDefault();

        const contain = categories.some(item => item.toLowerCase() === inputValue.toLowerCase());

        if (inputValue.trim().length > 2 && !contain) {

            setCategories( categories => 
                [inputValue, ...categories]
            );   
            setInputValue('');     

        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Buscar'
                value={inputValue}
                onChange={handleInputChange}
            />            
        </form>
    )
}

