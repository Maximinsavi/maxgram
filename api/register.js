import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    var client = await MongoClient.connect(process.env.MONGO_URL);
    var db = client.db("mydb");

    var users = db.collection("users");

    var existing = await users.findOne({ email: req.body.email });

    if (existing) {
        return res.json({ success: false, message: "Email déjà utilisé" });
    }

    await users.insertOne(req.body);

    res.json({ success: true, message: "User enregistré" });
}