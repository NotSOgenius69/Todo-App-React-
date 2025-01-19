const List = ({ tasklist , datelist, handleDelete }) => {
  var id = 0;
  return (
    <>
    <h3>Tasks List</h3>
    {tasklist.size === 0?<h5>List is empty!Chill kor.</h5>:
    <ul className="list-group">
    {
        
        [...tasklist].map(([itemId,item])=>
        <div key={item.concat(++id).toString()} className="container text-center">
        <div className="row my-row">
        <div className="col-10">
        <li className="list-group-item my-list-item">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          id={id.toString().concat("-Checkbox")}
        />
        <label
          className="form-check-label stretched-link"
          htmlFor={id.toString().concat("-Checkbox")}>
          {item}
        </label>
        <label
          id='dateLabel'
          className="form-check-label stretched-link"
          htmlFor={id.toString().concat("-Checkbox")}>
          {datelist.get(itemId)}
        </label>
        </li>
       </div>
       <div className="col-2">
       <button type="button" className="btn btn-success my-btn" id={id.toString().concat("-Button")}
       onClick={()=>handleDelete(itemId)}>Delete</button>
       </div>
       </div>
       </div>
       )
    }
    </ul>
    }
    </>
  );
};
export default List;
