// AbstractNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";

export const AbstractBaseNode = ({ id, data, config }) => {
  // Initialize state for all fields defined in config
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    config.fields?.forEach((field) => {
      initialState[field.name] = data?.[field.name] || field.defaultValue || "";
    });
    return initialState;
  });

  const handleFieldChange = (fieldName, value) => {
    setFieldValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  const renderField = (field) => {
    const value = fieldValues[field.name];

    switch (field.type) {
      case "text":
      case "number":
        return (
          <input
            type={field.type}
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            style={{ width: "100%", marginBottom: 4 }}
          />
        );
      case "textarea":
        return (
          <textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            style={{ width: "100%", minHeight: 60, marginBottom: 4 }}
          />
        );
      case "select":
        return (
          <select
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={{ width: "100%", marginBottom: 4 }}
          >
            {field.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => handleFieldChange(field.name, e.target.checked)}
          />
        );
      default:
        return null;
    }
  };

  const renderHandle = (handle, index) => {
    const position = handle.type === "target" ? Position.Left : Position.Right;
    const style = {};

    // Calculate vertical position if multiple handles on same side
    if (handle.position !== undefined) {
      style.top = `${handle.position}%`;
    } else if (
      config.handles?.filter((h) => h.type === handle.type).length > 1
    ) {
      const sameTypeHandles = config.handles.filter(
        (h) => h.type === handle.type
      );
      const handleIndex = sameTypeHandles.indexOf(handle);
      style.top = `${
        ((handleIndex + 1) * 100) / (sameTypeHandles.length + 1)
      }%`;
    }

    return (
      <Handle
        key={handle.id}
        type={handle.type}
        position={position}
        id={`${id}-${handle.id}`}
        style={style}
      />
    );
  };

  return (
    <div
      style={{
        width: config.width || 200,
        height: config.height || "auto",
        minHeight: config.minHeight || 80,
        border: "1px solid black",
        borderRadius: 4,
        padding: 8,
        background: config.backgroundColor || "white",
        ...config.style,
      }}
    >
      {/* Render handles */}
      {config.handles?.map((handle, idx) => renderHandle(handle, idx))}

      {/* Render header */}
      <div
        style={{
          fontWeight: "bold",
          marginBottom: 8,
          color: config.headerColor || "black",
        }}
      >
        {config.label}
      </div>

      {/* Render description if provided */}
      {config.description && (
        <div
          style={{
            fontSize: 12,
            color: "#666",
            marginBottom: 8,
          }}
        >
          {config.description}
        </div>
      )}

      {/* Render fields */}
      {config.fields?.map((field) => (
        <div key={field.name} style={{ marginBottom: 4 }}>
          {field.label && (
            <label style={{ fontSize: 12, display: "block", marginBottom: 2 }}>
              {field.label}:
            </label>
          )}
          {renderField(field)}
        </div>
      ))}
    </div>
  );
};

// Factory function to create node components from config
export const createNode = (config) => {
  return ({ id, data }) => (
    <AbstractBaseNode id={id} data={data} config={config} />
  );
};
