import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('Metal Slug');

    const handleInputChance = ({ target }) => {
        setinputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim();
        if(value.length <= 1)return;
        onNewCategory(value);
        setinputValue('');
    };

    return (
        <form onSubmit = { onSubmit }>
            <input 
                type = "text"
                placeholder = "Introduzca una palabra"
                value = { inputValue }
                onChange= { handleInputChance }
            />
        </form>
    );
}
