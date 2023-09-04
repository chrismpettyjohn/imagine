import React from 'react';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { Accordion } from '../../../components/accordion/Accordion';

export function ChangeEmailAddressForm() {
  return (
    <Accordion header="Change Email">
      <Form>
        <label>Email Address</label>
        <Input type="email" />
      </Form>
    </Accordion>
  )
}