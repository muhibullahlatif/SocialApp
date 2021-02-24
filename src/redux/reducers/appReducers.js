import {
    GETALLPOSTS
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
  
      default:
        return state;
    }
  };