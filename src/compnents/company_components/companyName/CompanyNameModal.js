import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios';
// import { Breathing } from 'react-shimmer'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:410,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CompanyNameModal = (props) => {
  const filehandler=(e)=>{
 console.log( e.target.value,"file")
  }
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.Open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
        >
        <Fade in={props.Open}>
        <Box sx={style}> 
          <span className="flex justify-end -mt-7 -mr-6 text-xl">
            <i onClick={props.HandleClose} className="fa-solid fa-xmark"></i>
          </span>
      <div>
        {/*---------------------Profile MODAL*/}
        <div className="container  w-11/15 mx-auto px-4  mt-4 border border-slate-300 bg-white rounded ">
          <div className="relative flex flex-col flex-auto min-w-0 mt-4 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
            <div>
              <div className="flex justify-start ">
                <div className="rounded-lg  bg-gray-50 lg:w-1/2">
                  <div className="m-4">
                    <h5 className="mb-1 text-lg font-semibold">Change profile photo</h5>
                    <label className="inline-block mb-2 text-gray-500">Upload
                      Image(jpg,png,svg,jpeg)</label>
                    <div className="flex items-center justify-start w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                        </div>
                        <input type="file" name='file' onChange={filehandler} className="opacity-0" />
                      </label>
                    </div>
                  </div>
                  <div className="flex p-2 space-x-4">
                    <button type="submit" className="text-white border border-blue-700 text-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</button>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/*---------------------Profile MODAL*/}

      {/* <div className="container w-11/15 mx-auto px-4 py-4 mt-4 border border-slate-300 bg-white rounded ">
        <div>
          <h5 className="  p-2 font-medium leading-tight text-xl mt-0 mb-2 text-black">Add Bio</h5>
        </div>
        <textarea id="message" onChange={(event)=>setBioData(event.target.value)} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{data?data:`Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s
              standard dummy text ever since the 1500s`}</textarea>
        <br />
        <button type="button" 
        // onClick={BioSubmit} 
        className="ml-5 rounded-md border border-gray-300 bg-blue-800 text-white py-2 px-3 text-sm font-medium shadow-sm ">Save</button>
      </div> */}
    </div> 
      </Box>
     </Fade>
    </Modal>
    </>
  )
}

export default CompanyNameModal
