const queriesRates = {
  createRate: `
        INSERT INTO rates
        VALUES ($1, $2)
        RETURNING *;
      `,

  getAllRates: `
        SELECT * FROM rates;
      `,

  getRateById: `
        SELECT * FROM rates
        WHERE id = $1;
      `,

  updateRate: `
        UPDATE rates
        SET /*dato*/ = $1
        WHERE id = $2
        RETURNING *;
      `,

  deleteRate: `
        DELETE FROM rates
        WHERE id = $1;
      `,
};

module.exports = queriesRates;
