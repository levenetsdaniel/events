export default function logIn(req, res) {
    try {
        const { email, password } = req.body



        res.status(200).json({})
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}