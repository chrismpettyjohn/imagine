import Moment from 'moment';
import './BirthdaySelector.css';
import React, {useState} from 'react';
import {SingleDatePicker} from 'react-dates';
import {BirthdaySelectorProps} from './BirthdaySelector.types';

const CURRENT_DATE = Moment().unix();

export function BirthdaySelector({ birthday, onChange}: BirthdaySelectorProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="row">
      <div className="col-12">
        <SingleDatePicker
          date={birthday ? Moment(birthday) : null}
          onDateChange={date => onChange(date!.toDate())}
          id="birthday"
          focused={focused}
          onFocusChange={() => setFocused(_ => !_)}
          isOutsideRange={(day: Moment.Moment) => CURRENT_DATE <= day.unix()}
        />
        <br /><br/>
      </div>
    </div>
  )
}
