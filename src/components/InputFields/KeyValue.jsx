import { useState } from "react";

const KeyValue = () => {
  const [inputFields, setInputFields] = useState([{ id: 0 }]);

  const handleAddFields = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { id: inputFields.length }]);
  };

  return (
    <>
      <div className="value-key">
        <div className="all-value-key">
          <button className="plus radius" onClick={handleAddFields}></button>
          {inputFields.map((inputField) => (
            <div key={inputField.id} className="InnerValKey">
              <input type="text" placeholder="Key" />
              <input type="text" placeholder="Value" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyValue;
