const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const User = sequelize.define("user", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false
});
const Event = sequelize.define("event", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE,
    },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false
});
User.belongsToMany(Event, { through: 'UserToEvent' });
Event.belongsToMany(User, { through: 'UserToEvent' });
module.exports = { User, Event }
