import express from "express";
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.status(200).send("Hello Anil ");
});
app.use(express.json());
let teaData = [];
let nextId = 1;
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(200).send("Message is sent");
});
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});
//getting one data
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea Not found");
  }
  console.log(tea);
  res.status(200).send(tea);
});
//update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  const { name, price } = req.body;
  (tea.name = name), (tea.price = price);
  res.status(200).send(tea);
});
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => (t.id = n == parseInt(req.params.id)));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  return res.status(200).send(newTea);
});

app.listen(port, () => {
  console.log(`Server is listening to the ${port}....`);
});
