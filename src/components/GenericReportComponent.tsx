// components/GenericReport.tsx
import React, { useState, useEffect } from "react";
import FilterComponent from "./FilterComponent";
import TableComponent from "./TableComponent";
import { DataItem, FieldConfig } from "../lib/types";

interface GenericReportProps {
  title: string;
  //fieldConfigs: FieldConfig[];
  getByFilter: (filters: any) => Promise<{ data: DataItem[], columns: { field: string, header: string }[], fieldConfigs: FieldConfig[] }>;
}

const GenericReport: React.FC<GenericReportProps> = ({ title, getByFilter }) => {
  const [columns, setColumns] = useState<{ field: string; header: string }[]>([]);
  const [filters, setFilters] = useState<FieldConfig[]>([]);
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const filters: any = [];
    handleFilterChange(filters);
  }, []);

  const handleFilterChange = async (newFilters: any) => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, columns: fieldsArray, fieldConfigs: filters} = await getByFilter(newFilters);
      setData(result);
      setColumns(fieldsArray);
      setFilters(filters);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <FilterComponent fieldConfigs={filters} onFilterChange={handleFilterChange} />
      <TableComponent data={data} columns={columns} isEditable={false} />
    </div>
  );
};

export default GenericReport;
