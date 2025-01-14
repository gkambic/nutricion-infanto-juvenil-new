import React, { useEffect, useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


interface TableComponentProps {
    data: any[];
    columns: { field: string; header: string }[];
    isEditable: boolean;
    onDelete?: (id: any) => void;
  }

const GenericTab: React.FC<TableComponentProps> = ({
    data,
    columns,
    isEditable,
    onDelete,
  }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const getNestedData = (rowData: any, field: string) => {
    return Array.isArray(rowData[field]) ? rowData[field] : [];
  };

  return (
    <div>
      <h1>XXX</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TabView>
          {data.map((item, index) => (
            <TabPanel key={index} header={item.nombre}>
              <DataTable value={getNestedData(item, 'usuarios')} responsiveLayout="scroll">
                {columns.map((col, colIndex) => (
                  <Column key={colIndex} field={col.field} header={col.header} />
                ))}
              </DataTable>
            </TabPanel>
          ))}
        </TabView>
      )}
    </div>
  );
};

export default GenericTab;
