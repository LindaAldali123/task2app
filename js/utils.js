const userData =() =>{
    try {
        return JSON.parse(localStorage.getItem("userData")).user || {};
    }catch(error)
    {return {};}
    };
const getToken =() => {
    return localStorage.getItem("Token");
};
export default {
    userData,
    getToken
}