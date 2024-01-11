const queriesUser = {
  getUserByEmail: `
         SELECT 
            usuario_id,
            email,
             password,
             admin,
             asesor,
             contacto,
             delegacion
         FROM usuarios
         WHERE email = $1;`,

  getAllUsers: `SELECT * FROM usuarios;`,

  createUser: `
        INSERT INTO usuarios(email, password, admin, asesor, contacto, delegacion) 
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;`,

  updateUser: `
        UPDATE usuarios
        SET email = $1, password = $2, admin = $3, asesor = $4, contacto = $5, delegacion = $6
        WHERE usuario_id = $7
        RETURNING *;`,

  deleteUser: `DELETE FROM usuarios WHERE usuario_id = $1;`,
};

module.exports = queriesUser;
