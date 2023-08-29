import { Button, Form, Modal } from 'react-bootstrap';
import React, { SyntheticEvent, useState } from 'react';
import { WordFilterEditorProps } from './WordFilterEditor.types';

export function WordFilterEditor({ children, wordFilterDTO, onEdit, onSave }: WordFilterEditorProps) {
  const isValidWordFilterDTO = wordFilterDTO.word !== '' && wordFilterDTO.replacement !== ''

  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValidWordFilterDTO) {
      return;
    }
    onSave();
  }

  return (
    <>
      <div style={{ cursor: 'pointer', display: 'inline' }} onClick={onToggle}>
        {children}
      </div>
      {
        isOpen && (
          <Modal show onHide={onToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Editing Word Filter</Modal.Title>
            </Modal.Header>
            <form onSubmit={onSubmit}>
              <Modal.Body>
                <div className="form-group">
                  <label>Word</label>
                  <input type="text" className="form-control" placeholder="word" name="siteName" onChange={e => onEdit({ word: e.target.value ?? '' })} value={wordFilterDTO.word} />
                </div>
                <div className="form-group">
                  <label>Replacement</label>
                  <input type="text" className="form-control" placeholder="word" name="replacement" onChange={e => onEdit({ replacement: e.target.value ?? '' })} value={wordFilterDTO.replacement} />
                </div>
              </Modal.Body>
              <Modal.Footer className="text-right">
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        )
      }
    </>
  )
}
