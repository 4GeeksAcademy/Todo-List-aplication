import React, { useState } from "react";

const Home = () => {
  const [tarea, setTareas] = useState([]);
  const [text, setText] = useState('');
 
const handleKeyDown = (e) => {
  if (e.key === "Enter" && text.trim() !== "") {
    setText("");
    setTareas((prevTodos) =>
      prevTodos.concat({
        id: prevTodos.length,
        text: text
      })
    );
  }
};

  const handleDelete = (id) => { 
    setTareas(prevTodos => prevTodos.filter(todo => todo.id !== id)); //Elimina la tarea al pulsar el boton 
    
  };

  return (
    <><h1 className="text-center">todos</h1>
    <div className="container col-5 ">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu tarea aquí..." />

      <ul className="bg-white">
        {tarea.length > 0 ?  tarea.map(item => (
          <li className="border-bottom list-group-item d-flex justify-content-between align-items-center container-btnDelete" key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)} className="btnDelete">🗙</button>
          </li>
        )) : "No hay tareas, añade alguna."}
        <div className="count m-">{tarea.length} item left</div>
      </ul>
    </div></>
  );
};

export default Home;




