import React, { useState } from "react";
import "./App.css";
import WishInput from "./WishInput";
import WishList from "./WishList";

//Creamos el array con las tareas
const initialWishes = [
  { text: "1. Creación app lista tareas React", done: true },
  { text: "2. Desarrollo de la idea para la app", done: true },
  { text: "3. Calendarización de las tareas", done: true },
  { text: "4. Prototipo de la App", done: true },
  { text: "5. Elección Herramientas a Utilizar", done: true },
  { text: "6. Entidad-Relación BBDD", done: false },
  { text: "7. Creación de la BBDD", done: false },
  { text: "8. Elección plantilla web", done: false },
  { text: "9. Diseño de la App Web", done: false },
  { text: "10. Introducción de Info en la App Web", done: false },
  { text: "11. Creación Login/Registro", done: false },
  { text: "12. Creación Panel de Control", done: false },
  { text: "13. Creación CRUD Panel de Control", done: false },
  { text: "14. Creación PortFolio Django", done: false },
  { text: "15. Creación Replicador Python", done: false },
  { text: "16. Creación Documentación", done: false },
  { text: "17. Entrega Proyecto", done: false },
  { text: "18. Creación de la Presentación", done: false }
];
//Creamos una constante en la que añadimos los componentes
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <WishInput onNewWish={(wish) => setWishes([...wishes, wish])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        className="wish-clear"
        type="button"
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
      >
        Archivar Tarea
      </button>
    </div>
  );
};
export default App;
