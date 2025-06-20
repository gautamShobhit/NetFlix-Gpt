export const PHOTO_URL =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
