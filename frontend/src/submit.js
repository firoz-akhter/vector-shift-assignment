// submit.js

export const SubmitButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="submit" onClick={() => console.log("submit")}>
        Submit
      </button>
    </div>
  );
};
