import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import BaseUrl from '../../../config/BaseUrl';
// import { Breathing } from 'react-shimmer'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:520,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CompanyDescriptionModal = (props) => {
  // console.log(props.data.bio,"data")
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
      {/*---------------------OVERVIEW MODAL*/}
      <div className="container  w-11/15 mx-auto px-4  mt-4 border border-slate-300 bg-white rounded ">
        <div className="relative flex flex-col flex-auto min-w-0 mt-4 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
          <div>
            <h5 className="mb-1 text-lg font-semibold">Edit video link/bio</h5>
            <Formik
              initialValues={{ bio:'', video_url:'' }}
              onSubmit={(values) => {
                  axios({
                    method: 'PATCH',
                    url: `${BaseUrl.url}/add-bio`,
                    headers:{
                      'Authorization':`Bearer ${window.localStorage.getItem('token')}`
                    },
                    data:{
                      bio:values.bio,
                      video_url:values.video_url,
                    }
                  }).then((res)=>{
                    console.log(res.data)
                    window.location.reload()
                  })
                  .catch((err)=>{
                      console.log(err.message)
                  })
                HandleClose()
              }}
              >
            <Form>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edit Video URL</label>
                <Field type="text" name="video_url" id="videoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={props.data?props.data.video_url:null} />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edit Bio</label>
                <Field as="textarea" name="bio" id="editBio" rows={8} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data?props.data.bio:null} />
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </Form>
            </Formik>
          </div>
        </div>
      </div>
      {/*---------------------/////OVERVIEW MODAL*/}
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

export default CompanyDescriptionModal
