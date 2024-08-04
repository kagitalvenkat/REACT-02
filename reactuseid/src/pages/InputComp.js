import React,{useId} from "react";

export const InputComp = (props)=>{

    return(
        <div>
            <div>
                <label htmlFor="useId">{props.label}:</label>
            </div>
            <div className="input">
                <input id="useId" type={props.type} name={props.name} />
            </div>
        </div>
    )
}
