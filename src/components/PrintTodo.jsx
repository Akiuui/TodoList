import React, { useState } from "react";
import PopUp from "./PopUp";

function PrintTodo({ todo, setTodo, showPopup, setShowPopup }) {

  const [deletedList, setDeletedList] = useState([]);

  const PrintList = () => {
    return (
      <>
        {todo.map(e => {
          return (
            <li key={e.id}>
              <div className="relative">
                <input className="todo-txt" type="text" defaultValue={e.value} />

                <div className="absolute right whitebg">


                  <div className="circle">
                    <button className="nobg between">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </button>
                  </div>

                  <div className="circle">
                    <button className="nobg between" onClick={() => {
                      DeleteItem(e);
                      setShowPopup(true);
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                  </div>
                  <div className="circle">
                    <button className="nobg between">
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                    </button>
                  </div>


                </div>
              </div>

            </li>
          )
        })}
      </>
    )
  }
  const DeleteItem = (object) => {
    const a = todo.filter(e => e.id != object.id)//Filters into a all elements that dont match the target id 
    setDeletedList(a);
  }

  return (
    <>
      <div className="scroll">
        <PrintList />
      </div>
      {showPopup ? <PopUp what="Delete" showPopup={showPopup} setShowPopup={setShowPopup} setFilteredList={setDeletedList} filteredList={deletedList} setTodo={setTodo} /> : null}
    </>
  )
}
export default PrintTodo;
