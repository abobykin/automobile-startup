import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import SidebarContent from './SidebarContent';
import './style.css';

type SidebarTypes = {
  onChangeFixedLayout: Function,
};

const SidebarRight = ({ onChangeFixedLayout }: SidebarTypes) => {
  const [opened, setOpened] = useState(false);

  const onSetOpened = (value: boolean) => {
    setOpened(value);
    onChangeFixedLayout(value);
  };

  return (
    <>
      <SidebarContent setOpened={onSetOpened} opened={opened} />
      <SidebarButton setOpened={onSetOpened} opened={opened} />
    </>
  );
};

export default SidebarRight;
