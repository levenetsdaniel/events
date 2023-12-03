const { User, Event } = require('./db.js')

async function getEvents() {
    let res = await Event.findAll({
        raw: true,
    })
    return res
}

async function addUser(login, password, name) {
    User.create({
        login: login,
        password: password,
        name: name
    })
}

async function hasLogin(login) {
    const logins = await User.findAll({
        where: {
            login
        }
    })

    return logins.length != 0

}

async function findLogin(login) {
    const logins = await User.findOne({
        where: {
            login
        }
    })

    return logins
}

export { getEvents, addUser, hasLogin, findLogin }