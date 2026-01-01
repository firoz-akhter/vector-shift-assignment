// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { createNode } from "./AbstractBaseNode";

// export const OutputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
//   const [outputType, setOutputType] = useState(data.outputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setOutputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-value`}
//       />
//       <div>
//         <span>Output</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={currName}
//             onChange={handleNameChange}
//           />
//         </label>
//         <label>
//           Type:
//           <select value={outputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">Image</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// }

export const OutputNode = createNode({
  label: "Output",
  width: 200,
  minHeight: 100,
  backgroundColor: "#f3e5f5",
  fields: [
    {
      name: "outputName",
      label: "Name",
      type: "text",
      defaultValue: "output_1",
      placeholder: "Enter output name",
    },
    {
      name: "outputType",
      label: "Type",
      type: "select",
      defaultValue: "Text",
      options: [
        { value: "Text", label: "Text" },
        { value: "Image", label: "Image" },
      ],
    },
  ],
  handles: [{ type: "target", id: "value" }],
});
