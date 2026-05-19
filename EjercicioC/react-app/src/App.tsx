import "./App.css";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Naruto", "Pain"];
  return (
    <Card>
      <CardBody titulo={"Titulo"} subtitulo={"Subtitulo"} texto={"Texto"} />

      <List data={list} />
    </Card>
  );
}

export default App;
