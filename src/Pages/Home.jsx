import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddVedio from '../Components/AddVedio'
import { TbHistory } from "react-icons/tb";
import AddCategory from '../Components/AddCategory/AddCategory';
import ViewVideo from '../Components/ViewVideo/ViewVideo';
function Home() {

    const [addVideoResp,setAddVideoRes]=useState({})

  return (
    <div>
      <div className="row">
<div className="col-6 d-flex">
<h1 className='fs-4 p-3'>Upload Vedio</h1> <AddVedio setAddVideoRes={setAddVideoRes}/>
</div>
<div className="col-6">
<Link to={'/WatchHistory'} style={{float:'right',textDecoration:'none'}} className='p-4 fs-5'>
Watch Hitsory <TbHistory className='fs-4' />

</Link>
</div>
      </div>

      <div className="row">
       <div className="col-9">
       <h1 className='text-center fs-3 m-5'>All Videos</h1>
       <ViewVideo addVideoResp={addVideoResp}/>
      </div>
      <div className="col-3">
       <h1 className='text-center fs-3 m-5'>Add Category</h1>
       <AddCategory/>
       </div>
      </div>
    </div>
    
  )
}

export default Home