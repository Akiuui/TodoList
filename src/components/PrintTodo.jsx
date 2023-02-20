import React, { useState, useRef } from "react";
import PopUp from "./PopUp";
import EventListeners from "./EventListeners";

function PrintTodo({ todo, setTodo, showPopup, setShowPopup, isSaved, setIsSaved }) {

  const [input2, setInput2] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [isDecorated, setIsDecorated] = useState(false);

  const textboxRefs = useRef([]);
  // const deleteEditBtnRefs = useRef([]);


  const PrintList = () => {
    return (
      <>
        {todo.map((e, index) => {
          return (
            <li key={index}>
              <div className="relative">

                {/* Complete */}
                <div className="absolute left whitebg">
                  <div className="circle">
                    <button className="nobg between" onClick={() => CompleteItem(e, index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </button>
                  </div>
                </div>

                <form ref={el => (textboxRefs.current[index] = el)} onSubmit={() => EditItem(e, index)}>

                  <input className={e.completed ? "todo-txt completing" : "todo-txt"} type="text" defaultValue={e.value} readOnly={e.editable}
                    /*style={{ textDecoration: e.completed ? "line-through" : "none" }}*/ />

                  < div className="absolute right whitebg transition" /*ref={el => (deleteEditBtnRefs.current[index] = el)}*/>

                    {/* Delete */}
                    <div className="circle">
                      <button type="button" className="nobg between" onClick={() => {
                        DeleteItem(e);
                        setShowPopup(true);
                      }}>
                        <svg className="svgdelete" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      </button>
                    </div>

                    {/* Edit */}
                    <div className="circle">
                      <button type="submit" className="nobg between" >
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                      </button>
                    </div>

                  </div>
                </form>

              </div>

            </li>
          )
        })}
      </>
    )
  }
  const DeleteItem = (object, index) => {
    const a = todo.filter(e => e.id != object.id)//Filters into a all elements that dont match the target id
    setFilteredList(a);
  }

  const EditItem = (object, index) => {
    const b = !object.editable
    const f = [...todo]

    const indexx = f.findIndex(item => item.id === object.id);

    f.splice(indexx, 1, { "id": object.id, "value": object.value, "completed": object.completed, "editable": b })
    setTodo(f);
    setTimeout(() => textboxRefs.current[index][0].focus(), 100)
    //setTimeout(() => textboxRefs.current[index][0].style.textDecoration = 'underline', 100)

    if (b == true) {
      f.splice(indexx, 1, { "id": object.id, "value": textboxRefs.current[index][0].value, "completed": object.completed, "editable": b })
      setTodo(f);
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 2000)


    }
  }
  const CompleteItem = (object, index) => {
    const b = todo.filter(e => e.id != object.id)//Filters into a all elements that dont match the target id    
    setCompletedList([...completedList, { "id": object.id, "value": object.value, "completed": true, "editable": true }]);

    const f = [...todo]

    const indexx = f.findIndex(item => item.id === object.id);

    f.splice(indexx, 1, { "id": object.id, "value": object.value, "completed": true, "editable": b })
    setTodo(f);

    setTimeout(() => setTodo(b), 300)
  }

  const Saved = () => {
    return <>





    </>


  }

  return (
    <>
      <div className="scroll">
        <PrintList />
      </div>
      {showPopup ? <PopUp what="Delete" showPopup={showPopup} setShowPopup={setShowPopup} setFilteredList={setFilteredList} filteredList={filteredList} setTodo={setTodo} /> : null}
      {/* <EventListeners textboxRefs={textboxRefs} deleteEditBtnRefs={deleteEditBtnRefs} /> */}
    </>
  )
}
export default PrintTodo;
