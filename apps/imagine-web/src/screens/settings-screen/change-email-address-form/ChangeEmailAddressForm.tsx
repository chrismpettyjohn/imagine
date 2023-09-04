import React from 'react';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { Accordion } from '../../../components/accordion/Accordion';
import { ButtonPrimary } from '../../../components/button/Button.remix';

export function ChangeEmailAddressForm() {
  return (
    <Accordion header="Change Email">
      <Form>
        <label>Email Address</label>
        <Input type="email" />
        <label>Password</label>
        <Input type="password" />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary>
            Update Email
          </ButtonPrimary>
        </div>
      </Form>
    </Accordion>
  )
}