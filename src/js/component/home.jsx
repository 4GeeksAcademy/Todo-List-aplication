import React, { useState } from "react";

const Home = () => {
  const [tarea, setTareas] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text.trim() !== '') {  //Añade una linea cada vez que pulsas Enter
      setText('');
      setTareas(prevTodos => [
        {
          id: prevTodos.length,
          text: text
        },
        ...prevTodos
      ]);
      setCount(prevCount => prevCount + 1); // suma en 1 el contenedor por cada linea que se va añadiendo
    }
  };

  const handleDelete = (id) => { 
    setTareas(prevTodos => prevTodos.filter(todo => todo.id !== id)); //Elimina la tarea al pulsar el boton 
    setCount(prevCount => prevCount - 1); // resta en 1 el contenedor por cada linea que se elimina
  };

  return (
    <div className="container flex-column vstack gap-3">
      <h1 className="text-center">todos</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu tarea aquí..."
      />
      
      <ul>
        {tarea.map(item => (
          <div className="border list-group-item d-flex justify-content-between align-items-center container-btnDelete" key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)} className="btnDelete">X</button>
          </div>
        ))}
      </ul>
      <div>
        <h2>{count} item left</h2>
      </div>
    </div>
  );
};

export default Home;



