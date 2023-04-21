import axios from "axios";

export const apiBaseURL = axios.create({
    baseURL: 'https://dragonclick-64c5d-default-rtdb.firebaseio.com/'
  });