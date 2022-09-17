import React from 'react';
import {UserGender} from '@imagine-cms/types';
import {GenderSelectorProps} from './GenderSelector.types';

export function GenderSelector({ gender, onChange }: GenderSelectorProps) {

  return (
    <div className="row">
      <div className="col-12">
        <div className="genders">
          <div className="male" style={{backgroundImage: 'url(https://www.habbo.de/habbo-imaging/avatarimage?figure=hd-180-1.hr-893-45.lg-280-64.sh-300-64.fa-1201-0.ch-255-62&size=l&headonly=1)', opacity: gender === UserGender.Male ? 1 : .8 }} onClick={() => onChange(UserGender.Male)}/>
          <div className="female" style={{backgroundImage: 'url(https://www.habbo.de/habbo-imaging/avatarimage?figure=hd-600-1.hr-540-45.lg-695-62.sh-905-62.ch-660-62&size=l&head_direction=4&headonly=1)', opacity: gender === UserGender.Female ? 1 : .8 }} onClick={() => onChange(UserGender.Female)} />
        </div>
      </div>
    </div>
  )

}
