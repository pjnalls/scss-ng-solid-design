const createDivElement = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDivElement("canvas"),
    triangle = createDivElement("triangle"),
    square = createDivElement("square"),
    circle = createDivElement("circle"),
    overlay = createDivElement("overlay"),
    a = createDivElement("a"),
    solid = createDivElement("solid");

  a.textContent = "A°";
  solid.textContent = "S.O.L.I.D";

  canvas.appendChild(triangle);
  canvas.appendChild(square);
  canvas.appendChild(circle);
  canvas.appendChild(overlay);
  canvas.appendChild(a);
  canvas.appendChild(solid);

  root.appendChild(canvas);
};

main();
