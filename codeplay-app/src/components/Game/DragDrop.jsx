import React, { useState, useEffect } from "react";
import "./DragDrop.css";

function DragDrop() {

    const [state, setState] = useState({options:[{
        name:"number",
        visible:true
    }, {
        name:"string",
        visible:true
    }, {
        name:"boolean",
        visible:true
    }, {
        name:"void",
        visible:true
    }]});

    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDragStart = (ev, name) => {
        ev.dataTransfer.setData("name", name);
    }

    const onDrop = (ev) => {
        let name = ev.dataTransfer.getData("name");
        document.getElementById("gap").innerText = name;
        let newOptions = state.options;

        console.log(newOptions);
        for (var i in newOptions) {
            if (newOptions[i].name == name) {
                newOptions[i].visible = false;
            } else {
                newOptions[i].visible = true;
            }
        }

        setState({options: newOptions});
    }

    let visibleOptions = [];


    return (
        <div className="dragdrop">
            <div className="passage">
                let fall: <span id="gap" className="gap" onDragOver={(e)=>onDragOver(e)} onDrop={(e) => onDrop(e)}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> = false;
            </div>
            <div className="options">
                {console.log(state.options)}
                {state.options.forEach((o) => {
                    console.log(o.visible);
                    visibleOptions.push(o.visible ? <div className="option">
                    <p draggable="true" onDragStart={(e) => onDragStart(e,o.name)}>{o.name}</p>
                </div> : <div className="option"></div>);
                })}
                {visibleOptions}
                {/*<div className="option">
                    <p draggable="true" onDragStart={(e) => onDragStart(e,"number")}>number</p>
                </div>
                <div className="option">
                    <p draggable="true" onDragStart={(e) => onDragStart(e,"string")}>string</p>
                </div>
                <div className="option">
                    <p draggable="true" onDragStart={(e) => onDragStart(e,"boolean")}>boolean</p>
                </div>
                <div className="option">
                    <p draggable="true" onDragStart={(e) => onDragStart(e,"void")}>void</p>
            </div> */}
            </div>
        </div>
    );
}

export default DragDrop;