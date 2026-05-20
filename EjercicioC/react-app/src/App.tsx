import "./App.css";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const list1 = ["Goku", "Vegeta", "Krillin"];
  const [data, setData] = useState(list1);

  const addMinion = () => setData([...data, "Minion"]);
  const deleteMinion = () => setData(data.slice(0, -1));

  const handleSelect = (element: String) => {
    console.log("imprimiendo", element);
  };

  const list2 = ["Naruto", "Jiraiya", "Pain"];

  const contenido = list2.length ? (
    <List data={list2} onSelect={handleSelect} />
  ) : (
    "Sin contenido para mostrar"
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => setIsLoading(true);

  return (
    <>
      <Card>
        <Button onClick={addMinion}>Agregar</Button>
        <Button onClick={deleteMinion}>Eliminar</Button>

        <List data={data} />
      </Card>

      <Card>
        <CardBody titulo={"Titulo"} subtitulo={"Subtitulo"} texto={"Texto"} />
        {contenido}
        <Button isLoading={isLoading} onClick={handleClick}>
          Click Aqui
        </Button>
      </Card>
    </>
  );
}

export default App;
