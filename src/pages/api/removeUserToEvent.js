import { removeUserToEvent } from "../../db/dbFunctions";

export default async function favorite(req, res) {
    try {
        const { user } = req.body
        removeUserToEvent(user)
        res.status(200).json({})
    }
    catch {
        res.status(500).json({ message: err.message })
    }
}