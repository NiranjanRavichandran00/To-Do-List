import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({record, handleCheck, handleDelete}) => {
    return (
        <li className = "item">
            <input
                type = "checkbox"
                onChange = { () => handleCheck(record.id)}
                checked = {record.exists}
            />
            <label
                style = {(record.exists) ? {fontWeight: 'bold'} : null}
                onDoubleClick= {() => handleCheck(record.id)}
            >{record.item}</label>
            <FaTrashAlt 
                onClick={() => handleDelete(record.id)}
                role = "button" 
                tabIndex = "0"
                aria-label={`Delete ${record.item}`}
            />
        </li>
    )
}

export default LineItem
