module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('user',  {
        username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
    },
        password: {
        type: Datatypes.STRING,
        allowNull: false
    },

    })
    return User;
}