import { toast } from 'react-toastify';
import { Card } from '../../blocks/card/Card';
import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { Textarea } from '../../blocks/textarea/Textarea';
import { ArticleCreateInputDTO } from '@imagine-cms/types';
import { WYSIWYGEditor } from '../wysiwyg-editor/WYSIWYGEditor';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import { ArticleEditorCardProps } from './ArticleEditorCard.types';

export function ArticleEditorCard({ defaultArticle, onSave }: ArticleEditorCardProps) {
  const [articleDTO, setArticleDTO] = useState<ArticleCreateInputDTO>({
    name: defaultArticle?.name ?? '',
    description: defaultArticle?.description ?? '',
    imageURL: defaultArticle?.imageURL ?? '',
    content: defaultArticle?.content ?? '',
  });

  const onChanges = (changes: Partial<ArticleCreateInputDTO>) => {
    setArticleDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const isDisabled = !articleDTO.name || !articleDTO.description || !articleDTO.imageURL || !articleDTO.content;

  const onSaveChanges = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (!isDisabled) {
        toast.error('Please fill out all the fields before saving');
        return;
      }
      await onSave(articleDTO);
      toast.success(`Successfully updated article ${articleDTO.name}`);
    } catch {
      toast.error(`Failed to save changes on article ${articleDTO.name}`)
    }
  }

  return (
    <>
      <Card header="Article Content">
        <Form onSubmit={onSaveChanges}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginBottom: 32, paddingBottom: 16, borderBottom: '1px solid black' }}>
            <label>Name</label>
            <Input type="text" value={articleDTO.name} onChange={e => onChanges({ name: e.currentTarget.value ?? '' })} />
            <label>Description</label>
            <Textarea value={articleDTO.description} onChange={description => onChanges({ description })} />
          </div>
          <label>Content</label>
          <WYSIWYGEditor defaultContent={articleDTO.content} onChanges={content => onChanges({ content: content as any })} />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', marginTop: 32, borderTop: '1px solid black', paddingTop: 16 }}>
            <ButtonPrimary type="submit">Save</ButtonPrimary>
          </div>
        </Form>
      </Card>
    </>
  )
}