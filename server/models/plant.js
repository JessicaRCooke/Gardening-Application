module.exports = (sequelize, DataTypes) => {
    const Plant = sequelize.define('plant', {
        plantname: {
            type: DataTypes.STRING,
            allowNull: false
    },
        dateplanted: {
            type: DataTypes.STRING,
            allowNull: false
    }, 
         where: {
             type: DataTypes.STRING,
            allowNull: false
    }, 
         sun: {
             type: DataTypes.STRING,
             allowNull: false
    },
        alive: {
            type: DataTypes.STRING,
            allowNull: false
    },
        soil: {
            type: DataTypes.STRING,
            allowNull: false
    },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
    },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
})
return Plant;
}

