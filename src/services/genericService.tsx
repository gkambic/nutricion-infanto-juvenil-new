import axios from "axios";
import apiConfig from "../config/apiConfig";
import useFetchData from "./useFetchData";

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GetByFilter = async (filters: any) => {
  try {
    //return await useFetchData('PruebaGK.sp_prueba_newTable', filters);
    return await useFetchData('defaultdb.SP_Lista_Permisos', [1, 1]);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const Create = async (data: any) => {
  try {
    const response = await apiClient.post('/Create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating:', error);
    throw error;
  }
};

export const Delete = async (id: any): Promise<void> => {
  try {
    return await apiClient.delete(`/${id}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};