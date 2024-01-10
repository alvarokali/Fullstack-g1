const queriesCIA = {
  createCIA: `
          INSERT INTO cia_table
          VALUES ($1, $2, /* otras columnas */)
          RETURNING *;
        `,

  getAllCIA: `
          SELECT * FROM cia_table;
        `,

  getCIAById: `
          SELECT * FROM cia_table
          WHERE id = $1;
        `,

  updateCIA: `
          UPDATE cia_table
          SET /* columnas = valores */
          WHERE id = $2
          RETURNING *;
        `,

  deleteCIA: `
          DELETE FROM cia_table
          WHERE id = $1;
        `,
};

module.exports = queriesCIA;
