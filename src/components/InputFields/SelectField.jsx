import { useState } from "react";
import KeyValue from './KeyValue';

const SelectField = () => {

    const [value, setValue] = useState("Text");

    const options = [
      { label: "Text", value: "Text" },
      { label: "Number", value: "Number" },
      { label: "Password", value: "Password" },
      { label: "Dropdown", value: "Dropdown" },
      { label: "Radio", value: "Radio" },
      { label: "Checkbox", value: "Checkbox" },
    ];
  
    function handleChange(e) {
      setValue(e.target.value);
      // console.log(values);
    }
  

    return (
        <>
         <div className="field">
          <label htmlFor="types">Choose field type</label>
          <select name="types" id="types" onChange={handleChange}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}

          </select>
        </div>   
           {
            value=="Dropdown" ? <KeyValue />: value=="Radio" ? <KeyValue /> :  value=="Checkbox" ? <KeyValue />: null
           }
        </>
    );
};

export default SelectField;