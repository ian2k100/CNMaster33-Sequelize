const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Film = sequelize.define('Netflix', {
    name: {
        type : DataTypes.STRING,
        allowNullValues : false,
    },
    actor: {
        type : DataTypes.STRING,
        allowNullValues : false,
    }
})

module.exports = Film;
