import { toast } from 'react-toastify';
import { useLocation, useRoute } from 'wouter';
import { Card } from '../../components/card/Card';
import { Form } from '../../components/form/Form';
import { Badge } from '../../components/badge/Badge';
import { Textarea } from '../../components/textarea/Textarea';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { ButtonPrimary } from '../../components/button/Button.remix';
import { useRankFetchOne, useStaffApplicationCreate } from '@imagine-cms/client';


export function CommunityStaffApplicationScreen() {
  const [content, setContent] = useState('');
  const [, setLocation] = useLocation();
  const [, params] = useRoute<{ rankID: string }>('/community/staff/:rankID/apply');
  const rankID = Number(params!.rankID);
  const fetchRank = useRankFetchOne();
  const createStaffApplication = useStaffApplicationCreate();

  const isDisabled = !content;

  useEffect(() => {
    fetchRank.fetch({ id: rankID });
  }, [rankID]);

  const onApplyForStaff = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (isDisabled) {
        toast.error(`You can't submit an empty application`);
        return;
      }
      await createStaffApplication.execute({ rankID, content });
      toast.success(`Your application has been submitted for ${fetchRank.data?.name ?? rankID}`)
      setLocation('/community/staff');
    } catch (e: any) {
      toast.error('Failed to submit application');
    }
  }

  return (
    <>
      <h1>
        Apply for Staff -
        {fetchRank.data ? fetchRank.data.name : rankID}
      </h1>
      <Card header={fetchRank.data && <Badge badge={{ code: fetchRank.data.badgeCode }} />}>
        <Form disabled={isDisabled} onSubmit={onApplyForStaff}>
          <label>Why should we consider you for this role?</label>
          <Textarea value={content} rows={10} onChange={setContent} />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ButtonPrimary disabled={isDisabled} type="submit">Submit Application</ButtonPrimary>
          </div>
        </Form>
      </Card>
    </>
  )
}