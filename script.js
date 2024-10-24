var d = document.createElement("div");
document.body.appendChild(d);
d.style.width = "300px";
d.style.height = "500px";
d.style.position = "relative";
d.style.left = "500px";
d.style.border  = "2px solid gray";
d.style.boxShadow = "0px 0px 3px 0px";
d.style.borderRadius = "20px";

var e  = document.createElement("h3");
d.appendChild(e);
e.innerHTML = "DOM Practical";
e.style.position = "relative";
e.style.left ="85px";
e.style.top = "20px";
e.style.color = "black";

var img = document.createElement("img");
d.appendChild(img);
img.setAttribute("src", "desuung.png");
img.style.width = "80%";
img.style.position = "relative";
img.style.left ="25px";

var f = document.createElement("p");
d.appendChild(f);
f.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
f.style.textAlign = "justify";
f.style.padding = "10px";


var  g = document.createElement("button");
d.appendChild(g);
g.innerHTML =  "Click!";
g.style.position = "relative";
g.style.left = "125px";
g.style.bottom = "20px";






