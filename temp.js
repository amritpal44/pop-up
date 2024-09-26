<div className='flex flex-col backdrop-blur-sm p-5 gap-10  justify-between border-[1.5px] border-red-500 rounded-md'>
          
          <div className='flex gap-10 '>

            <div className='left-0 flex flex-col border-purple-600 border-[1px]'>
              <img src={popup.icon}/>
              <img src={ellipse} className='-translate-y-5'/>

              <h3>{offerEndingTime} <span>Left</span></h3>
              <h4>Offer ending Tonight</h4>
            </div>

            <div className='right-0 flex flex-col w-64 justify-around'>

              <div className='flex justify-between '>
                <h1>{popup.heading}</h1>
                <div className='relative -translate-y-8'>
                  <h2>{popup.off}</h2>
                  <img src={discount} className='-z-10 absolute -translate-y-12 -translate-x-3'/>
                </div>
                {/* <button onClick={closePopup} className='cursor-pointer border-[1px] p-1 border-black rounded-md'>close</button> */}
              </div>  

              <div className='flex gap-7 flex-wrap w-full'>
                {
                  popup?.curric?.map( (course, index) => {
                    return(
                      <div className='flex gap-5'>
                        <img src={course.icon} className='w-10 h-10'/>
                        <p className='w-5'>{course.title}</p>
                      </div>
                    )
                  })
                }
              </div>

              <div className='flex justify-between gap-3'>
                <div className='flex'>
                  <h1>{popup.price}</h1>
                  <h2>{popup.discount}</h2>
                </div>
                <div>
                  <button onClick={handleExploreClick} className='cursor-pointer border-[1px] px-3 py-1 border-black rounded-md'>Explore</button>
                </div>
              </div>
            </div>

          </div>

          <div className='bottom'>
            <p>Upgrade now to follow a proper roadmap for your career</p>
          </div>
        </div>