import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
//import 'primeflex/primeflex.css';

interface TableComponentProps {
  isDialogVisible: boolean;
  closeDialog: () => void;
  rowData: any;
}

const FlexibleScrollDemo: React.FC<TableComponentProps> = ({
  isDialogVisible,
  closeDialog,
  rowData,
}) => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (rowData) {
      setFormData(rowData);
    }
  }, [rowData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dialogFooterTemplate = () => {
    return <Button label="Ok" icon="pi pi-check" severity="success" onClick={closeDialog} />;
  };

  return (
    <div className="card">
      <Dialog
        header="Edicion"
        visible={isDialogVisible}
        style={{ width: "75vw" }}
        maximizable
        modal
        contentStyle={{ height: "300px" }}
        onHide={closeDialog}
        footer={dialogFooterTemplate}
      >
        <form className="p-fluid p-grid">
          {rowData &&
            Object.keys(rowData).map((key) => (
              <div key={key} className="p-field p-col-12 p-md-6">
                <label htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <InputText
                  id={key}
                  name={key}
                  value={formData[key] || ""}
                  onChange={handleChange}
                />

                {/* <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key] || ''}
                    onChange={handleChange}
                    className="p-inputtext p-component"
                    /> */}
              </div>
            ))}
        </form>
        {/* <DataTable value={data} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                    ))}
                </DataTable> */}
      </Dialog>
    </div>
  );
};
export default FlexibleScrollDemo;
