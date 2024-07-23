import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = async (id) =>
{
 await  axios.delete(baseUrl.concat(`/${id}`))
    const request = axios.get(baseUrl)
    return request.then(response => 
        {
            console.log(response.data)
            return response.data
        })
}

export default {getAll, create, remove}