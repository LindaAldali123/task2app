//fetchdata.js
import util from "./utils.js";
const BASE_URL = "https://buildingtask.herokuapp.com/api";

const authPost = (endpoint, body) => {
  return fetch(`${BASE_URL}/${endpoint}`,{ method: "POST",
   headers: { 
     "Content-Type": "application/json"
     } ,body:JSON.stringify(body)
    });
};

const Post = (endpoint, body) => {
  return fetch(
    `${BASE_URL}/${endpoint}`,
    util.getToken()
      ? {
        method: "POST",
        headers: {
          Authorization: "Token" + util.getToken(),
          "Content-Type": "application/json"
        },body:JSON.stringify(body)
      }
      : undefined)
};

const get = (endpoint) => {
  return fetch(
    `${BASE_URL}/${endpoint}`,
    util.getToken()
      ? {
        method: "GET",
        headers: {
          Authorization: "Token" + util.getToken(),
          "Content-Type": "application/json",
        },
      }
      : undefined,
  );
};
export default {
  authPost,
  Post,
  get
};