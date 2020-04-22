import React, { useState } from 'react';
import classNames from 'classnames';
import { Check } from '@rocketseat/unform';
import './style.css';

const CheckBoxCard = ({ item, handleChange, index }) => {
  const [active, setActive] = useState(item.value);

  function handleClickOnCard() {
    setActive(!active);
    document.getElementsByClassName('checkbox')[index].click();
  }

  return (
    <div
      onClick={() => handleClickOnCard()}
      className={classNames('checkbox-card', {
        active: active,
      })}
    >
      <Check
        name='value'
        label={item.name}
        onChange={(e) => handleChange(e, index)}
        checked={active}
        className='checkbox'
      />
    </div>
  );
};

export default CheckBoxCard;
