import { useState } from "react";

function InputFields({ handleAdd }) {
  let [task,setTask]=useState("");
  let [taskId,setTaskId]=useState(0);
  let [date,setDate]=useState("");

  const handleTaskChange=(event)=>{
    setTask(event.target.value);
    setTaskId(taskId+1);
  }
  const handleDateChange=(event)=>{
    setDate(event.target.value);
  }
  const handleAddButtonClick=()=>{
    handleAdd(task,taskId,date);
    setTask("");
    setDate("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row my-row">
          <div className="col-6">
          <input type="text" className="form-control task-field" id="floatingInputGroup1" placeholder="Task" value={task}
          onChange={handleTaskChange}/>
          </div>
          <div className="col-4">
            <input type="date" className="date-field" value={date}
            onChange={handleDateChange}></input>
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success" 
          onClick={handleAddButtonClick}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputFields;
