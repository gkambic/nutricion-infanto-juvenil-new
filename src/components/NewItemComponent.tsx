import { Button } from "primereact/button";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FieldConfig } from "../lib/types";
import { FileUpload } from 'primereact/fileupload';

interface FilterComponentProps {
  header: string;
  fieldConfigs: FieldConfig[];
  onSubmit: (data: { [key: string]: any }) => void;
}

const NewItemComponent: React.FC<FilterComponentProps> = ({
  header,
  fieldConfigs,
  onSubmit,
}) => {
  const [visibleAlta, setVisibleAlta] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ [key: string]: any }>(() => {
    const initialFormData: { [key: string]: any } = {};
    fieldConfigs.forEach(field => {
      initialFormData[field.field] = '';
    });
    return initialFormData;
  });

  const handleInputChange = (key: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleAddItemClick = () => {
    setFormData(() => {
      const resetFormData: { [key: string]: any } = {};
      fieldConfigs.forEach(field => {
        resetFormData[field.field] = '';
      });
      return resetFormData;
    });
    setVisibleAlta(true);
  };

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        severity="success"
        onClick={() => {
          setVisibleAlta(false);
          onSubmit(formData);
        }}
        autoFocus
      />
    </div>
  );

  return (
    <div>
      <div className="p-mb-3">
        <Button
          label="Nuevo"
          icon="pi pi-plus"
          severity="secondary"
          onClick={handleAddItemClick}
        />
      </div>
      <Dialog
        header={header}
        footer={footerContent}
        visible={visibleAlta}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visibleAlta) return;
          setVisibleAlta(false);
        }}
      >
        <div className="p-fluid">
          {fieldConfigs.map((fieldConfig, index) => (
            <div className="p-field p-grid" key={index}>
              <label
                htmlFor={fieldConfig.field}
                className="p-col-fixed"
                style={{ width: "100px" }}
              >
                {fieldConfig.label}
              </label>
              <div className="p-col">
                {fieldConfig.type === "text" && (
                  <InputText
                    id={fieldConfig.field}
                    value={formData[fieldConfig.field]}
                    onChange={(e) =>
                      handleInputChange(fieldConfig.field, e.target.value)
                    }
                  />
                )}
                {fieldConfig.type === "dropdown" && fieldConfig.options && (
                  <Dropdown
                    editable 
                    id={fieldConfig.field}
                    value={formData[fieldConfig.field]}
                    options={fieldConfig.options}
                    onChange={(e) =>
                      handleInputChange(fieldConfig.field, e.value)
                    }
                    placeholder={`Select ${fieldConfig.label}`}
                  />
                )}
                {fieldConfig.type === "image" && (
                  <FileUpload
                    name="demo[]"
                    url={'/api/upload'}
                    multiple
                    accept="image/*"
                    maxFileSize={1000000}
                    emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
};

export default NewItemComponent;
