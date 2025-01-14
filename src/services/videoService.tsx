import axios from "axios";
import apiConfig from "../config/apiConfig";
import useFetchData from "./useFetchData";

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GetVideosByFilter = async (filters: any) => {
  try {
    return await useFetchData('/Video/ByFilter', filters);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const CreateVideo = async (data: any): Promise<void> => {
  try {
    await apiClient.post('/Video', data);
  } catch (error) {
    console.error('Error creating video:', error);
    throw error;
  }
};

export const DeleteVideo = async (id: any): Promise<void> => {
  try {
    await apiClient.delete(`/Video/${id}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetVideosForDropDown = async () => {
  try {
    const response = await apiClient.get('/Video/ForDropDown');
    const videos = response.data.map((video: any) => ({
      label: video.titulo,
      value: video.id,
    }));
    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};