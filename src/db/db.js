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
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
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
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
const UserEvet = sequelize.define("user_event", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    EventId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    }
});
User.belongsToMany(Event, { through: UserEvet });
Event.belongsToMany(User, { through: UserEvet });
module.exports = { User, Event, UserEvet}