import "./CardProducto.css";

const CardProducto = ({ imagen, precio, descripcion }) => {
  return (
    <div className="card">
      <div className="card-precio">
        <p>{"$" + (precio - 1)}</p>
      </div>
      <img className="card-img" src={imagen} />
      <p className="card-descripcion">{descripcion}</p>
    </div>
  );
};

export default CardProducto;