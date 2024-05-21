import React, { useState} from 'react';

const AddItem = ({addItem}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        addItem(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            velue={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Add an item'
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItem;
