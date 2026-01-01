import { createNode } from "./AbstractBaseNode";

export const PromptTemplateNode = createNode({
  label: "Prompt Template",
  description: "Build complex prompts",
  width: 240,
  minHeight: 180,
  backgroundColor: "#ffecb3",
  headerColor: "#f57c00",
  fields: [
    {
      name: "template",
      label: "Template",
      type: "textarea",
      defaultValue: "You are a {{role}}. {{instruction}}",
      placeholder: "Use {{variable}} for placeholders",
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      defaultValue: "assistant",
      options: [
        { value: "assistant", label: "Assistant" },
        { value: "expert", label: "Expert" },
        { value: "teacher", label: "Teacher" },
        { value: "analyst", label: "Analyst" },
      ],
    },
  ],
  handles: [
    { type: "target", id: "variables" },
    { type: "source", id: "prompt" },
  ],
});
