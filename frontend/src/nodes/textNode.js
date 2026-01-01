// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { createNode } from "./AbstractBaseNode";

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//     console.log(currText);
//   };

//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input type="text" value={currText} onChange={handleTextChange} />
//         </label>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-output`} />
//     </div>
//   );
// };

export const TextNode = createNode({
  label: "Text",
  width: 200,
  minHeight: 100,
  backgroundColor: "#e8f5e9",
  fields: [
    {
      name: "text",
      label: "Text",
      type: "text",
      defaultValue: "{{input}}",
      placeholder: "Enter text with variables",
    },
  ],
  handles: [{ type: "source", id: "output" }],
});
