const { setUpServer } = require("./setupServer");

const PORT: number = 3001;
const app = setUpServer();

app.listen(PORT, () => {
  console.log(`The server is listening @ http://localhost:${PORT}`);
});

