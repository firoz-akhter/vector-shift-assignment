// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { createNode } from "./AbstractBaseNode";

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(
//     data?.inputName || id.replace("customInput-", "input_")
//   );
//   const [inputType, setInputType] = useState(data.inputType || "Text");

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <div>
//         <span>Input</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input type="text" value={currName} onChange={handleNameChange} />
//         </label>
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-value`} />
//     </div>
//   );
// };

export const InputNode = createNode({
  label: "Input",
  width: 200,
  minHeight: 100,
  backgroundColor: "#e3f2fd",
  fields: [
    {
      name: "inputName",
      label: "Name",
      type: "text",
      defaultValue: "input_1",
      placeholder: "Enter input name",
    },
    {
      name: "inputType",
      label: "Type",
      type: "select",
      defaultValue: "Text",
      options: [
        { value: "Text", label: "Text" },
        { value: "File", label: "File" },
      ],
    },
  ],
  handles: [{ type: "source", id: "value" }],
});
