import { toast } from 'react-toastify';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { useSessionUpdatePassword } from '@imagine-cms/client';
import { Accordion } from '../../../components/accordion/Accordion';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { ButtonPrimary } from '../../../components/button/Button.remix';

export function ChangePasswordForm() {
  const sessionUpdatePassword = useSessionUpdatePassword();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');

  const isDisabled = !currentPassword || !newPassword || !newPasswordAgain || sessionUpdatePassword.loading || newPassword !== newPasswordAgain;

  const onChangeCurrentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target?.value ?? '');
  }
  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target?.value ?? '');
  }
  const onChangeNewPasswordAgain = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordAgain(event.target?.value ?? '');
  }


  const onSavePasswordChanges = async (event: SyntheticEvent) => {
    event?.preventDefault();
    try {
      if (isDisabled) {
        return;
      }
      await sessionUpdatePassword.execute({ currentPassword, newPassword });
      setCurrentPassword('');
      toast.success('Your password has been updated');
    } catch {
      toast.error('Your password could not be changed');
    }
  }

  return (
    <Accordion header="Change Password">
      <Form onSubmit={onSavePasswordChanges}>
        <label>Current Password</label>
        <Input onChange={onChangeCurrentPassword} type="password" value={currentPassword} />
        <label>New Password</label>
        <Input onChange={onChangeNewPassword} type="password" value={newPassword} />
        <label>New Password Again</label>
        <Input onChange={onChangeNewPasswordAgain} type="password" value={newPasswordAgain} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary disabled={isDisabled} type="submit">
            Update Password
          </ButtonPrimary>
        </div>
      </Form>
    </Accordion>
  )
}