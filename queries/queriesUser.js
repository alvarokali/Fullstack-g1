const queriesUser = {
    getUserById: `
        SELECT 
            id_user,
            email,
            password
        FROM users
        WHERE id_user = $1;`,
                        
    getAllUsers: `SELECT * FROM users;`,

    createUser: `INSERT INTO users(email, password) 
                    VALUES ($1, $2)
                    RETURNING *`,

    updateUser:  `UPDATE users
                    SET email = $1, admin = $2
                    WHERE id_user = $3;
                    RETURNING *`,

    deleteUser: `DELETE FROM users
                    WHERE id_user = $1;`
}
module.exports = queriesUser;
