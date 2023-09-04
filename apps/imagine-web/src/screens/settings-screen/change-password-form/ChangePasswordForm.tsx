import React from 'react';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { Accordion } from '../../../components/accordion/Accordion';

export function ChangePasswordForm() {
  return (
    <Accordion header="Change Password">
      <Form>
        <label>Current Password</label>
        <Input type="password" />
      </Form>
    </Accordion>
  )
}