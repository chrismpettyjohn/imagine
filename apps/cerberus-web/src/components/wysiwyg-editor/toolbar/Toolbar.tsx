import React from "react";
import { RichUtils } from "draft-js";

const Toolbar = ({ editorState, setEditorState }: any) => {
  const tools = [
    {
      label: "bold",
      style: "BOLD",
      icon: <i className="fa fa-bold" />,
      method: "inline",
    },
    {
      label: "italic",
      style: "ITALIC",
      icon: <i className="fa fa-italic" />,
      method: "inline",
    },
    {
      label: "underline",
      style: "UNDERLINE",
      icon: <i className="fa fa-underline" />,
      method: "inline",
    },
    {
      label: "highlight",
      style: "HIGHLIGHT",
      icon: <i className="fa fa-highlighter" />,
      method: "inline",
    },
    {
      label: "strike-through",
      style: "STRIKETHROUGH",
      icon: <i className="fa fa-strikethrough" />,
      method: "inline",
    },
    {
      label: "Superscript",
      style: "SUPERSCRIPT",
      icon: <i className="fa fa-superscript" />,
      method: "inline",
    },
    {
      label: "Subscript",
      style: "SUBSCRIPT",
      icon: <i className="fa fa-subscript" />,
      method: "inline",
    },
    {
      label: "Monospace",
      style: "CODE",
      icon: <i className="fa fa-text-width" />,
      method: "inline",
    },
    {
      label: "Blockquote",
      style: "blockQuote",
      icon: <i className="fa fa-quote-right" />,
      method: "block",
    },
    {
      label: "Unordered-List",
      style: "unordered-list-item",
      method: "block",
      icon: <i className="fa fa-list-ul" />,
    },
    {
      label: "Ordered-List",
      style: "ordered-list-item",
      method: "block",
      icon: <i className="fa fa-list-ol" />,
    },
    {
      label: "Code Block",
      style: "CODEBLOCK",
      icon: <i className="fa fa-code" />,
      method: "inline",
    },
    {
      label: "Uppercase",
      style: "UPPERCASE",
      icon: <i className="fa fa-chevron-up" />,
      method: "inline",
    },
    {
      label: "lowercase",
      style: "LOWERCASE",
      icon: <i className="fa fa-chevron-down-" />,
      method: "inline",
    },
    {
      label: "Left",
      style: "leftAlign",
      icon: <i className="fa fa-align-left" />,
      method: "block",
    },
    {
      label: "Center",
      style: "centerAlign",
      icon: <i className="fa fa-align-center" />,
      method: "block",
    },
    {
      label: "Right",
      style: "rightAlign",
      icon: <i className="fa fa-align-right" />,
      method: "block",
    },
    { label: "H1", style: "header-one", method: "block" },
    { label: "H2", style: "header-two", method: "block" },
    { label: "H3", style: "header-three", method: "block" },
    { label: "H4", style: "header-four", method: "block" },
    { label: "H5", style: "header-five", method: "block" },
    { label: "H6", style: "header-six", method: "block" },
  ];

  const applyStyle = (e: any, style: any, method: any) => {
    e.preventDefault();
    method === "block"
      ? setEditorState(RichUtils.toggleBlockType(editorState, style))
      : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style: any, method: any) => {
    if (method === "block") {
      const selection = editorState.getSelection();
      const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  return (
    <div className="toolbar-grid">
      {tools.map((item, idx) => (
        <button
          style={{
            color: isActive(item.style, item.method)
              ? "rgba(0, 0, 0, 1)"
              : "rgba(0, 0, 0, 0.3)",
          }}
          key={`${item.label}-${idx}`}
          title={item.label}
          onClick={(e) => applyStyle(e, item.style, item.method)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {item.icon || item.label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
