// llmNode.js

import { Handle, Position } from "reactflow";
import { createNode } from "./AbstractBaseNode";

// export const LLMNode = ({ id, data }) => {
//   // return <>this is LLM Node</>;
//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{ top: `${100 / 3}%` }}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{ top: `${200 / 3}%` }}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-response`} />
//     </div>
//   );
// };

export const LLMNode = createNode({
  label: "LLM",
  description: "This is a LLM.",
  width: 200,
  minHeight: 100,
  backgroundColor: "#fff3e0",
  handles: [
    { type: "target", id: "system", position: 33 },
    { type: "target", id: "prompt", position: 66 },
    { type: "source", id: "response" },
  ],
});
