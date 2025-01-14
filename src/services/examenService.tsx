import axios from "axios";
import apiConfig from "../config/apiConfig";
import useFetchData from "./useFetchData";

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GetExamenesByFilter = async (filters: any) => {
  try {
    return await useFetchData('/Examen/ByFilter', filters);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetExamenesForDropDown = async () => {
  try {
    const response = await apiClient.get('/Examen/ForDropDown');
    const examenes = response.data.map((examen: any) => ({
      label: examen.nombre,
      value: examen.id,
    }));
    return examenes;
  } catch (error) {
    console.error('Error fetching examenes:', error);
    throw error;
  }
};

export const CreateExamen = async (data: any) => {
  try {
    const response = await apiClient.post('/Examen/Create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating examen:', error);
    throw error;
  }
};

export const DeleteExamen = async (id: any): Promise<void> => {
  try {
    return await apiClient.delete(`/Examen/${id}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};