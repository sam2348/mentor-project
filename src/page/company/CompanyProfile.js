import React from 'react';
import CompanyName from '../../compnents/company_components/companyName/companyName.js';
import SocialMedia from '../../compnents/company_components/social_media/SocialMedia.js';
import CompanyDescription from '../../compnents/company_components/company_description/CompanyDescription'
import CompanyHr from '../../compnents/company_components/company_HR\'s/CompanyHr.js';
import { toast, ToastContainer } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import BaseUrl from '../../config/BaseUrl';



const CompanyProfile = () => {
  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')
  const [getData,setGetData]=React.useState()

  const LogoutHandler=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    toast.error('logout SuccessFully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'colored'
      });
      setTimeout(() => {
          navigate('/login')
      }, 2000);
  }

  const ProfileSubmit =()=> {
    axios({
      method: 'GET',
      url: `${BaseUrl.url}/company/profile`,
      headers:{
        'Authorization':`Bearer ${window.localStorage.getItem('token')}`
      }
    }).then((res)=>{
      console.log(res.data.company,"company")
      setGetData(res.data.company);
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  React.useEffect(()=>{
    ProfileSubmit();
  },[window.localStorage.getItem('token')])

  return (
    <>
    {!token?navigate('/login'):
  <div className="bg-blue-100">
   {/*---------------------HEADER*/}
  <nav className="bg-white border-b border-slate-300">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
          <div className="flex space-x-4">
            <a onClick={LogoutHandler} className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Logout</a>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  </nav>
   {/*---------------------HEADER*/}
   {/*----------------------- Start - CompanyName - SocialMedia */}
  <div className="container  w-11/15 mx-auto px-4  mt-4 border border-slate-300 bg-white rounded ">
    <div className="relative flex flex-col flex-auto min-w-0 mt-4 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
      <div className="flex flex-row">
         {/*-----------COLUMN 1st/company name/--*/}
          <CompanyName data={getData}/> 
         {/*-----------COLUMN 2nd/company icons/--*/}
         <SocialMedia /> 
      </div>
    </div>
  </div>
   {/*------------------------- End - CompanyName - SocialMedia*/}
   {/*------------------------Overview*/}
  <div className="container  w-11/15 mx-auto px-4  mt-4 border border-slate-300 bg-white rounded ">
   <CompanyDescription data={getData} />
     {/*------------------------Overview*/}
     {/*------------------------Current HRs*/}
      < CompanyHr />
  </div>
</div>
 }   
    </>
  )
}

export default CompanyProfile;
