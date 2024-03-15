import React from "react";

export default function Inputbox(props) {
 const {placeholder,onChange,value} = props;
 
  return (
      <div className="col-4 input-group " style={{"width":"700px"}}>
        <input
          type="text"
          className="form-control" 
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          aria-label="Username"
          aria-describedby="inputGroup-sizing-default"
        />
       </div>
  );
}
