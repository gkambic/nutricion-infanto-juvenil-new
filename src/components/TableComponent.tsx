import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import EditTableComponent from "./EditTableComponent";

interface TableComponentProps {
  data: any[];
  columns: { field: string; header: string }[];
  isEditable: boolean;
  onDelete?: (id: any) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  columns,
  isEditable,
  onDelete,
}) => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
  const [expandedRows, setExpandedRows] = useState<any>([]);
  const [hasSubGrid, setHasSubGrid] = useState<boolean>(false);

  useEffect(() => {
    const checkForSubGrid = data.some(rowData =>
      Object.keys(rowData).some(key => Array.isArray(rowData[key]))
    );
    setHasSubGrid(checkForSubGrid);
  }, [data]);
  
  const editBody = (rowData: any) => {
    return (
      <Button
        type="button"
        icon="pi pi-pencil"
        severity="secondary"
        rounded
        onClick={() => {
          setDialogVisible(!dialogVisible);
          setSelectedRowData(rowData);
        }}
      />
    );
  };

  const deleteBody = (rowData: any) => {
    return (
      <Button
        type="button"
        icon="pi pi-trash"
        severity="danger"
        rounded
        onClick={() => {
          if (onDelete) {
            onDelete(rowData.id);
          }
        }}
      />
    );
  };

  const urlBodyTemplate = (rowData: any) => {
    return (
      <a href={rowData.url} target="_blank" rel="noopener noreferrer">
        {rowData.url}
      </a>
    );
  };

  const subGridTemplate = (rowData: any) => {
    console.log('subGridTemplate', rowData); 
    const subGridFields = Object.keys(rowData).filter(
      (key) => Array.isArray(rowData[key]) && rowData[key].length > 0
    );

    return (
      <>
        {subGridFields.map((field, index) => (
          <Accordion key={index} activeIndex={0}>
            <AccordionTab >
              <DataTable value={rowData[field]}>
                {Object.keys(rowData[field][0]).map((subField, subIndex) => (
                  <Column key={subIndex} field={subField} header={subField} />
                ))}
              </DataTable>
            </AccordionTab>
          </Accordion>
        ))}
      </>
    );
  };

  return (
    <div className="card">
      {data.length === 0 ? (
        <div
          className="p-text-center"
          style={{ textAlign: "center", fontSize: "1.2rem", color: "#999" }}
        >
          No se han encontrado registros para esa búsqueda.
        </div>
      ) : (
        <>
          <DataTable
            value={data}
            lazy
            scrollable
            scrollHeight="400px"
            style={{ minWidth: "50rem" }}
            rowExpansionTemplate={subGridTemplate}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            dataKey="id"
          >
            {hasSubGrid && <Column expander style={{ width: '3em' }} />}
            {columns.map((col, index) => (
              <Column
                key={index}
                field={col.field}
                header={col.header}
                body={col.field === "url" ? urlBodyTemplate : undefined}
              />
            ))}
            {isEditable && (
              <Column
                headerStyle={{ width: "5rem", textAlign: "center" }}
                bodyStyle={{ textAlign: "center", overflow: "visible" }}
                body={editBody}
              />
            )}
            {isEditable && (
              <Column
                headerStyle={{ width: "5rem", textAlign: "center" }}
                bodyStyle={{ textAlign: "center", overflow: "visible" }}
                body={deleteBody}
              />
            )}
          </DataTable>
          <EditTableComponent
            isDialogVisible={dialogVisible}
            closeDialog={() => setDialogVisible(false)}
            rowData={selectedRowData}
          />
        </>
      )}
    </div>
  );
};

export default TableComponent;
