export const DelayNode = createNode({
  label: "Delay",
  description: "Add time delay to execution",
  width: 200,
  minHeight: 100,
  backgroundColor: "#d1c4e9",
  fields: [
    {
      name: "duration",
      label: "Duration (ms)",
      type: "number",
      defaultValue: "1000",
      placeholder: "Delay in milliseconds",
    },
    {
      name: "enabled",
      label: "Enabled",
      type: "checkbox",
      defaultValue: true,
    },
  ],
  handles: [
    { type: "target", id: "input" },
    { type: "source", id: "output" },
  ],
});
