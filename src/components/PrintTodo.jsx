import React from "react";

function PrintTodo({ todo }) {

  const PrintList = () => {
    return (
      <>
        {todo.map(e => {
          return (
            <li key={e.id}>
              <div className="relative">
                <input className="todo-txt" type="text" value={e.value} />

                <div className="absolute right whitebg">
                  <button className="nobg between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </button>
                  <button className="nobg between" onClick={() => Delete(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  </button>
                  <button className="nobg between">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                  </button>
                </div>
              </div>

            </li>
          )
        })}
      </>
    )
  }
  // function Delete(object) {
  //   const a=
  // }

  return (
    <>
      <PrintList />
    </>
  )
}
export default PrintTodo;
