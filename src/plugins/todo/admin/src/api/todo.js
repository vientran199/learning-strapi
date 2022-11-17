import {request} from '@strapi/helper-plugin'

export const todoRequest = {
    getAllTodos: async()=>{
        return await request('/todo/find',{
            method: "GET",
        })
    },
    createTodo: async(data)=>{
        return await request('/todo/create',{
            method: "POST",
            body: {data: data}
        })
    },
    editTodo: async(id,data)=>{
        return await request(`/todo/update/${id}`,{
            method: "PUT",
            body: {data}
        })
    },
    deleteTodo: async(id)=>{
        return await request(`/todo/delete/${id}`,{
            method: "DELETE",
        })
    },
    toggelTodo: async(id)=>{
        return await request(`/todo/toggle/${id}`,{
            method: "PUT",
        })
    },
}