import React, { useEffect} from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../../Services/allAPI';
import Swal from 'sweetalert2'
import { MdOutlineDelete } from "react-icons/md";


function AddCategory() {

  const [categoryName,setCategoryName]=useState("")
  const [categoryDetails,setCategoryDetails]=useState([])

  const handleAddCategory=async()=>{
  console.log(categoryName);
if(categoryName){
  try{
  const body={
  categoryName,
  allVideo:[]
}

const result= await addCategoryAPI(body)
console.log(result);

if(result.status>=200 && result.status<=300)
  
  {
    handleGetCategory()
    Swal.fire({
      title: 'success!',
      text: 'Category added sucessfully',
      icon: 'success',
      confirmButtonText: 'Back'
    })
    handleClose()
    setCategoryName("")
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
  catch(error){
console.log(error);
  }
}
else{
  Swal.fire({
    title: 'error!',
    text: 'Please fill the form',
    icon: 'error',
    confirmButtonText: 'Back'
  })
}
  }



  const handleGetCategory=async()=>{
   try{
    const result=await getCategoryAPI()
    console.log(result);  //obj type...{data:{}} we have to hold the data to create a state
    if(result.status>=200 && result.status<=300){
      setCategoryDetails(result.data)
    }
    else{
      console.log(result.message);
      
    }
   }
   catch(error){
   console.log(error);
   }
  }
  console.log(categoryDetails );//[]
  
useEffect(()=>{
  handleGetCategory()
},[])



 const handleDeleteCategory=async(id)=>{
 try{
  const result = await deleteCategoryAPI(id)
  console.log(result);
 
  if(result.status>=200 && result.status<300){
    handleGetCategory()
    Swal.fire({
      title: 'success!',
      text: 'Category deleted sucessfully',
      icon: 'success',
      confirmButtonText: 'Back'
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
  catch(error){
    console.log(error);
  }
 }
const videoOver=(e)=>{
console.log(e);
console.log("video over");
e.preventDefault()
}
const videoDrop=async(e,cId)=>{
  console.log("video Droped at category Id"+cId);
  console.log(e);
  const vId=e.dataTransfer.getData("videoId")
  console.log("videoId :"+vId); //videoId kittum
  //get video details of particular id
 const {data} = await getAVideoAPI(vId)
 console.log(data);
 //get a particular data
 const selectedCategory=categoryDetails.find((item)=>item.id==cId)
 console.log(selectedCategory);
 //add video details into that array
 selectedCategory.allVideo.push(data)
 
 //json lot all vedio de ullilot varan..
 const result= await updateCategoryAPI(cId,selectedCategory)
 console.log(result);
 handleGetCategory()
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <div>
      <div className='text-center'>
        <button onClick={handleShow}>Add category</button>
      </div>
      <div className="row">
     {
       categoryDetails.length>0? categoryDetails.map((item)=>(
        <div onDragOver={e=>videoOver(e)} onDrop={e=>videoDrop(e,item.id)} className="col p-3 my-3 mx-3 d-flex justify-content-between">
          <h3 className='me-3'>{item.categoryName}</h3>
          <MdOutlineDelete onClick={()=>handleDeleteCategory(item.id)} className='fs-3 text-danger' />
<div className="row">
  {
    item.allVideo.map(item=>(
    <p>{item.caption}</p>
  ))
  }
</div>
        </div>
       )):"No Category"
     }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="#">
          <input onChange={e=>setCategoryName(e.target.value)} type="text" placeholder='Add Category' className='form-control mb-3'/>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCategory