const { User, Event, UserToEvent } = require('./db.js')

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

async function addUserToEvent(userId, eventId) {
    UserToEvent.create({
        userId: userId,
        eventId: eventId
    })
}

async function removeUserToEvent(userId) {
    UserToEvent.destroy({
        where: { userId: userId }
    })
}

async function isLiked(eventId, userId) {
    const like = UserToEvent.findAll(({
        where: { eventId: eventId, userId: userId }
    }))
    if (like) {
        return true
    }
    return false
}

export { getEvents, addUser, hasLogin, findLogin, addUserToEvent, removeUserToEvent, isLiked }