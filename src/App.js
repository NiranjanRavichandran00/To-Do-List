import Header from './Header'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react';

function App() {

  const [records, setRecords] = useState(JSON.parse(localStorage.getItem('toDoList')));
  const [newRecord, setNewRecord] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveRecords = (recordsCopy) => {
    setRecords(recordsCopy);
    localStorage.setItem('toDoList', JSON.stringify(recordsCopy));
  }

  const addItem = (record) => {
    const id = records.length ? records[records.length - 1].id + 1 : 1;
    const myNewRecord = {id, exists: false, item: record};
    const recordsCopy = [...records, myNewRecord];
    setAndSaveRecords(recordsCopy);
  }

  const handleCheck = (recordNum) => {
    const recordsCopy = records.map((record) => record.id === recordNum ? { ...record, exists: !record.exists} : record);
    setAndSaveRecords(recordsCopy);
  }

  const handleDelete = (recordNum) => {
    const recordsCopy = records.filter((record) => record.id !== recordNum);
    setAndSaveRecords(recordsCopy);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newRecord === '') return;
    addItem(newRecord);
    setNewRecord('');
  }

  return (
    <div className="App">
      <Header title = "To Do List"/>
      <AddItem 
        newRecord = {newRecord}
        setNewRecord = {setNewRecord}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <Content  
        records = {records.filter(record => ((record.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>
      <Footer
        length = {records.length} />
    </div>
  );
}

export default App;
