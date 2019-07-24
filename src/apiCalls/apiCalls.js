import axios from "axios";

export const getAllAliments = () =>
  axios.get(process.env.REACT_APP_BACKEND_URL + "/api/aliments");

export const getAllMenu = () =>
<<<<<<< HEAD
  axios.get(process.env.REACT_APP_BACKEND_API + "/api/menu");

export const getUser = () =>
  axios.get(process.env.REACT_APP_BACKEND_API + "/api/user/id");
=======
  axios.get(process.env.REACT_APP_BACKEND_URL + "/api/menu");
>>>>>>> d1a5992877a9c29a222f82b61deacbc398397d3c
