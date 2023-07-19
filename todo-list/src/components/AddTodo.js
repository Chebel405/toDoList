import { useState } from "react";

function AddTodo({ addTodo}) {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center mb-20">
            <input type="text" placeholder="Ajouter une todo" className="mr-15flex-fill"/>
            <button className="btn btn-primary">Ajouter</button>
        </div>
    );
}
export default AddTodo;