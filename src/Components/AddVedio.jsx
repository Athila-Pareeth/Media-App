import React from 'react'
import { MdCloudUpload } from "react-icons/md";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVedioAPI } from '../../Services/allAPI';
import Swal from 'sweetalert2'

function AddVedio({setAddVideoRes}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [VideoDetails,setVideoDetails]=useState({
    
    caption:"",
    imgUrl:"",
    link:""
  })
  console.log(VideoDetails);
   
  const getEmbedLink=(e)=>{
    console.log(e);

    const {value}=e.target
    console.log(value);
    

    let ycode=value.slice(-31)
    console.log(ycode);

    let ylink=`https://www.youtube.com/embed/${ycode}`
    console.log(ylink);
    
    setVideoDetails({...VideoDetails,link:ylink})
    
  }

  const handleAdd=async()=>{
    const {caption,imgUrl,link}=VideoDetails

    if(!caption || !imgUrl || ! link)
    {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill the form',
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
    else{
      //API Fetching
      const result= await addVedioAPI(VideoDetails)
      console.log(result);
      if(result.status>=200 && result.status<=300)
      {
       
        Swal.fire({
          title: 'success!',
          text: 'Video added sucessfully',
          icon: 'success',
          confirmButtonText: 'Back'
        })
        handleClose()
        setAddVideoRes(result.data)
        setVideoDetails({
         
          caption:"",
          imgUrl:"",
          link:""
        })
      }
      else{
       
        Swal.fire({
          title: 'error!',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'Back'
        })
      }
      
    }
  }

  return (
    <div>
<MdCloudUpload onClick={handleShow} className='fs-3 mt-3'/>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="#">

          <input onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})} type="text" placeholder='Vedio caption' className='form-control mb-3'/>
          
          <input onChange={e=>setVideoDetails({...VideoDetails,imgUrl:e.target.value})} type="text" placeholder='Vedio image' className='form-control mb-3'/>
         
          <input onChange={getEmbedLink} type="text" placeholder='Vedio url' className='form-control mb-3'/>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVedio