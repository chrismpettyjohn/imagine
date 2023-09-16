import Toolbar from './toolbar/Toolbar';
import React, { useRef, useState } from 'react';
import { WYSIWYGEditorProps } from './WYSIWYGEditor.types';
import { wysiwygStyleFn, wysiwygStyleMap } from './WYSIWYGEditor.const';
import { Editor, EditorCommand, EditorState, RichUtils, convertToRaw, convertFromHTML, ContentState } from 'draft-js';

export function WYSIWYGEditor({ defaultContent, onChanges }: WYSIWYGEditorProps) {
  const editor = useRef<any>(null);
  const [editorState, setEditorState] = useState(() => {
    const blocks = convertFromHTML(defaultContent);
    const state = ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);
    return EditorState.createWithContent(state);
  });

  const focusEditor = () => {
    editor.current?.focus();
  };

  const handleKeyCommand = (command: EditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };

  return (
    <div className="editor-wrapper" onClick={focusEditor}>
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <div className="editor-container">
        <Editor
          ref={editor}
          placeholder="Write Here"
          handleKeyCommand={handleKeyCommand as any}
          editorState={editorState}
          customStyleMap={wysiwygStyleMap}
          blockStyleFn={wysiwygStyleFn}
          onChange={(editorState) => {
            const contentState = editorState.getCurrentContent();
            onChanges(convertToRaw(contentState));
            setEditorState(editorState);
          }}
        />
      </div>
    </div>
  )
}