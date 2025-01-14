import axios from "axios";
import apiConfig from "../config/apiConfig";
import useFetchData from "./useFetchData";

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GetCuponesByFilter = async (filters: any) => {
  try {
    return await useFetchData('/Cupon/ByFilter', filters);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const CreateCupon = async (data: any) => {
  try {
    const response = await apiClient.post('/Cupon/Create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating cupon:', error);
    throw error;
  }
};

export const GetCuponesForDropDown = async () => {
  try {
    const response = await apiClient.get('/Cupon/ForDropDown');
    const cupones = response.data.map((cupon: any) => ({
      label: cupon.codigo,
      value: cupon.id,
    }));
    return cupones;
  } catch (error) {
    console.error('Error fetching cupones:', error);
    throw error;
  }
};

export const DeleteCupon = async (id: any): Promise<void> => {
  try {
    return await apiClient.delete(`/Cupon/${id}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};