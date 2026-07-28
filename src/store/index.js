import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",

  pointer: {
    x: 0,
    y: 0,
  },
});
export default state;
