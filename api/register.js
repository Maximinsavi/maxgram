import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        var client = await MongoClient.connect(process.env.MONGO_URL);
        var db = client.db("mydb");
        var users = db.collection("users");

        var existingUser = await users.findOne({ email: req.body.email });

        if (existingUser) {
            return res.json({ success: false, message: "Email déjà utilisé" });
        }

        await users.insertOne({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        res.json({ success: true, message: "Compte créé avec succès" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
}