import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: String) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0); //hook

  const handleClick = (i: number, element: String) => {
    setIndex(i);
    onSelect?.(element);
  };
  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i, element)}
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
