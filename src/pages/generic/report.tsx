import React from "react";
import withAuth from "../../lib/withAuth";
import GenericReport from "../../components/GenericReportComponent";
import { GetByFilter } from '../../services/genericService';

const fieldConfigs = [
    { field: 'title', label: 'Title', type: 'text' },
    { field: 'url', label: 'URL', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' },
    { field: 'examenId', label: 'Examen', type: 'dropdown', options: [] },
];

const reportGeneric: React.FC = () => (
    <GenericReport
      title="Consulta"
      //fieldConfigs={fieldConfigs}
      getByFilter={GetByFilter}
    />
  );

export default reportGeneric;
//export default withAuth(ViewSection1);
