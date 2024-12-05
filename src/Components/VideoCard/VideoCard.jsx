import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { addWatchHistoryAPI, deleteVideoAPI } from '../../../Services/allAPI';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function VideoCard({videoDetails}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async() =>{
    setShow(true)
 
  //caption,url,timestamp
  const {caption,link}=videoDetails
  let today=new Date()
  console.log(today); //Mon Nov 18 2024 14:25:35 GMT+0530 (India Standard Time)

  let timestamp=Intl.DateTimeFormat('en-us',{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timestamp); //11/18/24, 02:25:38 PM
  
  const body={
    caption,
    link,
    timestamp
  }
  const result = await addWatchHistoryAPI(body)
  console.log(result);
}  
console.log(videoDetails);

   const handleDelete=async(id)=>{
    try{
      const result=await deleteVideoAPI(id)
      console.log(result);
      Swal.fire({
        title: 'success!',
        text: 'Video deleted sucessfully',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      setInterval(()=>{
        window.location.reload()
      },2000)
    }
    catch(error){
console.log(error);
    }
   }

   const videoDragStart=(e,vId)=>{
    console.log("video drag started...");
    console.log(e);
    console.log(vId);
    e.dataTransfer.setData("videoId",vId)
   }

  return (

    <div >
      <div className=" row mb-3">
        {
          // allVideos.map(video=>(
<div className="col">
<Card draggable={true} onDragStart={e=>videoDragStart(e,videoDetails.id)} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={videoDetails.imgUrl} onClick={handleShow} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'> 
         {videoDetails.caption} 
         <MdDelete onClick={()=>handleDelete(videoDetails.id)} className='fs-5 text-danger'/>
          </Card.Text>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="470" height="315" src={videoDetails.link}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
</div>
          // ))
        }
      </div>
      

    </div>
  )
}

export default VideoCard