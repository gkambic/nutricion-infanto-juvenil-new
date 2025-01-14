// components/FilterComponent.tsx
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { FieldConfig } from '../lib/types';
import styles from '../styles/FilterComponent.module.css';

interface FilterComponentProps {
  fieldConfigs: FieldConfig[];
  //templateData: { [key: string]: any };
  onFilterChange: (filters: any) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ fieldConfigs, onFilterChange }) => {
  const [filters, setFilters] = useState<{ [key: string]: any }>(() => {
    const initialFilters: { [key: string]: any } = {};
    fieldConfigs.forEach(field => {
      initialFilters[field.field] = null;
    });
    return initialFilters;
  });
  
  const handleInputChange = (key: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value || null,
    }));
  };

  const handleDropdownChange = (key: string, value: any) => {
    console.log("key" , key);
    console.log("Value", value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value === true ? true : value === false ? false : value,
    }));
  };

  const handleButtonClick = () => {
    onFilterChange(filters);
  };

  return (
    <div >
    <div className="card">
      <h5>Filtros</h5>
      <div className="grid p-fluid mt-3">
      {fieldConfigs.map((fieldConfig, index) => (
            <div className="field col-12 md:col-4"  key={index}>
              <FloatLabel>
              {fieldConfig.type === "text" && (
                <>
                  <InputText
                    id={fieldConfig.field}
                    value={filters[fieldConfig.field]}
                    onChange={(e) =>
                      handleInputChange(fieldConfig.field, e.target.value)
                    }
                  />
                  <label htmlFor={fieldConfig.field}>{fieldConfig.label}</label>
                </>
              )}
              {fieldConfig.type === "dropdown" && fieldConfig.options && (
                <>
                  <Dropdown
                    id={fieldConfig.field}
                    value={filters[fieldConfig.field]}
                    options={fieldConfig.options}
                    showClear
                    onChange={(e) =>
                      handleDropdownChange(fieldConfig.field, e.value)
                    }
                    placeholder={`Select ${fieldConfig.label}`}
                  />
                  <label htmlFor={fieldConfig.field}>{fieldConfig.label}</label>
                </>
              )}
            </FloatLabel>

            </div>
          ))}

      </div>

    </div>

      <Button label="Aplicar Filtros" icon="pi pi-search" severity="secondary" onClick={handleButtonClick} />
    </div>
  );
};
/*     <div className={styles['filterContainer']}>
      <div className="p-grid p-fluid">
          {fieldConfigs.map((fieldConfig, index) => (
            <div className={`p-col-12 p-md-6 p-lg-4 ${styles['filter-item']}`}  key={index}>
              <FloatLabel>
              {fieldConfig.type === "text" && (
                <>
                  <InputText
                    id={fieldConfig.field}
                    value={filters[fieldConfig.field]}
                    onChange={(e) =>
                      handleInputChange(fieldConfig.field, e.target.value)
                    }
                  />
                  <label htmlFor={fieldConfig.field}>{fieldConfig.label}</label>
                </>
              )}
              {fieldConfig.type === "dropdown" && fieldConfig.options && (
                <>
                  <Dropdown
                    id={fieldConfig.field}
                    value={filters[fieldConfig.field]}
                    options={fieldConfig.options}
                    onChange={(e) =>
                      handleInputChange(fieldConfig.field, e.value)
                    }
                    placeholder={`Select ${fieldConfig.label}`}
                  />
                  <label htmlFor={fieldConfig.field}>{fieldConfig.label}</label>
                </>
              )}
            </FloatLabel>

            </div>
          ))}
        </div> */
export default FilterComponent;
