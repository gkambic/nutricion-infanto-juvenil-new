// useFetchData.ts
import axios from 'axios';
import { DataItem, FieldConfig } from "../lib/types";
import apiConfig from '../config/apiConfig';

/* const UseFetchData = async (endpoint: string, filters: any) => {
  try {
    const response = await axios.post('/api/prueba', filters);
    console.log(response);
    
    const result: DataItem[] = response.data;
    
    const columns = result.length > 0 
      ? Object.keys(result[0])
        .filter(key => key !== 'usuarios')
        .map(key => ({
          field: key,
          header: key.charAt(0).toUpperCase() + key.slice(1),
        }))
      : [];
    
    return { data: result, columns };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}; */

const UseFetchData = async (procedure: string, filters: any) => {
  const procedureParams = Object.values(filters);
  try {
    const response = await axios.post('/api/prueba', {
      procedureName: procedure,
      procedureParams, // Cambia esto según sea necesario
    });
    console.log(response.data); // Verifica los datos recibidos
    
    const result: DataItem[] = response.data;
    
    // Genera las columnas dinámicamente para la tabla
    const columns = result.length > 0 
      ? Object.keys(result[0])
        .map(key => ({
          field: key,
          header: key.charAt(0).toUpperCase() + key.slice(1),
        }))
      : [];
    
      const fieldConfigs: FieldConfig[] = columns.map(column => ({
        field: column.field,
        label: column.header,
        type: 'text', // Por defecto 'text', ajusta según tus necesidades
        // Opcional: si alguna columna requiere opciones (por ejemplo, dropdown), define aquí las opciones.
        options: column.field === 'status' ? [
          { label: 'Activo', value: 'activo' },
          { label: 'Inactivo', value: 'inactivo' },
        ] : undefined,
      }));
      
    return { data: result, columns, fieldConfigs  };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default UseFetchData;
