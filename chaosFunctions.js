const canvas = document.getElementById("miCanvas");
const context = canvas.getContext("2d");
context.translate(300, 300);

var interval;

let dt = 0.01;
let angle = 0;

let x = 0;
let y = 0;
let z = 0;

var dx;
var dy;
var dz;

function resetVariables(x1, y1, z1) {
  x = x1;
  y = y1;
  z = z1;
}

function rotate(array) {
  const arrayRotated = new Array();
  array.forEach(function (entry) {
    let x = entry[0];
    let y = entry[1];
    let z = entry[2];

    x = x * Math.cos(angle);
    y = y * Math.sin(angle);

    arrayRotated.push([x - y, -z]);
  });
  return arrayRotated;
}

function lorenz() {
  clearInterval(interval);
  context.clearRect(-300, -300, 600, 600);

  resetVariables(0.1, 0, 0.1);

  let points = new Array();
  let vector = [x, y, z];
  points.splice(0, 1, vector);

  let sigma = 10;
  let rho = 28;
  let beta = 8 / 3;
  let i = 1;

  interval = setInterval(function () {
    context.clearRect(-300, -300, canvas.width, canvas.height);
      
    //Canvas
    const degradado = context.createLinearGradient(-300, -300, 600, 600);
    degradado.addColorStop(0, "red");
    degradado.addColorStop(0.4, "orange");
    degradado.addColorStop(0.7, "yellow");

    context.strokeStyle = degradado;

    if (i < 3000) {
      // //Differential Equations
      dx = sigma * (y - x) * dt;
      x += dx;

      dy = (x * (rho - z) - y) * dt;
      y += dy;

      dz = (x * y - beta * z) * dt;
      z += dz;

      let point = [x, y, z];
      points.push(point);
    }

    const rotatedPoints = rotate(points);

    context.beginPath();
    rotatedPoints.forEach((p) => context.lineTo(p[0] * 10, p[1] * 10 + 230));
    context.stroke();

    angle += 0.01;
    i += 1; //
  }, 10);
}

function halvorsen() {
  clearInterval(interval);
  context.clearRect(-300, -300, 600, 600);

  resetVariables(0.1, 0, 1);

  let vector = [x, y, z];
  let points = new Array();
  points.splice(0, 1, vector);

  let a = 1.89;
  let i = 1;

  interval = setInterval(function () {
    context.clearRect(-300, -300, 600, 600);

    if (i < 3000) {
      // //Differential Equations
      dx = (-a * x - 4 * y - 4 * z - Math.pow(y, 2)) * dt;
      x += dx;

      dy = (-a * y - 4 * z - 4 * x - Math.pow(z, 2)) * dt;
      y += dy;

      dz = (-a * z - 4 * x - 4 * y - Math.pow(x, 2)) * dt;
      z += dz;

      let point = [x, y, z];
      points.push(point);
    }

    //Canvas
    const degradado = context.createLinearGradient(0, 0, 500, 500);
    degradado.addColorStop(0, "#007E68");
    degradado.addColorStop(0.6, "#00B49B");
    degradado.addColorStop(0.8, "#39EDD1");

    context.strokeStyle = degradado;

    let rotatedPoints = rotate(points);

    context.beginPath();
    rotatedPoints.forEach((p) => context.lineTo(p[0] * 20, p[1] * 20 - 30));
    context.stroke();

    angle += 0.01;
    i++;
  }, 10);
}

function aizawa() {
  clearInterval(interval);
  context.clearRect(-300, -300, 600, 600);

  resetVariables(0.1, 0, 1);

  let vector = [x, y, z];
  let points = new Array();
  points.splice(0, 1, vector);

  let a = 0.95;
  let b = 0.7;
  let c = 0.6;
  let d = 3.5;
  let e = 0.25;
  let f = 0.1;
  let i = 1;

  interval = setInterval(function () {
    context.clearRect(-300, -300, 600, 600);

    if (i < 3000) {
      // //Differential Equations
      dx = ((z - b) * x - d * y) * dt;
      x += dx;

      dy = (d * x + (z - b) * y) * dt;
      y += dy;

      dz =
        (c +
          a * z -
          Math.pow(z, 3) / 3 -
          (Math.pow(x, 2) + Math.pow(y, 2)) * (1 + e * z) +
          f * z * Math.pow(x, 3)) *
        dt;
      z += dz;

      let point = [x, y, z];
      points.push(point);
    }

    //Canvas
    const degradado = context.createLinearGradient(0, 0, 500, 500);
    degradado.addColorStop(0, "#296073");
    degradado.addColorStop(0.6, "#3596B5");
    degradado.addColorStop(0.8, "#ADC5CF");

    context.strokeStyle = degradado;

    let rotatedPoints = rotate(points);

    context.beginPath();
    rotatedPoints.forEach((p) => context.lineTo(p[0] * 180, p[1] * 180 + 150));
    context.stroke();

    angle += 0.01;
    i++;
  }, 10);
}

function chen() {
  clearInterval(interval);
  context.clearRect(-300, -300, 600, 600);

  resetVariables(0.1, 0, 1);

  let vector = [x, y, z];
  let points = new Array();
  points.splice(0, 1, vector);

  let sigma = 5;
  let beta = -10;
  let delta = -0.38;
  let i = 1;

  interval = setInterval(function () {
    context.clearRect(-300, -300, 600, 600);

    if (i < 3000) {
      // //Differential Equations
      dx = (sigma * x - y * z) * dt;
      x += dx;

      dy = (beta * y + x * z) * dt;
      y += dy;

      dz = (delta * z + (x * y) / 3) * dt;
      z += dz;

      let point = [x, y, z];
      points.push(point);
    }

    //Canvas
    const degradado = context.createLinearGradient(0, 0, 500, 500);
    degradado.addColorStop(0, "#B1002E");
    degradado.addColorStop(0.6, "#FD4D65");
    degradado.addColorStop(0.8, "#E73654");

    context.strokeStyle = degradado;

    let rotatedPoints = rotate(points);

    context.beginPath();
    rotatedPoints.forEach((p) => context.lineTo(p[0] * 7, p[1] * 7 + 100));
    // points.forEach(p => context.lineTo((p[1]) * 7, (p[2]) * 7 ))
    context.stroke();

    angle += 0.01;
    i++;
  }, 10);
}

function dadras() {
  clearInterval(interval);
  context.clearRect(-300, -300, 600, 600);

  resetVariables(0.1, 0, 1);

  let vector = [x, y, z];
  let points = new Array();
  points.splice(0, 1, vector);

  let a = 0.95;
  let b = 7.91;
  let f = 4.83;
  let g = 4.66;
  let i = 1;

  interval = setInterval(function () {
    context.clearRect(-300, -300, 600, 600);

    if (i < 1000) {
      // //Differential Equations
      dx = (-(a * x) - Math.pow(y, 2) - Math.pow(z, 2) + a * f) * dt;
      x += dx;

      dy = (-y + x * y - b * x * z + g) * dt;
      y += dy;

      dz = (-z + b * x * y + x * z) * dt;
      z += dz;

      let point = [x, y, z];
      points.push(point);
    }

    //Canvas
    const degradado = context.createLinearGradient(0, 0, 500, 500);
    degradado.addColorStop(0, "#1AEE64");
    degradado.addColorStop(0.6, "#00B77C");
    degradado.addColorStop(0.8, "#00CDFF");

    context.strokeStyle = degradado;

    let rotatedPoints = rotate(points);

    context.beginPath();
    rotatedPoints.forEach((p) => context.lineTo(p[0] * 80, p[1] * 80));
    // points.forEach(p => context.lineTo((p[1]) * 250, (p[2]) * 250 ))
    context.stroke();

    angle += 0.01;
    i++;
  }, 10);
}