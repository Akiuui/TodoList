import React, { useEffect } from "react";

function EventListeners({ textboxRefs, deleteEditBtnRefs }) {


    const deleteEditBtn = deleteEditBtnRefs.current;

    useEffect(() => {
        const textbox = textboxRefs.current;
        textbox.forEach(element => {
            let index = textbox.findIndex(item => item === element);
            element.addEventListener("mouseenter", () => ChangeOpacityTo1(index));
            element.addEventListener("mouseout", () => ChangeOpacityTo0(index));
        },
            [textboxRefs])
    }
    );

    function ChangeOpacityTo1(index) {
        deleteEditBtn[index].style.opacity = 1;
        // deleteEditBtn.style.pointerEvents = "default";
    }
    function ChangeOpacityTo0(index) {
        deleteEditBtn[index].style.opacity = 0;
        // deleteEditBtn.style.pointerEvents = "none";
    }

    return <>
    </>;
}

export default EventListeners;
