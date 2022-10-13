import React from 'react';
import CompanyHrModal from './CompanyHrModal';

const CompanyHr = () => {
  const [Open,setOpen] = React.useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);
  return (
    <>
      <div className="container  w-11/15 mx-auto px-4  mt-4 border border-slate-300 bg-white rounded ">
      <div className="relative flex flex-col flex-auto min-w-0 mt-4 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 ...">
            <div className="h-full mb-4">
              <h5 className="mb-1 text-xl font-semibold">Current HR's</h5>
            </div>
          </div>
          <div className="...">
            <div className="text-end text-slate-600 text-lg mb-4">
              <i onClick={HandleOpen} className="fa-solid fa-plus border-solid  ring-2 ring-gray-200 p-2 rounded-full" />&nbsp;
            </div>
          </div>
        </div>
        <div className="grid gap-2 mb-6 md:grid-cols-4">
          <div className="p-3 gap-4  bg-white rounded-xl shadow-lg flex items-center  border border-gray-300">
            <div className>
              <img className=" w-24 h-24  rounded-full" src="img/profile.jpg" alt />
            </div>
            <div>
              <div className="text-md font-medium text-black">Abhinandan Jhamb</div>
              <p className="text-slate-500 text-sm">Owner at Codesoftic</p>
            </div>
          </div>
          <div className="p-3 gap-4  bg-white rounded-xl shadow-lg flex items-center  border border-gray-300">
            <div className>
              <img className=" w-24 h-24  rounded-full" src="assets/img/profile.jpg" alt />
            </div>
            <div>
              <div className="text-md font-medium text-black">Abhinandan Jhamb</div>
              <p className="text-slate-500 text-sm">Owner at Codesoftic</p>
            </div>
          </div>
          <div className="p-3 gap-4  bg-white rounded-xl shadow-lg flex items-center  border border-gray-300">
            <div className>
              <img className=" w-24 h-24  rounded-full" src="assets/img/profile.jpg" alt />
            </div>
            <div>
              <div className="text-md font-medium text-black">Abhinandan Jhamb</div>
              <p className="text-slate-500 text-sm">Owner at Codesoftic</p>
            </div>
          </div>
          <div className="p-3 gap-4  bg-white rounded-xl shadow-lg flex items-center  border border-gray-300">
            <div className>
              <img className=" w-24 h-24  rounded-full" src="assets/img/profile.jpg" alt />
            </div>
            <div>
              <div className="text-md font-medium text-black">Abhinandan Jhamb</div>
              <p className="text-slate-500 text-sm">Owner at Codesoftic</p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    <CompanyHrModal Open={Open} HandleClose={HandleClose}/>
    </>
  )
}

export default CompanyHr;
