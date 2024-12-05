import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteWatchHistoryAPI, getWatchHistoryAPI } from '../../Services/allAPI';
import Swal from 'sweetalert2'

function WatchHistory() {
const [watchDetails,setWatchDetails]=useState([])
  const getWatchHistory=async()=>{
   try{
    const result= await getWatchHistoryAPI()
    console.log(result);
    setWatchDetails(result.data)
   }
   catch(error){
       console.log(error); 
   }
  }
  console.log(watchDetails);
  
  useEffect(()=>{
    getWatchHistory()
  },[])

  const handleDelete=async(id)=>{
    try{
      const result=await deleteWatchHistoryAPI(id)
      console.log(result);
      getWatchHistory()
      if(result.status>=200 && result.status<300){
        Swal.fire({
          title: 'success!',
          text: 'Watch History Details deleted sucessfully',
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
  return (
    <div>
      <div className='container'>
      <div className="row d-flex">
      <h2 className='fs-3 mt-3'>Watch History Details</h2>
      <Link to={'/home'} style={{textDecoration:'none',color:'white'}}className='text-end'>
        Back to Home
        </Link>
      </div>
      <Table striped className='m-5'>
      <thead>
        <tr>
          <th>S1 no</th>
          <th>ID</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        watchDetails.length>0?
        watchDetails.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td><a href={item.link}>{item.link}</a></td>
          <td>{item.timestamp}</td>
          <td>{item.action}</td>
          <td><i onClick={()=>handleDelete(item.id)} className='fa-solid fa-trash text-danger'></i></td>
        </tr>
        ))
        :"No Data"
       }
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default WatchHistory
