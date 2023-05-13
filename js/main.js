import "/css/style.scss";
import Rectangle from "../Rectangle";

const rec1 = new Rectangle(document.body, {
  x: 50,
  y: 50,
  h: 100,
  w: 200,
  borderRadius: 10,
});

const rec2 = new Rectangle(document.body, {
  x: 50,
  y: 200,
  h: 150,
  w: 300,
  borderRadius: 20,
});

const rec3 = new Rectangle(document.body, {
  x: 50,
  y: 400,
  h: 200,
  w: 400,
  borderRadius: 30,
});
