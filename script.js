let caption = document.getElementById("caption");
let chname = document.getElementById("chname");
let views = document.getElementById("views");
let time = document.getElementById("time");
let dur = document.getElementById("dur");

let a=prompt("Enter the Video Title")
let b=prompt("Enter the Channel Name")
let c=prompt("Enter the Number of Views")
let d=prompt("Enter the Number of months ago the video was uploaded")
let e=prompt("Enter the Video Duration in XX:YY format")

function createCard(a, b, c, d, e) {
  caption.innerHTML = a;
  chname.innerHTML = b;
  views.innerHTML = c+ " views";
  time.innerHTML = d + " months ago";
  dur.innerHTML = e;
}
createCard(a,b,c,d,e)