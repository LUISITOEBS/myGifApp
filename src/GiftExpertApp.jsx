import { useState } from 'react';
import { AddCategory, GifGrid, DeleteLastCategory } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Togedemaru']);

    const handleAddCategory = ( newCategory ) => {  
        if( categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] );
        // setCategories( (category) => [...category, 'baies'] );
        // setCategories( ['Valorant', ...categories] );
    };

    const deleteCategory = () => {  
        const newCategories = categories.slice(1);
        setCategories([...newCategories]);
        console.log(newCategories);
    };

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory 
                onNewCategory={ handleAddCategory } 
            />
            <br/><br/>
            <DeleteLastCategory 
                onDeleteCategory={ deleteCategory } 
            />

            { 
                categories.map( category => (
                    <GifGrid 
                        key = { category }
                        category = { category }
                    />
                )) 
            }

        </>

    )
}
