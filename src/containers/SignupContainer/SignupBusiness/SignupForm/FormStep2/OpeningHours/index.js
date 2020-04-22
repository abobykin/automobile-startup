import React from 'react';
import { Scope } from '@rocketseat/unform';
import CheckSwitch from '../../../../../../components/common/forms/CheckSwitch';
import IconCalendar from '../../../../svg-icons/IconCalendar';
import IconArrowDown from '../../../../../../components/FAQ/FAQList/svg-icons/IconArrowDown';
import { weekDays, timesArray } from './constants';
import './style.css';

const OpeningHours = ({ storeToForm, hoursCurrentState }) => {
  const handleChange = (e, i) => {
    storeToForm({ [e.target.name]: e.target.checked }, i);
  };

  const timeValues = timesArray().map((item, i) => {
    return <option key={i}>{item}</option>;
  });

  const OpeningHoursRow = () => {
    return weekDays.map((dayName, i) => {
      return (
        <div className='weekday-row' key={i}>
          <div className='day-name'>
            <IconCalendar />
            {dayName}
          </div>
          <Scope path={`openningHours[${i}]`}>
            <CheckSwitch handleChange={handleChange} index={i} />
            {hoursCurrentState[i].isOpen && (
              <>
                <div className='time-selector from'>
                  <select defaultValue='09:00am'>{timeValues}</select>
                  <IconArrowDown fillColor='#8C8E9C' />
                </div>
                <div className='time-selector to'>
                  <select defaultValue='06:00pm'>{timeValues}</select>
                  <IconArrowDown fillColor='#8C8E9C' />
                </div>
              </>
            )}
          </Scope>
        </div>
      );
    });
  };

  return <>{OpeningHoursRow()}</>;
};

export default OpeningHours;
