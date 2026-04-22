function BoxColor({ r, g, b }) {
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "200px",
    height: "100px",
  };

  return (
    <div style={style}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
