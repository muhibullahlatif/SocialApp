import {
    GETALLPOSTS,
    GETALLUSERS,
    GETUSERPOST,
    ADDNEWUSER,
    ADDNEWPOST,
  } from "../actions/types";
  import { appDefaultReducer } from "./defaultReducer";

  const INITIAL_STATE = appDefaultReducer.app;

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GETALLPOSTS: {
        return {
          ...state,
          get_all_posts: action.payload.allPostsData
        }
      }
      case GETALLUSERS: {
        return {
          ...state,
          get_all_users: action.payload.allUsersData
        }
      }
      case GETUSERPOST: {
        return {
          ...state,
          get_user_post: action.payload.userPostData
        }
      }
      case ADDNEWUSER: {
        return {
          ...state,
          add_new_user: action.payload.addNewUserData
        }
      }
      case ADDNEWPOST: {
        return {
          ...state,
          add_new_post: action.payload.addNewPostData
        }
      }
  
      default:
        return state;
    }
  };