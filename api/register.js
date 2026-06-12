const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const db = client.db("mydb");
        const users = db.collection("users");

        const exists = await users.findOne({ email: req.body.email });

        if (exists) {
            return res.json({
                success: false,
                message: "Email déjà utilisé"
            });
        }

        await users.insertOne({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        return res.json({
            success: true,
            message: "Compte créé"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Erreur serveur"
        });
    }
};