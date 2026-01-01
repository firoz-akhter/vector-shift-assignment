export const TransformNode = createNode({
  label: "Transform",
  description: "Transform and manipulate data",
  width: 220,
  minHeight: 140,
  backgroundColor: "#fff9c4",
  fields: [
    {
      name: "operation",
      label: "Operation",
      type: "select",
      defaultValue: "uppercase",
      options: [
        { value: "uppercase", label: "Uppercase" },
        { value: "lowercase", label: "Lowercase" },
        { value: "trim", label: "Trim" },
        { value: "reverse", label: "Reverse" },
      ],
    },
    {
      name: "customRegex",
      label: "Custom Regex",
      type: "text",
      defaultValue: "",
      placeholder: "Optional regex pattern",
    },
  ],
  handles: [
    { type: "target", id: "input" },
    { type: "source", id: "output" },
  ],
});
