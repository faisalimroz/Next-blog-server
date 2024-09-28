'use server'

export const RegisterActions=async(data)=>{
const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/register`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data),

    cache:'no-store'
})
if (!res.ok) {
    throw new Error(`Failed to login: ${res.status} ${res.statusText}`);
  }
const responseUser= await res.json()
 return responseUser
}