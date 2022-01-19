import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8000/expenses/`
})

const login = axios.create({
    baseURL: `http://localhost:8000/users/`
})


export const getData = async (request, response) => {
    // Implementing get data
    response = await api.get(`/user/${request.id}`, request);
    return response.data;
}

export const postData = async (request, response) => {
    //Implementing post method having request.
    try {
        const response = await api.post('/', request);
        return response.data;

    } catch (error) {
        console.log(error.message);
    }
}

export const putData = async (request, response) => {
    //Implementing post method having request.
    try {
        console.log(request);
        await api.put(`/${request.id}`, request);
        console.log(request);
        window.location.reload();

    } catch (error) {
        console.log(error.message);
    }
}

export const deleteData = async (request, response) => {
    //Implementing Delete method.
    try {
        await api.delete(`/${request.id}`);
        window.location.reload();

    } catch (error) {
        console.log(error.message);
    }
}

//Creating function for login Authentication
export const loginAuth = async (request, response) => {
    try {
        const response = await login.post('/login/', request);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
//Creating function for User Signup
export const registerUser = async (request, response) => {
    try {
        const response = await login.post('/', request);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
