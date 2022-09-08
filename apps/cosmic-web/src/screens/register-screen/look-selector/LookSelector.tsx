import React from 'react';
import {LookSelectorProps} from './LookSelector.types';
import {UserGender} from '@imagine-cms/types';

const MALE_LOOKS = [
  'ea-1401-63.lg-275-73.hr-828-45.fa-1212-63.ch-255-64.hd-180-8.sh-290-91',
  'hd-209-1373.lg-3320-110-1408.hr-3163-42.sh-3524-110-92.ch-3077-64-1408',
  'hd-207-1.lg-3058-1428.hr-3162-1906.sh-3089-110.cc-3874-1897-1408',
  'he-1605-1408.lg-285-64.hr-155-42.ch-225-1408.hd-3095-8.sh-300-1408.cc-260-84',
];

const FEMALE_LOOKS = [
  'he-1605-1408.lg-285-64.hr-155-42.ch-225-1408.hd-3095-8.sh-300-1408.cc-260-84',
  'sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20',
  'sh-3252-90-90.hr-3273-1394-42.ch-3729-110-1408.hd-3096-10.lg-3058-110',
  'hr-3811-1394.ch-660-1331.he-1604-63.hd-625-4.lg-3216-1328',
]

export function LookSelector({gender, look, onChangeGender, onChangeLook}: LookSelectorProps) {
  const changeGender = (newGender: UserGender) => {
    if (newGender === gender) {
      return;
    }

    onChangeGender(newGender);
    onChangeLook(newGender === UserGender.Male ? MALE_LOOKS[0] : FEMALE_LOOKS[1]);
  }

  const availableLooks = gender === UserGender.Male ? MALE_LOOKS : FEMALE_LOOKS;
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title-container d-flex">
          <div className="background-gray card-header-icon-container">
            <div className="icon icon-box-three"/>
          </div>
          <div className="card-header-titles">
            <div className="card-header-title">Choose your Look</div>
            <span className="card-header-subtitle">Did you find the perfect match?</span></div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <div className="d-flex gender-selector">
            <div className="row">
              <div className="male">
                <div className={`male-icon ${gender === UserGender.Male ? 'active' : ''}`} onClick={() => changeGender(UserGender.Male)} />
              </div>
              <div className="female">
                <div className={`female-icon ${gender === UserGender.Female ? 'active' : ''}`} onClick={() => changeGender(UserGender.Female)} />
              </div>
            </div>
            <div className="row">
              <div className="d-flex avatar-selector">
                {
                  availableLooks.map((availableLook, lookIndex) => (
                    <div className="pl-5 gender-head" key={`look_${lookIndex}`} onClick={() => onChangeLook(availableLook)} style={{cursor: 'pointer'}}>
                      <img alt="User avatar" className={`avatar avatar-m looks ${availableLook === look ? 'active' : ''}`} src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${availableLook}&head_direction=2&direction=3&gesture=sml&size=m&headonly=1`} loading="lazy" />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
