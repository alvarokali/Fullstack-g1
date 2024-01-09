const queriesSystem = {
  createSystem: `
      INSERT INTO system(name) 
      VALUES ($1, $2)
      RETURNING *;
    `,

  getSystemAll: `
      SELECT * FROM system;
    `,

  getSystemById: `
      SELECT * FROM system
      WHERE id = $1;
    `,

  updateSystem: `
      UPDATE system
      SET nombre = $1
      WHERE id = $2
      RETURNING *;
    `,

  deleteSystem: `
      DELETE FROM system
      WHERE id = $1;
    `,
};

module.exports = queriesSystem;
