const {User, Event} = require('./db.js')
async function getEvents (){
    let res = await Event.findAll({
        raw: true,
    })
    return res
}
export {getEvents}