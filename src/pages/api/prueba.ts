import { NextApiRequest, NextApiResponse } from 'next';
import pool from "../../lib/database";
import { RowDataPacket } from "mysql2";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { procedureName, procedureParams } = req.body;

      if (!procedureName) {
        return res.status(400).json({ error: "Procedure name is required" });
      }

      console.log('procedureParams', procedureParams);
      // Construir la llamada dinámica
      const query = `CALL ${procedureName}(${procedureParams?.map(() => '?').join(', ') || ''})`;
      
      const params = procedureParams || [];

      const [rows] = await pool.execute<RowDataPacket[][]>(query, params);
      console.log(rows);

      // Retornar el primer resultado
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error("Error executing stored procedure:", error);
      res.status(500).json({ error: "Error executing stored procedure" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
