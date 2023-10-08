import { Link } from 'wouter';
import { Card } from '../card/Card';
import { Form } from '../form/Form';
import { toast } from 'react-toastify';
import { Input } from '../input/Input';
import { UserGuard } from '@imagine-cms/web';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ButtonBrand } from '../button/Button.remix';
import { useRadioRequestCreate } from '@imagine-cms/client';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { CreateRadioRequestCardProps } from './CreateRadioRequestCard.types';

export function CreateRadioRequestCard({ onCreation }: CreateRadioRequestCardProps) {
  const [content, setContent] = useState('');
  const createRadioRequest = useRadioRequestCreate();

  const isDisabled = !content;

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value ?? '');
  }

  const onCreateRadioRequest = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (isDisabled) {
        toast.error('Your request cannot be empty');
        return;
      }
      const newRadioRequest = await createRadioRequest.execute({ content });
      toast.success('Your request was submitted!')
      setContent('');
      onCreation(newRadioRequest);
    } catch (e: any) {
      toast.error('Failed to create request')
    }
  }

  return (
    <Card header="Request Song">
      <GuestGuard redirect={false}>
        <p><Link to="/login">Login</Link> to send a request to the DJ</p>
      </GuestGuard>
      <UserGuard redirect={false}>
        <Form disabled={isDisabled} onSubmit={onCreateRadioRequest}>
          <label>Request</label>
          <Input type="text" value={content} onChange={onChangeContent} />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ButtonBrand disabled={isDisabled} type="submit">Save</ButtonBrand>
          </div>
        </Form>
      </UserGuard>
    </Card>
  )
}