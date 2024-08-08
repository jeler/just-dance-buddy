import { AxiosPromise } from "axios";
import { axiosInstance } from "./config";

export const getTracksBySongId = async (songId) => {
  try {
    const res = await axiosInstance.get(`/tracks/song/${songId}`);
    const { data } = res;
    return data;
  } catch (e) {
    return e;
  }
  // return  await axiosInstance.get(`/tracks/song/${songId}`)
};

// Array of filters will be sent in
// export const fetchFilteredSongs = async(searchItem) => {
//     try {
//         const res =await axiosInstance.get(`song/search`, {params: {artist} })
//     }
// }
