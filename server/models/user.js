module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('user',  {
        username: {
        type: Datatypes.STRING,
        allowNull: false
    },
        password: {
        type: Datatypes.STRING,
        allowNull: false
    },

    })
    return User;
}