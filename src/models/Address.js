const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('address',{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: true,
            unique: true  
        },
        address_line: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },                     
    })
};