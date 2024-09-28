'use client'
import Tostify from '@/Components/Tostify/Tostify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { stateFulSetUser } from '@/util/getUser/stateFulSetUser';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutBtn = () => {
    const user=stateFulSetUser()
     const router=useRouter()
    console.log(user);
    const handelLogOut=()=>{
        Cookies.remove('user-token');
        router.refresh()
        toast.success('logout')
    }
    return (
        <div>
           {user&&   <button onClick={handelLogOut} className="btn btn-error text-white rounded-full">Logout</button>}
           <Tostify></Tostify>
        </div>
    );
};

export default LogoutBtn;