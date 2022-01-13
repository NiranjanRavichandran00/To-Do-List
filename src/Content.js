import ItemList from './ItemList';

function Content({records, handleCheck, handleDelete}) {

    return (
        <main>
          {records.length ? (
            <ItemList
                records={records}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}/>
          ) : (
            <p style = {{marginTop: '2rem'}}> Your list is empty.</p>
          )}
        </main>
    )
}

export default Content
