import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [index, setIndex] = useState(0); //hook
  const handleClick = (e: number) => setIndex(e);
  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
          key={element}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
