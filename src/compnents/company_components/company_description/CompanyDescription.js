import React, { useState } from 'react'
import CompanyVideos from './company_videos/CompanyVideos'
import CompanyDescriptionModal from './CompanyDescriptionModal';

const CompanyDescription = (props) => {
  const [Open,setOpen] = React.useState(false);

  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);
  
 
  return (
    <>
      <div className="relative flex flex-col flex-auto min-w-0 mt-4 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ...">
          <div className="h-full mb-4">
            <h5 className="mb-1 text-xl font-semibold">Overview</h5>
          </div>
        </div>
        <div className="...">
          <div className="text-end text-slate-600 text-xs mb-4">
            <i onClick={HandleOpen} className="fa-solid fa-pen border-solid  ring-2 ring-gray-200 p-2 rounded-full" />
          </div>
        </div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-2">
        <CompanyVideos />        
       <div>
          <p className="text-justify">We Help Businesses Generate Leads &amp; Revenue Through Our Full-Service Digital Marketing
            Solutions<br /><br />
            #1 Digital Marketing Agency in India<br /><br />
            Data-Driven Marketing with a strict ROI focus<br /><br />
            Codesoftic Tech Private Limited is surrounded by the creative swarm which is a highly
            productive, well organized and defined digital marketing company in India. Our focus
            is to help businesses to reach targeted customers &amp; increase conversion rates using
            the latest online marketing strategies.<br /><br /> We all creators met in 2005 the
            foundation year and have made a difference with the team across the globe including
            the USA, Canada, UK, Australia, Germany and much more.</p>
        </div>
        <div>
        </div>
      </div>
    </div>
    <CompanyDescriptionModal Open={Open} HandleClose={HandleClose} data={props.data}/>
    </>
  )
}

export default CompanyDescription
