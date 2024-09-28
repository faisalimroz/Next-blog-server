import { apiSlice }from"../api/ApiSlice";


const orderApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        submitOrder:builder.mutation({
            query:(data)=>({
                url:"/api/v1/orders",
                method:"POST",
                body:data
            }),
            invalidatesTags:['order']
        }),
        GetOrder:builder.query({
            query:(email)=>({
                url:`/api/v1/orders/${email}`
            }),
            providesTags:['order']
        }),
        deleteorder:builder.mutation({
            query:(id)=>({
                url:`/api/v1/orders/${id}`,method:"DELETE"
            }),
            invalidatesTags:['order']
        })
    })
})

export const {useSubmitOrderMutation,useGetOrderQuery,useDeleteorderMutation}=orderApi