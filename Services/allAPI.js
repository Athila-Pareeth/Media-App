import { commomAPI } from "./CommonAPI";
import { ServerUrl } from "./ServerUrl";

//1 Add video details into the server
export const addVedioAPI=async(reqBody)=>{
 return await commomAPI('post',`${ServerUrl}/allvideos`,reqBody)
}

//2 get all Videos from the server

export const getVideoAPI=async()=>{
    return await commomAPI('get',`${ServerUrl}/allvideos`,"")
}

//3 delete a particuar video from the server

export const deleteVideoAPI=async(id)=>{
    return await commomAPI('delete',`${ServerUrl}/allvideos/${id}`,"")
}

//4 add watch-history video details to the server

export const addWatchHistoryAPI=async(reqBody)=>{
    return await commomAPI('post',`${ServerUrl}/watch-history`,reqBody)
}

//5 get watch-history video details from the server

export const getWatchHistoryAPI=async()=>{
    return await commomAPI('get',`${ServerUrl}/watch-history`,"")
}

//6 delete watch-history deatils

export const deleteWatchHistoryAPI=async(id)=>{
    return await commomAPI('delete',`${ServerUrl}/watch-history/${id}`,{})
}

//7 add category into the server

export const addCategoryAPI=async(reqBody)=>{
    return await commomAPI('post',`${ServerUrl}/category`,reqBody)
}

//8 get all categories from the server

export const getCategoryAPI=async()=>{
    return await commomAPI('get',`${ServerUrl}/category`,{})
}

//9 delete a category from the server

export const deleteCategoryAPI=async(id)=>{
    return await commomAPI('delete',`${ServerUrl}/category/${id}`,{})
}

//10 get a particular video details from the server

export const getAVideoAPI=async(id)=>{
    return await commomAPI('get',`${ServerUrl}/allvideos/${id}`,"")
}

//11 update a particular video details from the server

export const updateCategoryAPI=async(cid,reqBody)=>{
   return await commomAPI('put',`${ServerUrl}/category/${cid}`,reqBody)
}