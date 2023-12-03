import React from 'react'
import { Icon } from '@iconify/react';
import { Transition } from 'react-transition-group';

export const Popup = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if(event.target.classList.contains("pop-up-wrapper")) onClose()
  }
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`pop-up pop-up--${state}`}>
            <div className='pop-up-wrapper' onClick={onWrapperClick}>
              <div className='pop-up-content'>
                <button className='pop-up_butt' onClick={() => onClose()}><Icon icon="material-symbols-light:close" className='close_popup'/></button>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  )
}
