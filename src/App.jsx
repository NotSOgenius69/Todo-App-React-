import './App.css'
import Header from './Components/Header'
import InputFields from './Components/InputFields';
import List from './Components/List';
import { useState } from "react";
function App() {
  let [tasklist,setList] = useState(new Map());
  let [datelist,setDate] = useState(new Map());

  const handleAdd = (task,taskId,date)=>{
     let newTaskList = new Map(tasklist);
     newTaskList.set(taskId,task);
     setList(newTaskList);

     let newDateList = new Map(datelist);
      newDateList.set(taskId,date);
      setDate(newDateList);
  };

  const handleDelete = (itemId) => {
    let newTaskList = new Map(tasklist);
    newTaskList.delete(itemId);
    setList(newTaskList);

    let newDateList = new Map(datelist);
    newDateList.delete(itemId);
    setDate(newDateList);
  };
  return (
    <div className='mainContainer'>
    <Header/>
    <InputFields handleAdd={handleAdd}/>
    <List tasklist={tasklist} datelist={datelist} 
    handleDelete={handleDelete}/>
    </div>
  );

}

export default App
