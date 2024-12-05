// 1 importing axios
import axios from 'axios'

//2 configure the axios

export const commomAPI=async(httpMethod,url,reqBody)=>{
const reqConfig={
    method:httpMethod,
    url:url,
    data:reqBody
}

return await axios(reqConfig).then((response)=>{
    return response
})
.catch((error)=>{
    return error
})
}