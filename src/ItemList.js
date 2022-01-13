import LineItem from "./LineItem"

const ItemList = ({records, handleCheck, handleDelete}) => {
    return (
        <ul>
            {records.map((record) => (
                <LineItem
                    key = {record.id}
                    record = {record}
                    handleCheck ={handleCheck}
                    handleDelete = {handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList
