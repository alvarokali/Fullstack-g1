const queriesMonth = {
  createMonth: `
          INSERT INTO month_table
          VALUES ($1, $2, /* + columnas */)
          RETURNING *;
        `,

  getAllMonths: `
          SELECT * FROM month_table;
        `,

  getMonthById: `
          SELECT * FROM month_table
          WHERE id = $1;
        `,

  updateMonth: `
          UPDATE month_table
          SET /* columnas = valores */
          WHERE id = $2
          RETURNING *;
        `,

  deleteMonth: `
          DELETE FROM month_table
          WHERE id = $1;
        `,
};

module.exports = queriesMonth;
