export const AggregatorNode = createNode({
  label: "Aggregator",
  description: "Combine multiple inputs",
  width: 200,
  minHeight: 120,
  backgroundColor: "#b2dfdb",
  fields: [
    {
      name: "method",
      label: "Method",
      type: "select",
      defaultValue: "concat",
      options: [
        { value: "concat", label: "Concatenate" },
        { value: "merge", label: "Merge (JSON)" },
        { value: "sum", label: "Sum (Numbers)" },
      ],
    },
    {
      name: "separator",
      label: "Separator",
      type: "text",
      defaultValue: ", ",
      placeholder: "For concat method",
    },
  ],
  handles: [
    { type: "target", id: "input1" },
    { type: "target", id: "input2" },
    { type: "target", id: "input3" },
    { type: "source", id: "output" },
  ],
});
