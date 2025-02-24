export const Showtask = ({tasklist , setTasklist, task ,setTask}) => {
  
  const handleEdit = (id) => {
    const seletedTask =  tasklist.find(todo => todo.id === id);
    setTask(seletedTask);
  }
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTaskList);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">TODO </span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">CLEAR ALL</button>
      </div>
      <ul>
        {  tasklist.map((todo) =>(
        <li key={todo.id}>
          <p>
            <span className="name">{todo.name}</span>
            <span className="time">{todo.time}</span>
          </p>
          <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
          <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
        </li>
        )) }
      </ul>
    </section>
  )
}
