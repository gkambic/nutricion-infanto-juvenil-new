import React, { useState, useRef, } from "react";
import FilterComponent from "../../components/FilterComponent";
import TableComponent from "../../components/TableComponent";
import { DataItem } from "../../lib/types";
import axios from "axios";
import { GetUsuarioByFilter, CreateUsuario, DeleteUsuario } from '../../services/usuarioService';
import NewItemComponent from "../../components/NewItemComponent";
import { Toast } from 'primereact/toast';

const UsuariosIndex: React.FC = () => {
  const [columns, setColumns] = useState<{ field: string; header: string }[]>(
    []
  );
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [fieldConfigs, setFieldConfigs] = useState([
    { field: 'title', label: 'Title', type: 'text' },
    { field: 'url', label: 'URL', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' },
    { field: 'examenId', label: 'Examen', type: 'dropdown', options: [] },
  ]);
  const toast = useRef<Toast>(null);

  const handleFilterChange = async (newFilters: any) => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, columns: fieldsArray } = await GetUsuarioByFilter(newFilters);
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
      const response = await CreateUsuario(data);
      console.log('Usuario created successfully:', response);
    } catch (error) {
      console.error('Error creating usuario:', error);
    }
  };

  const handleDelete = async (id: any ) => {
    try {
      const response = await DeleteUsuario(id);
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
      <h1>Gestión de Usuarios</h1>
      <FilterComponent fieldConfigs={fieldConfigs} onFilterChange={handleFilterChange} />
      <NewItemComponent header={'Alta de Usuario'} fieldConfigs={fieldConfigs} onSubmit={handleSubmit}/>
      <TableComponent data={data} columns={columns} isEditable={true} onDelete={handleDelete} />
    </div>
  );
};

export default UsuariosIndex;
