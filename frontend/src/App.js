import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { InputNode } from "./nodes/inputNode";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      {/* testing branch switch */}
    </div>
  );
}

export default App;
