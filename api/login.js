const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const db = client.db("mydb");
        const users = db.collection("users");

        const user = await users.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if (!user) {
            return res.json({
                success: false,
                message: "Email ou mot de passe incorrect"
            });
        }

        return res.json({
            success: true,
            message: "Connexion réussie",
            user: {
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Erreur serveur"
        });
    }
};