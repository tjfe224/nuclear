import React, { useCallback, useState } from 'react';

import { Button, FullscreenForm } from '../..';

export default {
  title: 'Components/Fullscreen form'
};

export const FullscreenFormStory = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onClose = useCallback(() => setOpen(false), []);
  return <div
    className='bg'
  >
    <Button onClick={toggleOpen}>
      Open layer
    </Button>
    <FullscreenForm isOpen={isOpen} onClose={onClose}>
      <span style={{color: '#fff'}}>
        Layer content
      </span>

      <div style={{background: '#fff', width: 200, height: 200, marginLeft: 200}} />
    </FullscreenForm>
  </div>;
};
