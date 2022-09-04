import React, {SyntheticEvent} from 'react';
import {ArticleEditorProps} from './ArticleEditor.types';

export function ArticleEditor({articleDTO, onEdit, onSave}: ArticleEditorProps) {

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" onChange={e => onEdit({name: e.target.value ?? ''})} value={articleDTO.name} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea rows={2} className="form-control" onChange={e => onEdit({description: e.target.value ?? ''})} value={articleDTO.description} />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea rows={10} className="form-control" onChange={e => onEdit({content: e.target.value ?? ''})} value={articleDTO.content} />
      </div>
      <div className="form-group">
        <button className="btn btn-primary"type="submit">
          Save Changes
        </button>
      </div>
    </form>
  )
}
