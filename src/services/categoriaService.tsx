import axios from "axios";
import apiConfig from "../config/apiConfig";
import useFetchData from "./useFetchData";

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GetCategoriasForDropDown = async () => {
    try {
      const response = await apiClient.get('/Categoria/ForDropDown');
      const categorias = response.data.map((categoria: any) => ({
        label: categoria.nombre,
        value: categoria.id,
      }));
      return categorias;
    } catch (error) {
      console.error('Error fetching categorias:', error);
      throw error;
    }
  };