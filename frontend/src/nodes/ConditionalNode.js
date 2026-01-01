export const ConditionalNode = createNode({
  label: "Conditional",
  description: "Branch based on conditions",
  width: 200,
  minHeight: 120,
  backgroundColor: "#ffccbc",
  fields: [
    {
      name: "condition",
      label: "Condition",
      type: "select",
      defaultValue: "contains",
      options: [
        { value: "contains", label: "Contains" },
        { value: "equals", label: "Equals" },
        { value: "greater", label: "Greater Than" },
        { value: "less", label: "Less Than" },
      ],
    },
    {
      name: "value",
      label: "Compare Value",
      type: "text",
      defaultValue: "",
      placeholder: "Value to compare",
    },
  ],
  handles: [
    { type: "target", id: "input" },
    { type: "source", id: "true" },
    { type: "source", id: "false" },
  ],
});
