import axios from 'axios';
import apiConfig from '../config/apiConfig';
import { DataItem } from '../lib/types';
import useFetchData from './useFetchData';
import { NextApiRequest, NextApiResponse } from 'next';
import pool from "../lib/database"; // Ruta al archivo donde configuraste el pool

const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


/* export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const filters = req.body;
      //const [rows] = await pool.query("CALL PruebaGK.sp_prueba_newTable()");
      //res.status(200).json(rows);
    } catch (error) {
      console.error("Error executing stored procedure:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
 */
/* 
export const fetchCategories = async () => {
  try {
    const response = await apiClient.get('/Categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchVideos = async () => {
  try {
    const response = await apiClient.get('/Videos');
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export const createVideo = async (data: any) => {
  try {
    const response = await apiClient.post('/Video/Create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating video:', error);
    throw error;
  }
};

export const createExam = async (data: any) => {
  try {
    const response = await apiClient.post('/Exam/Create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating exam:', error);
    throw error;
  }
}; */

/* export const fetchDataByFilter = async (endpoint: string, filters: any) => {
    try {
       const response = await apiClient.post(endpoint, filters);
      const result: DataItem[] = response.data;
      
      const columns = result.length > 0 
        ? Object.keys(result[0]).map(key => ({
            field: key,
            header: key.charAt(0).toUpperCase() + key.slice(1),
          }))
        : []; 
      
      return { data: result, columns };

      
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
 */