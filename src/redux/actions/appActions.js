import {
    GETALLPOSTS,
    GETALLUSERS,
    GETUSERPOST,
    ADDNEWUSER,
    ADDNEWPOST,
  } from "./types";

// Get All Posts
export const allPostData = (limit, page) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+limit+'&_page='+page)
            const result = await response.json();
            if(result){
                dispatch({
                    type: GETALLPOSTS,
                    payload: {
                        allPostsData: result
                    },
                });
                return Promise.resolve(result);
            }
            else{
                return Promise.reject(result);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

// Get All Users
export const allUserData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json();
            if(result){
                dispatch({
                    type: GETALLUSERS,
                    payload: {
                        allUsersData: result
                    },
                });
                return Promise.resolve(result);
            }
            else{
                return Promise.reject(result);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

// Get Post Against UserId
export const getUserPostData = (userID) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/?userId='+userID)
            const result = await response.json();
            if(result){
                dispatch({
                    type: GETUSERPOST,
                    payload: {
                        userPostData: result
                    },
                });
                return Promise.resolve(result);
            }
            else{
                return Promise.reject(result);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

// Add New User
export const AddNewUser = (name, username, email, country) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email,
                    address: {
                        city: country
                    }
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const result = await response.json();
            console.log("Added User -> ", result);
            if(result){
                dispatch({
                    type: ADDNEWUSER,
                    payload: {
                        addNewUserData: result
                    },
                });
                return Promise.resolve(result);
            }
            else{
                return Promise.reject(result);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

// Add New Post
export const AddNewPost = (postTitle, postBody) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: postTitle,
                    body: postBody
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const result = await response.json();
            console.log("Added Post -> ", result);
            if(result){
                dispatch({
                    type: ADDNEWPOST,
                    payload: {
                        addNewPostData: result
                    },
                });
                return Promise.resolve(result);
            }
            else{
                return Promise.reject(result);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}