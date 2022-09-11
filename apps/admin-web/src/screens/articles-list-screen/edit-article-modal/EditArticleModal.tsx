import {toast} from 'react-toastify';
import {Modal} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import { useArticleUpdate} from '@imagine-cms/web';
import {ArticleCreateInputDTO} from '@imagine-cms/types';
import {ArticleEditor} from '../article-editor/ArticleEditor';
import {EditArticleModalProps} from './EditArticleModal.types';

export function EditArticleModal({article, onUpdate}: EditArticleModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateArticleDTO, setUpdateArticleDTO] = useState<ArticleCreateInputDTO>({
    name: article.name!,
    description: article.description!,
    content: article.content!,
    imageURL:  article.imageURL!,
  });
  const {runMutation, data, error, loading} = useArticleUpdate(article.id!, updateArticleDTO);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error('There was a problem updating your article');
      }
      if (data) {
        toast.success('Your article was updated successfully');
        onUpdate({...article, ...updateArticleDTO});
      }
    }
  }, [data, error, loading]);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onEdit = (changes: Partial<ArticleCreateInputDTO>) => {
    setUpdateArticleDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  return (
    <>
      <button className="btn btn-primary" onClick={onToggle}>
        <i className="fas fa-pencil mr-2" /> Edit
      </button>
      {
        isOpen && (
          <Modal show onHide={onToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Editing Article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ArticleEditor articleDTO={updateArticleDTO} onEdit={onEdit} onSave={runMutation} />
            </Modal.Body>
          </Modal>
        )
      }
    </>
  )
}
