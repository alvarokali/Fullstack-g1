const queriesProduct = {
  createProduct: `
          INSERT INTO product_table
          VALUES ($1, $2, /* + columnas */)
          RETURNING *;
        `,

  getAllProducts: `
          SELECT * FROM product_table;
        `,

  getProductById: `
          SELECT * FROM product_table
          WHERE id = $1;
        `,

  updateProduct: `
          UPDATE product_table
          SET /* columnas = valores */
          WHERE id = $2
          RETURNING *;
        `,

  deleteProduct: `
          DELETE FROM product_table
          WHERE id = $1;
        `,
};

module.exports = queriesProduct;
