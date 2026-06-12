import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        var client = await MongoClient.connect(process.env.MONGO_URL);
        var db = client.db("mydb");
        var users = db.collection("users");

        var user = await users.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if (!user) {
            return res.json({ success: false, message: "Email ou mot de passe incorrect" });
        }

        res.json({
            success: true,
            message: "Connexion réussie",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
}