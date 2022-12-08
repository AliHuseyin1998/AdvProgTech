import canvasToSvg from "canvas-to-svg";

//Create a new mock canvas context. Pass in your desired width and height for your svg document.
const ctx = new canvasToSvg(500, 500);

//draw your canvas like you would normally
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);
//etc...

//serialize your SVG
const mySerializedSVG = ctx.getSerializedSvg(); //true here, if you need to convert named to numbered entities.

//If you really need to you can access the shadow inline SVG created by calling:
const svg = ctx.getSvg();