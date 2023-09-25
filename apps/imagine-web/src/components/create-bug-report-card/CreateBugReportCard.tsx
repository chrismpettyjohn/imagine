import { Link } from 'wouter';
import { Card } from '../card/Card';
import { Form } from '../form/Form';
import { Input } from '../input/Input';
import { toast } from 'react-toastify';
import { UserGuard } from '@imagine-cms/web';
import { Textarea } from '../textarea/Textarea';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ButtonPrimary } from '../button/Button.remix';
import React, { SyntheticEvent, useState } from 'react';
import { useBugReportCreate } from '@imagine-cms/client';
import { CreateBugReportCardProps } from './CreateBugReportCard.types';

export function CreateBugReportCard({ onCreate }: CreateBugReportCardProps) {
  const [url, setURL] = useState('');
  const [content, setContent] = useState('');
  const createBugReport = useBugReportCreate();

  const isDisabled = !url || !content;

  const onCreateBugReport = async (event?: SyntheticEvent) => {
    event?.preventDefault();
    try {
      if (isDisabled) {
        return;
      }
      const newBugReport = await createBugReport.execute({ content, url });
      toast.success(`Successfully created bug report ${newBugReport.id}`)
      setURL('');
      setContent('');
      onCreate(newBugReport);
    } catch (e: any) {
      console.log(e);
      toast.error('Failed to create bug report due to an error');
    }
  }

  return (
    <Card header="New Bug Report">
      <GuestGuard redirect={false}>
        <p><Link to="/login">Login</Link> to submit bug reports</p>
      </GuestGuard>
      <UserGuard redirect={false}>
        <Form onSubmit={onCreateBugReport} disabled={isDisabled}>
          <label>Paste the URL of where you encounter the bug</label>
          <Input type="text" value={url} onChange={e => setURL(e.currentTarget.value ?? '')} />
          <label>Describe the issue</label>
          <Textarea rows={10} value={content} onChange={setContent} />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ButtonPrimary type="submit" disabled={isDisabled}>Save</ButtonPrimary>
          </div>
        </Form>
      </UserGuard>
    </Card>
  )
}