import React, { useState, useRef, useEffect} from "react";
import FilterComponent from "../../components/FilterComponent";
import TableComponent from "../../components/TableComponent";
import { DataItem } from "../../lib/types";
import axios from "axios";
import { GetByFilter, Create, Delete } from '../../services/genericService';
import NewItemComponent from "../../components/NewItemComponent";
import { Toast } from 'primereact/toast';
import { GetExamenesForDropDown } from '../../services/examenService';
import { trueFalseOption } from '../../lib/variables';

const GenericIndex: React.FC = () => {
  const [columns, setColumns] = useState<{ field: string; header: string }[]>(
    []
  );
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [fieldConfigs, setFieldConfigs] = useState([
    { field: 'nombre', label: 'Nombre', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' },
    { field: 'imagenUrl', label: 'Imagen URL', type: 'text' },
    { field: 'examenId', label: 'Examen', type: 'dropdown', options: [] },
    //{ field: 'otorgado', label: 'Otorgado', type: 'dropdown', options: trueFalseOption.map(option => ({ label: option.nombre, value: option.id }))},
    //{ field: 'aprobadas', label: 'Aprobadas', type: 'dropdown', options: trueFalseOption.map(option => ({ label: option.nombre, value: option.id }))},
    
  ]);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    console.log("TrueFalse",trueFalseOption.map((option: any) => ({
      label: option.nombre,
      value: option.id,
    })) );
    const loadData = async () => {
      try {
        const examenes = await GetExamenesForDropDown();

        setFieldConfigs((prevConfigs) =>
          prevConfigs.map((config) => {
            switch (config.field) {
              case 'examenId':
                return { ...config, options: examenes };
              default:
                return config;
            }
          })
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    loadData();
  }, []);

  const handleFilterChange = async (newFilters: any) => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, columns: fieldsArray } = await GetByFilter(newFilters);
      setData(result);
      setColumns(fieldsArray);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: { [key: string]: any }) => {
    try {
      const response = await Create(data);
      console.log('Registro created successfully:', response);
    } catch (error) {
      console.error('Error creating Registro:', error);
    }
  };

  const handleDelete = async (id: any ) => {
    try {
      const response = await Delete(id);
      console.log('el id es: ' + id);
      toast.current?.show({severity:'success', summary: 'Success', detail:'El registro se elminó correctamente', life: 3000});
      handleFilterChange(filter);
    } catch (error) {
      console.error('Error creating video:', error);
      toast.current?.show({severity:'error', summary: 'Error', detail:'Error al eliminar el registro', life: 3000});
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <h1>Gestión</h1>
      <FilterComponent fieldConfigs={fieldConfigs} onFilterChange={handleFilterChange} />
      <NewItemComponent header={'Alta'} fieldConfigs={fieldConfigs} onSubmit={handleSubmit}/>
      <TableComponent data={data} columns={columns} isEditable={true} onDelete={handleDelete} />
    </div>
  );
};

export default GenericIndex;
