const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'mysql',
    '__root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
const User = sequelize.define("user", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
const Event = sequelize.define("event", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    link: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
module.exports = { User, Event }