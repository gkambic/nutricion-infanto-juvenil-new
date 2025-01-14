import axios from "axios";
import apiConfig from "../config/apiConfig";
import useFetchData from "./useFetchData";

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GetUsuarioByFilter = async (filters: any) => {
  try {
    return await useFetchData('/Usuario/ByFilter', filters);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const CreateUsuario = async (data: any) => {
  try {
    const response = await apiClient.post('/Usuario/Create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating usuario:', error);
    throw error;
  }
};

export const GetUsuariosForDropDown = async () => {
  try {
    const response = await apiClient.get('/Usuario/ForDropDown');
    const usuarios = response.data.map((usuario: any) => ({
      label: usuario.fullName,
      value: usuario.userId,
    }));
    return usuarios;
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    throw error;
  }
};

export const DeleteUsuario = async (id: any): Promise<void> => {
  try {
    return await apiClient.delete(`/Usuario/${id}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};