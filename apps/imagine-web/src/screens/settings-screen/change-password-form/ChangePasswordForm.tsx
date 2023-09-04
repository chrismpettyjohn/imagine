import React from 'react';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { Accordion } from '../../../components/accordion/Accordion';
import { ButtonPrimary } from '../../../components/button/Button.remix';

export function ChangePasswordForm() {
  return (
    <Accordion header="Change Password">
      <Form>
        <label>Current Password</label>
        <Input type="password" />
        <label>New Password</label>
        <Input type="password" />
        <label>New Password Again</label>
        <Input type="password" />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary>
            Update Password
          </ButtonPrimary>
        </div>
      </Form>
    </Accordion>
  )
}