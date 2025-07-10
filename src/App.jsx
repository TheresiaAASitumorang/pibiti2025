import React, { useState, useEffect, useContext,  } from 'react';
import './style.css'; //ini import css
import Card from './components/Card'; //inport sebuah komponen card
import { TodoContext } from './TodoContext';

function TodoItem ({todo}){
  const {handleDeleteTodo} = useContext(TodoContext);

  return(
     <li key={todo.id} className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">Hapus
      </button>
    </li>
  )
}

function App() {
  //State ini untuk menyimpan daftar todos. defaultnya adalah array kosong.
  const [todos, setTodos] = useState(()=> {
    const simpanTodos = localStorage.getItem("todos");
    return simpanTodos ? JSON.parse(simpanTodos): []
});

  //State ini untuk menyimpan input dalam bentuk teks
  const [input, setInput] = useState("");
  
  //EFEK 1: Menyimpan todos ke localStorage setiap kali state 'todos' berubah
  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //efek ini hanya berjalan jika 'todos' berubah 


  const handleAddTodo = (e) => {
    // Mencegah form dari refresh halaman
    e.preventDefault(); 
    
    // Jangan tambahkan todo jika input kosong
    if (input.trim() === '') return; 

    // Menambahkan todo baru ke dalam daftar todos
    // Kita menggunakan spread operator (...) untuk menyalin todos lama
    // dan menambahkan todo baru di akhir.
    setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }]);
    
    // Mengosongkan kembali input field setelah submit
    setInput(''); 
  };
    
    const handleDeleteTodo = (id) => {
    // Filter todos, kembalikan semua todo kecuali yang id-nya cocok
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Card>
        <h1>Daftar Isi To Do List</h1>
        <h2>Aplikasi To Do List Sederhana</h2>

        <form className="todo-form" onSubmit={handleAddTodo}>
          <input type="text" 
            className="todo-input" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder='Tambahkan Kegiatan Baru'/>
          <button type="submit" className='todo-button'>Tambah</button>
        </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">
              Hapus
            </button>
          </li>
        ))}
      </ul>

      </Card>
    </>
  );
}

export default App;
