import { Form } from '../form/Form';
import { toast } from 'react-toastify';
import { Textarea } from '../textarea/Textarea';
import { sessionContext } from '@imagine-cms/web';
import { ButtonSuccess } from '../button/Button.remix';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { RankCreateApplicationFormProps } from './RankCreateApplicationForm.types';
import { useStaffApplicationCreate, useStaffApplicationFetchMany } from '@imagine-cms/client';

export function RankCreateApplicationForm({ rank }: RankCreateApplicationFormProps) {
  const { session } = useContext(sessionContext);
  const [content, setContent] = useState('');
  const createStaffApplication = useStaffApplicationCreate();
  const fetchStaffApplication = useStaffApplicationFetchMany()

  const isLoading = createStaffApplication.loading || fetchStaffApplication.loading;

  const hasAlreadyApplied = (fetchStaffApplication?.data?.length ?? 0) > 0 || isLoading;

  const isDisabled = !content || hasAlreadyApplied;

  const onFetchApplication = async () => {
    if (!session?.id) {
      return;
    }
    const response = await fetchStaffApplication.fetch({ rankIDs: [rank.id], userIDs: [session.id] })
    const applicationContent = response?.[0]?.content;
    if (applicationContent) {
      setContent(applicationContent);
    }
  }

  const onSubmitApplication = async (event: SyntheticEvent) => {
    try {
      event.preventDefault();
      if (isDisabled) {
        return;
      }
      await createStaffApplication.execute({ rankID: rank.id, content });
      toast.success(`Successfully submitted application for ${rank.name}`)
      await onFetchApplication();
    } catch (e: any) {
      toast.error(`Failed to submit application for ${rank.name}`);
      throw e;
    }
  }

  if (!rank.flags.acceptingApplications) {
    return <p>This rank isn't accepting applications at this time</p>
  }

  return (
    <Form disabled={isDisabled} onSubmit={onSubmitApplication}>
      <label>Why would you be a good fit for this role?</label>
      <Textarea disabled={isDisabled} value={content} onChange={setContent} rows={15} />
      {hasAlreadyApplied && <p style={{ color: 'red' }}>You already applied for this role!</p>}
      <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <ButtonSuccess disabled={isDisabled} type="submit">
          <i className={isLoading ? 'fa fa-spinner fa-spin' : 'fa fa-file-contract'} style={{ marginRight: 8 }} /> Submit Application
        </ButtonSuccess>
      </div>
    </Form>
  )

}