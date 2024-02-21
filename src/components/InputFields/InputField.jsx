import { useState } from "react";
import SelectField from "./SelectField";
// import KeyValue from './KeyValue';

const InputField = () => {
  //const [label,setLabel] = useState("");


  const handleLabel =(e)=>{
    // setLabel(e.target.value);
     console.log(e.target.value);
   }
 
   const hangleLabelName = (e) =>{
     console.log(e.target.value);
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="field">
          <label>Create Label</label>
          <input type="text" name="label" id="label" onChange={handleLabel} required/>
        </div>
        <div className="field">
          <label>Field Value</label>
          <input type="text" name="lname" id="lname" onChange={hangleLabelName} required/>
        </div>


        <SelectField />


        <button className="initial-btn">Submit</button>
      </form>
    </>
  );
};

export default InputField;

// <div className="value-key">
//   <input type="text" placeholder="Key" />
//   <input type="text" placeholder="Value" />
//   <button className="plus radius" onClick={handleSubmit}></button>
// </div>
