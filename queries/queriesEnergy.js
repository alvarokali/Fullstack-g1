const queriesEnergy = {
  createEnergy: `
          INSERT INTO energy_table
          VALUES ($1, $2, /* + columnas */)
          RETURNING *;
        `,

  getAllEnergy: `
          SELECT * FROM energy_table;
        `,

  getEnergyById: `
          SELECT * FROM energy_table
          WHERE id = $1;
        `,

  updateEnergy: `
          UPDATE energy_table
          SET /* columnas = valores */
          WHERE id = $2
          RETURNING *;
        `,

  deleteEnergy: `
          DELETE FROM energy_table
          WHERE id = $1;
        `,
};

module.exports = queriesEnergy;
