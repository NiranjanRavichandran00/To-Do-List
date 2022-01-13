import styled from 'styled-components'
import { useRef } from 'react';

const Button = styled.button`
    background: lightcoral;
    border-radius: 3px;
    font-size: 16px;
    border: 2px solid paleturquoise;
    color: paleturquoise;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    `;

const AddItem = ({newRecord, setNewRecord, handleSubmit}) => {

    const inputRef  = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item  &ensp;</label>  
            <input
                autoFocus
                ref = {inputRef}
                id  = 'addItem'
                type = 'text'
                placeholder='Add Item'
                required
                value = {newRecord}
                onChange={(e) => setNewRecord(e.target.value)}
            />
            <Button
                type = 'submit'
                aria-label= 'Add Item' 
                onClick={() => inputRef.current.focus()}
            >Submit</Button>
        </form>
    )
}

export default AddItem
