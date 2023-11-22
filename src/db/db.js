const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'evnts',
    'root',
    '12345',
    {
        host: 'localhost',
        dialect: 'mysql',
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
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false
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
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE,
    },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false
});
User.belongsToMany(Event, { through: 'UserToEvent' });
Event.belongsToMany(User, { through: 'UserToEvent' });
module.exports = { User, Event}
//sequelize.sync({force: true})