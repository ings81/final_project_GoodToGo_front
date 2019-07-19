import axios from "axios";

export const getAllAliments = () =>
  axios.get(process.env.REACT_APP_BACKEND_API + "/api/aliments");

export const getAllMenu = () =>
  axios.get(process.env.REACT_APP_BACKEND_API + "/api/menu");
