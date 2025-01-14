// types.ts
export interface DataItem {
    [key: string]: any; // Permite cualquier estructura de objeto
  }
  
export  interface FieldConfig {
  field: string;
  label: string;
  type: string; //'text' | 'dropdown';
  options?: { label: string; value: any }[]; // Only for dropdown
}