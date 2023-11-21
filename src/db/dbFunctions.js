const {User, Event, UserEvet} = require('./db.js')
async function getEvents (){
    let res = await Event.findAll({
        raw: true,
    })
    return res
}
module.exports = {getEvents}