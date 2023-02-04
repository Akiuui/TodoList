import React from "react";
import { useState } from "react";
import PrintTodo from "./PrintTodo";


function Form({ showPopup, setShowPopup }) {

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);


    function FormSubmit(event) {
        event.preventDefault();

        if (input == "")
            return 0;

        setTodo([...todo, { "id": crypto.randomUUID(), "value": input, "completed": false, "editable": true, }])
        setInput("");

    }

    return (
        <>
            <h1 className="center">Todo List</h1>

            <div className='main'>
                <div id="formcss">
                    <form onSubmit={FormSubmit}>
                        <input className="form-txt" type="text" value={input} placeholder="Enter a todo..." onChange={event => setInput(event.target.value)} />
                        <button className="submit-btn">Add a todo</button>
                    </form>
                </div>
                <div id="todocss">
                    <PrintTodo todo={todo} setTodo={setTodo} showPopup={showPopup} setShowPopup={setShowPopup} />
                </div>
            </div>

        </>
    )
}

export default Form;
