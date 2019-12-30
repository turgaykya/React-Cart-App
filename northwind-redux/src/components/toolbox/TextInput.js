import React from "react"

const TextInput = ({name,label,onChange,placeholder,value,error}) =>{
    let wrapperClass = "form-group"
    if(error&&error.length>0){
        wrapperClass +=" has-error"
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}></label>
            <div className="field">
                <input name={name} type="text" className="form-control" placeholder={placeholder}
                value = {value}
                onChange = {onChange}></input>
            </div>
            {error&&<div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default TextInput;