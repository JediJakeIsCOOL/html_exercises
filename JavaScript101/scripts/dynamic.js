(function () {

var body = document.getElementsByTagName('body')[0];
body.style.fontFamily= "Lucia Grande, sans-serif";
var divOne = document.createElement('div')
divOne.style.backgroundColor = "#42a4f4";
divOne.style.color = "White";
divOne.style.width = "95%"
divOne.style.height = "10%";
divOne.style.marginLeft = "2.5%";
divOne.style.marginRight = "2.5%";
divOne.style.display = "inline block";
divOne.style.position = "absolute";
divOne.style.top = "2%"
document.body.appendChild(divOne);

var parDivOne = document.createElement('h1')
parDivOne.textContent = "HighOnCoding";
parDivOne.style.color = "White";
parDivOne.style.display = "inline block";
parDivOne.style.float = "left";
parDivOne.style.marginLeft = "2%"
divOne.appendChild(parDivOne);

var parDivTwo = document.createElement('p')
parDivTwo.innerHTML = "<b>Home</b>";
parDivTwo.style.color = "White";
parDivTwo.style.display = "inline-block"
parDivTwo.style.marginLeft= "5%"
parDivTwo.style.marginRight=  "5%"
parDivTwo.style.marginTop= "3.1%"

divOne.appendChild(parDivTwo);

var parDiv3 = document.createElement('p')
parDiv3.innerHTML = "<small>Categories</small>";
parDiv3.style.color = "White";
parDiv3.style.display ="inline-block"
divOne.appendChild(parDiv3);

var contentHeader = document.createElement('div')
contentHeader.style.backgroundColor ="#D8D9DC"
contentHeader.style.width = "80%"
contentHeader.style.height = "20%"
document.body.appendChild(contentHeader)
contentHeader.style.color = "#494E54"
contentHeader.style.marginTop = "7%";
contentHeader.style.position = "absolute";
contentHeader.style.top = "7%";
contentHeader.style.left = "10%";
contentHeader.style.overflow = "scroll"

var contentHeaderTitle = document.createElement('h1')
contentHeaderTitle.textContent = "Curse of the Current Reviews"
contentHeader.appendChild(contentHeaderTitle)
contentHeaderTitle.style.marginLeft = "2%"

var contentHeaderPara = document.createElement('p')
contentHeaderPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
contentHeader.appendChild(contentHeaderPara)
contentHeaderPara.style.marginLeft = "2%"

var secondContentHeader = document.createElement('div')
// secondContentHeader.style.marginTop ="7%"
// secondContentHeader.style.backgroundColor = "grey"
document.body.appendChild(secondContentHeader)
secondContentHeader.style.position = "absolute"
secondContentHeader.style.top = "40%"
secondContentHeader.style.left = "10%"
secondContentHeader.style.right = "10%"

var secondContentHeaderTitle = document.createElement('h2')
secondContentHeaderTitle.textContent = "Hello Watchkit"
secondContentHeaderTitle.style.color = "#42a4f4"
secondContentHeader.appendChild(secondContentHeaderTitle)

var secondContentHeaderPara = document.createElement('p')
secondContentHeaderPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
secondContentHeader.appendChild(secondContentHeaderPara)

var commentsContainer = document.createElement("div")
commentsContainer.style.backgroundColor = "Orange"
document.body.appendChild(commentsContainer)
commentsContainer.style.position ="absolute"
commentsContainer.style.marginTop = "46%"
commentsContainer.style.marginLeft = "10%"
commentsContainer.style.marginRight = "10%"



var comments = document.createElement("span")
comments.textContent ="12 comments"
commentsContainer.appendChild(comments)
comments.style.color = "white"

var comments2 = document.createElement("span")
comments.textContent ="124 likes"
commentsContainer.appendChild(comments2)
comments2.style.color = "White"











})();