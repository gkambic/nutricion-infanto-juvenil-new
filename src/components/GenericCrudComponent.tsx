import React, { useEffect, useRef, useState } from "react";
import FilterComponent from "./FilterComponent";
import TableComponent from "./TableComponent";
import NewItemComponent from "./NewItemComponent";
import { DataItem, FieldConfig } from "../lib/types";
import { Toast } from "primereact/toast";

interface GenericCrudProps {
  header: string;
  //fieldConfigs: FieldConfig[];
  getByFilter: (filters: any) => Promise<{ data: DataItem[]; columns: { field: string; header: string }[], fieldConfigs: FieldConfig[] }>;
  createItem: (data: { [key: string]: any }) => Promise<void>;
  deleteItem: (id: any) => Promise<void>;
  dropdownLoaders?: { [key: string]: () => Promise<any[]> };
}

const GenericCrud: React.FC<GenericCrudProps> = ({
  header,
  //fieldConfigs,
  getByFilter,
  createItem,
  deleteItem,
  dropdownLoaders = {},
}) => {
  const [columns, setColumns] = useState<{ field: string; header: string }[]>([]);
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<any>({});
  const [configs, setConfigs] = useState<FieldConfig[]>([]);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const loadDropdownData = async () => {
      try {
        const updatedConfigs = await Promise.all(
          configs.map(async (config) => {
            if (config.type === "dropdown" && dropdownLoaders[config.field]) {
              const options = await dropdownLoaders[config.field]();
              return { ...config, options };
            }
            return config;
          })
        );
        setConfigs(updatedConfigs);
      } catch (error) {
        console.error("Error loading dropdown data:", error);
      }
    };
    loadDropdownData();
  }, [configs, dropdownLoaders]);

  const handleFilterChange = async (newFilters: any) => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, columns: fieldsArray, fieldConfigs: filters} = await getByFilter(newFilters);
      setData(result);
      setColumns(fieldsArray);
      setConfigs(filters);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: { [key: string]: any }) => {
    try {
      await createItem(data);
      toast.current?.show({ severity: "success", summary: "Success", detail: "Item created successfully", life: 3000 });
      handleFilterChange(filter);
    } catch (error) {
      console.error("Error creating item:", error);
      toast.current?.show({ severity: "error", summary: "Error", detail: "Error creating item", life: 3000 });
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await deleteItem(id);
      toast.current?.show({ severity: "success", summary: "Success", detail: "Item deleted successfully", life: 3000 });
      handleFilterChange(filter);
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.current?.show({ severity: "error", summary: "Error", detail: "Error deleting item", life: 3000 });
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <h1>{header}</h1>
      {/* <FilterComponent fieldConfigs={configs} onFilterChange={handleFilterChange} /> */}
      <NewItemComponent header={`New ${header}`} fieldConfigs={configs} onSubmit={handleSubmit} />
      <TableComponent data={data} columns={columns} isEditable={true} onDelete={handleDelete} />
    </div>
  );
};

export default GenericCrud;
