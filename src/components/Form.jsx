import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PrintTodo from "./PrintTodo";


function Form({ showPopup, setShowPopup }) {

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [isSaved, setIsSaved] = useState(false);




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
            {/* <button className="submit-btn">Add a todo</button> */}
            <Link to="/completed">
                <button>Go to new route</button>
            </Link>

            <div className='main'>
                <div id="formcss">
                    <form onSubmit={FormSubmit}>
                        <input className="form-txt" type="text" value={input} placeholder="Enter a todo..." onChange={event => setInput(event.target.value)} />
                    </form>
                </div>

                <PrintTodo todo={todo} setTodo={setTodo} showPopup={showPopup} setShowPopup={setShowPopup} isSaved={isSaved} setIsSaved={setIsSaved} />

            </div>

            {isSaved ? <div className="popups show">Saved</div> : <div className="popups">Saved</div>}


        </>
    )
}

export default Form;
