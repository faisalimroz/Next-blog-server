import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    tagTypes:['order'],
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    prepareHeaders:(headers)=>{
        const token=Cookies.get('user-token')
        if (token) {
            headers.set('authorize', `Bearer ${token}`);
          }
          return headers;
    }
    }),
    endpoints: (builder) => ({

    }),
})
