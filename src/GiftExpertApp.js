import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory categories = {categories} setCategories = {setCategories}/>
            <hr />
            <ol>
                {categories.map(category =>

                    <GifGrid
                        key={category} 
                        category={category} 
                    />
                
                )}
            </ol>

        </>
    )
}

export default GiftExpertApp;