const filterList = document.querySelector(".filter");
const filterButtons = filterList.querySelectorAll(".filter-btn");
const conferences = document.querySelectorAll(".conference");

let conferenceIndex = 0;

conferences.forEach((conference) => {
  conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
});

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let confCategory = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterEvents(filter) {
  conferences.forEach((conference) => {
    // get each conferences category
    let eventCategory = conference.getAttribute("data-category");

    // check if that category matches with the filter
    if (filter === "all" || filter === eventCategory) {
      conference.removeAttribute("hidden");
    } else {
      conference.setAttribute("hidden", "");
    }
  });
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



function updateTextElement() {
    const textarea = document.getElementById("test");
    textarea.textContent = "זה נסיון";
}
function appendListElement() {
    const headerlist = document.querySelector(".header__ul");
    const newelement = document.createElement("li");  // <li></li>
    newelement.textContent = "new element";  // <li>{data}</li>
    newlist.append(newelement);
}
function updateListElement(index) {
    const headerlist = document.querySelector(".header__ul");
    const header = headerlist.children[index];
    header.textContent = "index " + index;
}
function updateGeneralListElement(elementid, index, newproduct) {
    const headerlist = document.querySelector(elementid);
    const header = headerlist.children[index];
    header.textContent = newproduct;
}
function removeListElement() {
    const headerlist = document.querySelector(".header__ul");
    const header = headerlist.children[1];
    header.removeChild();
}
function replaceElement(elementid, newelementnid, content) {
    const replaceBtn = document.getElementById(elementid);
    replaceBtn.addEventListener("click", function () {
        const replacement = document.getElementById(elementid);
        const newelement = document.createElement(newelementnid);
        newelement.textContent = content;
        replacement.replaceWith(newelement);
    })
}

