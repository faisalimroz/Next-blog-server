import api from "../base_api/api"


export const productData=async()=>{
   try {
    const response=await api.get('/api/v1/products',{next:{
      revalidate:1
    }})
    return response.data
   } catch (error) {
    console.log('error fetching',error);
    return 'error fetching',error || []
   }
}

export const seenProduct=async(id)=>{
try {
   const response=await api.get(`/api/v1/products/${id}`,{next:{
      revalidate:1
    }})
   return response.data
} catch (error) {
   console.log('error fetching',error);
    return 'error fetching',error || []
}
}
export const searchProducts=async(search)=>{
try {
   const response=await api.get(`/api/v1/products/search?searchQuery=${search}`,{next:{
      revalidate:1
    }})
   return response.data
} catch (error) {
   console.log('error fetching',error);
    return 'error fetching',error || []
}
}