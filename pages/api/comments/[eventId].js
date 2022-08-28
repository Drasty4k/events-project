function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.methods === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.methods === "GET") {
    const dummyList = [
      { id: "c1", name: "Dragos", text: "A first comment!" },
      { id: "c2", name: "Max", text: "A second comment!" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
