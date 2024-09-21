import FocusTrap from 'focus-trap-react'
import React from 'react'

const Popup = ( {closePopup, onKeyDown, popup, updateShownPopup} ) => {

  const handleExploreClick = () => {
    updateShownPopup("opened");
    window.open(popup.action, '_blank');
  }

  return (
    <FocusTrap>
      <aside
        role='dialog'
        aria-modal="true"
        onKeyDown={onKeyDown}
        className='h-full flex justify-center mx-auto items-center'
        > 

        <div className='flex flex-col backdrop-blur-sm p-5 gap-10  justify-between border-[1.5px] border-red-500 rounded-md'>
          <div className='flex gap-7'>
            <h1 className='text-xl font-semibold'>{popup.heading}</h1>
            <button onClick={closePopup} className='cursor-pointer border-[1px] p-1 border-black rounded-md'>close</button>
          </div>

          <div>
            <button onClick={handleExploreClick} className='cursor-pointer border-[1px] px-3 py-1 border-black rounded-md'>Explore</button>
          </div>
        </div>

      </aside>
    </FocusTrap>
  )
}

export default Popup