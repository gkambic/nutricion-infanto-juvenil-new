import withAuth from "../../lib/withAuth";
import { GetByFilter } from '../../services/genericService';
import React, { useState, useEffect } from "react";
import FilterComponent from "../../components/FilterComponent";
import GenericTab from "../../components/GenericTabComponent";
import { DataItem } from '../../lib/types';


const fieldConfigs = [
    { field: 'title', label: 'Title', type: 'text' },
    { field: 'url', label: 'URL', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' },
    { field: 'examenId', label: 'Examen', type: 'dropdown', options: [] },
];

const ReportTabGeneric: React.FC = () => {
  const [columns, setColumns] = useState<{ field: string; header: string }[]>([]);
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

  return (
    <div>
      <h2>Consutlas</h2>
      <FilterComponent fieldConfigs={fieldConfigs} onFilterChange={handleFilterChange} />
      <GenericTab data={data} columns={columns} isEditable={false} />
    </div>
  );
};
export default ReportTabGeneric;
//export default withAuth(ViewSection1);
