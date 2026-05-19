import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  titulo: String;
  subtitulo?: String;
  texto: String;
}

export function CardBody(props: CardBodyProps) {
  const { titulo, subtitulo, texto } = props;

  return (
    <>
      <h5 className="card-title">{titulo}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{subtitulo}</h6>
      <p className="card-text">{texto}</p>
    </>
  );
}

export default Card;
