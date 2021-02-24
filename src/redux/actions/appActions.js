import {
    GETALLPOSTS
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
