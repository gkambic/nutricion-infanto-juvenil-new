import React from "react";
import withAuth from "../../lib/withAuth";
import GenericReport from "../../components/GenericReportComponent";
import { GetUsuarioByFilter } from '../../services/usuarioService';

const fieldConfigs = [
  { field: 'title', label: 'Title', type: 'text' },
    { field: 'url', label: 'URL', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' },
    { field: 'examenId', label: 'Examen', type: 'dropdown', options: [] },
];

const reportUsuario: React.FC = () => (
    <GenericReport
      title="Consulta de Usuarios"
      fieldConfigs={fieldConfigs}
      getByFilter={GetUsuarioByFilter}
    />
  );

export default reportUsuario;
//export default withAuth(ViewSection1);
