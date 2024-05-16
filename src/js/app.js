import "../css/style.css";
import icon from "../img/icon.png";
import icon_svg from "../img/icon.svg";
import favicon from "../img/favicon.ico";

let linkTag1 = document.createElement("link");
linkTag1.rel="icon";
linkTag1.href=favicon;
linkTag1.sizes="any";

let linkTag2 = document.createElement("link");
linkTag2.rel="icon";
linkTag2.href=icon_svg;
linkTag2.sizes="image/svg+xml";

let linkTag3 = document.createElement("link");
linkTag3.rel="apple-touch-icon";
linkTag3.href=icon;

const headTag = document.getElementsByTagName('head')[0];
headTag.appendChild(linkTag1);
headTag.appendChild(linkTag2);
headTag.appendChild(linkTag3);

console.log("test")
