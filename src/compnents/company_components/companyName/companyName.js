import React from 'react';
import CompanyNameModal from "./CompanyNameModal";

const CompanyName = (props) => {
  const [Open,setOpen] = React.useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);
  return (
    <>
      <div className="basis-1/2">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div onClick={HandleOpen} className="relative">
                <img className=" w-32 h-32 " src={props.data?props.data.avatar:null} alt />
                <div className="relative">
                  <i className="fa-solid fa-pencil text-slate-600 text-lg bottom-24 left-24 absolute p-2 w-12 h-12 bg-slate-100 border-4 border-slate-100 dark:border-gray-800 rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <div className="h-full">
                <h5 className="mb-1 text-2xl font-semibold">{props.data?props.data.name:null}</h5>
                <p className="mb-0  leading-normal text-slate-600 text-size-sm">Online end to end solution</p>
              </div>
              <div className="flex items-center">
                <div>
                  <span>5.0&nbsp;</span>
                  <i className="fa-solid fa-star w-5 h-5 text-yellow-400 " />
                  <i className="fa-solid fa-star w-5 h-5 text-yellow-400" />
                  <i className="fa-solid fa-star w-5 h-5 text-yellow-400" />
                  <i className="fa-solid fa-star w-5 h-5 text-yellow-400" />
                  <i className="fa-solid fa-star w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
              </div>
            </div>
          </div>
        </div>
        <CompanyNameModal Open={Open} HandleClose={HandleClose}/>
    </>
  )
}

export default CompanyName;
