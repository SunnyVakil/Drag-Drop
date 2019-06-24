const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//Loop throught Empties
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Evenet Listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Drag Functions
function dragStart() {
  
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  //fill field as define above
  this.append(fill);
}
