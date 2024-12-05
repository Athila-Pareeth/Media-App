import React, { useEffect } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import { getVideoAPI } from '../../../Services/allAPI'
import { useState } from 'react'

function ViewVideo({addVideoResp}) {
  
  const [allVideos,setAllVideos]=useState([])

const handleGetVideo=async()=>{
  const result=await getVideoAPI()
  console.log(result);
  setAllVideos(result.data)
}
console.log(allVideos);  //array assign ayi




useEffect(()=>{
 handleGetVideo()
},[addVideoResp])

  return (
    <div>
      <div className="row p-5">
        <div className="col">
        {/* <VideoCard allVideos={allVideos} /> */}
            {
              allVideos.map(item=>(
                <VideoCard videoDetails={item} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default ViewVideo