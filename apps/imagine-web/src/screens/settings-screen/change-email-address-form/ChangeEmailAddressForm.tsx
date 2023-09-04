import { toast } from 'react-toastify';
import { sessionContext } from '@imagine-cms/web';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { useSessionUpdateEmail } from '@imagine-cms/client';
import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { Accordion } from '../../../components/accordion/Accordion';
import { ButtonPrimary } from '../../../components/button/Button.remix';

export function ChangeEmailAddressForm() {
  const { session } = useContext(sessionContext);
  const sessionUpdateEmail = useSessionUpdateEmail();
  const [emailAddress, setEmailAddress] = useState(session?.email ?? '');
  const [currentPassword, setCurrentPassword] = useState('');

  const isDisabled = !emailAddress || !currentPassword || sessionUpdateEmail.loading;

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target?.value ?? '');
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target?.value ?? '');
  }

  const onSaveEmailChanges = async (event: SyntheticEvent) => {
    event?.preventDefault();
    try {
      if (isDisabled) {
        return;
      }
      await sessionUpdateEmail.execute({ email: emailAddress, password: currentPassword });
      setCurrentPassword('');
      toast.success('Your email has been updated');
    } catch {
      toast.error('Your email could not be changed');
    }
  }

  return (
    <Accordion header="Change Email">
      <Form onSubmit={onSaveEmailChanges}>
        <label>Email Address</label>
        <Input onChange={onChangeEmail} type="email" />
        <label>Password</label>
        <Input onChange={onChangePassword} type="password" />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary disabled={isDisabled} type="submit">
            Update Email
          </ButtonPrimary>
        </div>
      </Form>
    </Accordion>
  )
}