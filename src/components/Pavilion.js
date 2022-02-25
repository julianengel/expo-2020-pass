import React from "react";

export default function Pavilion(props) {
    return (

        <li className="todo stack-small">
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed}   onChange={() => props.togglePavilionSeen(props.id)} />
            <label className="todo-label" htmlFor="todo-0">
                {props.name}
            </label>
          </div>
        </li>
    );
}