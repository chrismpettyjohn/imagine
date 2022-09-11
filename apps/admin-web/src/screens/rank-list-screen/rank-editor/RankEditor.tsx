import {configContext} from '@imagine-cms/web';
import React, {SyntheticEvent, useContext} from 'react';
import {RankEditorProps} from './RankEditor.types';

export function RankEditor({rankDTO, onEdit, onSave}: RankEditorProps) {
  const {config} = useContext(configContext);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" onChange={e => onEdit({name: e.target.value ?? ''})} value={rankDTO.name} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea rows={2} className="form-control" onChange={e => onEdit({description: e.target.value ?? ''})} value={rankDTO.description} />
      </div>
      <div className="form-group">
        <label>Badge Code</label>
        <div className="row">
          <div className="col-4">
            <img src={`${config!.groupBadgeURL!}/${rankDTO.badgeCode}.png`} />
          </div>
          <div className="col-8">
            <input type="text" className="form-control" onChange={e => onEdit({badgeCode: e.target.value ?? ''})} value={rankDTO.badgeCode} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-primary"type="submit">
          Save Changes
        </button>
      </div>
    </form>
  )
}
