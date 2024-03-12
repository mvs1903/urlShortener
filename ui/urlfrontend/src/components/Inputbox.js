import React from "react";

export default function Inputbox(props) {
 const {placeholder} = props;
  return (
      <div className="col-4 input-group " style={{"width":"700px"}}>
        <input
          type="text"
          className="form-control" 
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="inputGroup-sizing-default"
        />
       </div>
  );
}
