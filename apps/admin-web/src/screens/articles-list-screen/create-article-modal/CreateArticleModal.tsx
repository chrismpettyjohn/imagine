import {toast} from 'react-toastify';
import {Modal} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {useArticleCreate} from '@imagine-cms/web';
import {ArticleCreateInputDTO} from '@imagine-cms/types';
import {ArticleEditor} from '../article-editor/ArticleEditor';
import {CreateArticleModalProps} from './CreateArticleModal.types';

export function CreateArticleModal({onCreate}: CreateArticleModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [createArticleDTO, setCreateArticleDTO] = useState<ArticleCreateInputDTO>({
    name: '',
    description: '',
    content: '',
    imageURL:  '',
  });
  const {runMutation, data, error, loading} = useArticleCreate(createArticleDTO);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error('There was a problem creating your article');
      }
      if (data) {
        toast.error('Your article was created successfully');
        onCreate(data.article);
      }
    }
  }, [data, error, loading]);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onEdit = (changes: Partial<ArticleCreateInputDTO>) => {
    setCreateArticleDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  return (
    <>
      <button className="btn btn-success" onClick={onToggle}>
        <i className="fas fa-plus mr-2" />
        Create
      </button>
      {
        isOpen && (
          <Modal show onHide={onToggle}>
            <Modal.Header closeButton>
              <Modal.Title>New Article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ArticleEditor articleDTO={createArticleDTO} onEdit={onEdit} onSave={runMutation} />
            </Modal.Body>
          </Modal>
        )
      }
    </>
  )
}
