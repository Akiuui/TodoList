import React from "react";

function PopUp({ what, showPopup, setShowPopup, filteredList, setFilteredList, setTodo }) {
    return <div className="gray">
        <div id="popup">
            <p>Are you sure you want to {what} this element?</p>
            <svg id="dangersvg" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#a52424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <button className="buttonwidth" onClick={() => setShowPopup(false)}>Cancel</button>

            <button className="buttonwidth" id="popupdelete" onClick={() => {
                setTodo(filteredList);
                setShowPopup(false);
                setFilteredList([]);
            }}>{what}</button>


        </div>
    </div >

}

export default PopUp;