import React from "react";


const ConnectPage = () => {
return (
  <>


<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </head>

  <body>
  <title>Profile Page</title>
  <div id="top"></div>
    <p></p>


<div style = {{marginLeft: 85 + 'em'}}>
  <img src = "profilepic.png" alt = "Profile Picture" width = "40" height = "40"></img>
</div>
    <div style = {{marginLeft: 32 + 'em'}}>
<div class = "row">
  <div class = "column1">
    <a style = {{color:'black'}} href = "/">Connect</a>
  </div>
  <div class = "column1">
    <div style = {{marginLeft: 10 + 'em'}}>
    <a style = {{color:'black'}} href = "explore.js">Explore</a>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: 10 + 'em'}}>
    <a style = {{color:'black'}} href = "profile.js">My Profile</a>
  </div>
</div>

</div>
</div>


<p></p>
<div style = {{marginLeft: 84 + 'em'}}>
  <div style = {{fontSize: 1.5 + 'em'}}>
  <p style = {{color:'black'}}>Connections</p>
</div>
</div>

<div style = {{marginLeft: 73.5 + 'em'}}>
<div class = "rcorners1">
<div id = "profile1" class = "rcorners2" onClick = {btn1}>
<div class = "row">
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <b>John Doe</b>
  </div>
  </div>
</div>
</div>
<p></p>
<div id = "profile2" class = "rcorners2" onClick = {btn2}>
<div class = "row">
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <b>John Doe2</b>
  </div>
  </div>
</div>
</div>
<p></p>
<div id = "profile3" class = "rcorners2" onClick = {btn3}>
<div class = "row">
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <b>John Doe3</b>
  </div>
  </div>
</div>
</div>
<p></p>
<div id = "profile4" class = "rcorners2" onClick = {btn4}>
<div class = "row">
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <b>John Doe4</b>
  </div>
  </div>
</div>
</div>
<p></p>
<div id = "profile5" class = "rcorners2" onClick = {btn5}>
<div class = "row">
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <b>John Doe5</b>
  </div>
  </div>
</div>
</div>
<p></p>
<div id = "profile6" class = "rcorners2" onClick = {btn6}>
<div class = "row">
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
  </div>
</div>
  <div class = "column1">
    <div style = {{marginLeft: .75 + 'em'}}>
    <b>John Doe6</b>
  </div>
  </div>
</div>
</div>
</div>
</div>


<div style = {{marginLeft: .5 + 'em'}}>
<div class = "bottom">
<a href="#top">Back to top</a>
</div>
</div>




<div id = "myModal" class="modal">


<div class="modalContent">
<div style = {{marginLeft: 50 + 'em'}}>
<div id = "close1" class="close" onClick = {spn1}>&times;</div>
</div>
<p>Chatting with John Doe</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style = {{marginLeft: 56 + 'em'}}>
<button id = "button1id" class="button1" style={{fontWeight:'bold'}} onClick = {btn7}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal" class = "modalContract">
<div class="modalContractContent">
<div style = {{marginLeft: 25 + 'em'}}>
<div id = "close7" class="close" onClick = {spn7}>&times;</div>
</div>
<p>Let's Collaborate</p>
<div class = "row">
<div class = "column1">
<div style = {{marginLeft: .8 + 'em'}} class = "modalContractDetailContent">
<p>Contract Details</p>
<form action="/action_page.php">
<textarea name="message" rows="2" cols="30"></textarea>
<br></br>
</form>
</div>
</div>
<div class = "column1">
<p></p>
<p></p>

<p style = {{marginLeft: 3 + 'em'}}>Add image</p>
</div>
</div>

<p></p>

<div class = "row">
<div class = "column1">
<div style = {{marginLeft: 7 + 'em'}}>
<button class="button1" style={{fontWeight:'bold'}}>Add money</button>
</div>
</div>
<div class = "column1">
<div style = {{marginLeft: 3 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Send contract</button>
</div>
</div>
</div>
</div>
</div>

<div id="myModal2" class="modal">

<div class="modalContent">
<div style = {{marginLeft: 50 + 'em'}}>
<div id = "close2" class="close" onClick = {spn2}>&times;</div>
</div>
<p>Chatting with John Doe2</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style = {{marginLeft: 56 + 'em'}}>
<button id = "button2id" class="button1" style={{fontWeight: 'bold'}} onClick = {btn8}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal2" class = "modalContract">
<div class="modalContractContent">
<div style = {{marginLeft: 25 + 'em'}}>
<div id = "close8" class="close" onClick = {spn8}>&times;</div>
</div>
<p>Let's Collaborate</p>
<div class = "row">
<div class = "column1">
<div style = {{marginLeft: .8 + 'em'}} class = "modalContractDetailContent">
<p>Contract Details</p>
<form action="/action_page.php">
<textarea name="message" rows="2" cols="30"></textarea>
<br></br>
</form>
</div>
</div>
<div class = "column1">
<p></p>
<p></p>

<p style = {{marginLeft: 3 + 'em'}}>Add image</p>
</div>
</div>

<p></p>

<div class = "row">
<div class = "column1">
<div style = {{marginLeft: 7 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Add money</button>
</div>
</div>
<div class = "column1">
<div style = {{marginLeft: 3 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Send contract</button>
</div>
</div>
</div>
</div>
</div>

<div id="myModal3" class="modal">


<div class="modalContent">
<div style = {{marginLeft: 50 + 'em'}}>
<div id = "close3" class="close" onClick = {spn3}>&times;</div>
</div>
<p>Chatting with John Doe3</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style = {{marginLeft: 56 + 'em'}}>
<button id = "button3id" class="button1" style={{fontWeight: 'bold'}} onClick = {btn9}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal3" class = "modalContract">
<div class="modalContractContent">
<div style = {{marginLeft: 25 + 'em'}}>
<div id = "close9" class="close" onClick = {spn9}>&times;</div>
</div>
<p>Let's Collaborate</p>
<div class = "row">
<div class = "column1">
<div style = {{marginLeft: .8 + 'em'}} class = "modalContractDetailContent">
<p>Contract Details</p>
<form action="/action_page.php">
<textarea name="message" rows="2" cols="30"></textarea>
<br></br>
</form>
</div>
</div>
<div class = "column1">
<p></p>
<p></p>

<p style = {{marginLeft: 3 + 'em'}}>Add image</p>
</div>
</div>

<p></p>

<div class = "row">
<div class = "column1">
<div style = {{marginLeft: 7 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Add money</button>
</div>
</div>
<div class = "column1">
<div style = {{marginLeft: 3 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Send contract</button>
</div>
</div>
</div>
</div>
</div>

<div id="myModal4" class="modal">


<div class="modalContent">
<div style = {{marginLeft: 50 + 'em'}}>
<div id = "close4" class="close" onClick = {spn4}>&times;</div>
</div>
<p>Chatting with John Doe4</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style = {{marginLeft: 56 + 'em'}}>
<button id = "button4id" class="button1" style={{fontWeight: 'bold'}} onClick = {btn10}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal4" class = "modalContract">
<div class="modalContractContent">
<div style = {{marginLeft: 25 + 'em'}}>
<div id = "close10" class="close" onClick = {spn10}>&times;</div>
</div>
<p>Let's Collaborate</p>
<div class = "row">
<div class = "column1">
<div style = {{marginLeft: .8 + 'em'}} class = "modalContractDetailContent">
<p>Contract Details</p>
<form action="/action_page.php">
<textarea name="message" rows="2" cols="30"></textarea>
<br></br>
</form>
</div>
</div>
<div class = "column1">
<p></p>
<p></p>

<p style = {{marginLeft: 3 + 'em'}}>Add image</p>
</div>
</div>

<p></p>

<div class = "row">
<div class = "column1">
<div style = {{marginLeft: 7 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Add money</button>
</div>
</div>
<div class = "column1">
<div style = {{marginLeft: 3 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Send contract</button>
</div>
</div>
</div>
</div>
</div>

<div id="myModal5" class="modal">


<div class="modalContent">
<div style = {{marginLeft: 50 + 'em'}}>
<div id = "close5" class="close" onClick = {spn5}>&times;</div>
</div>
<p>Chatting with John Doe5</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style = {{marginLeft: 56 + 'em'}}>
<button id = "button5id" class="button1" style={{fontWeight: 'bold'}} onClick = {btn11}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal5" class = "modalContract">
<div class="modalContractContent">
<div style = {{marginLeft: 25 + 'em'}}>
<div id = "close11" class="close" onClick = {spn11}>&times;</div>
</div>
<p>Let's Collaborate</p>
<div class = "row">
<div class = "column1">
<div style = {{marginLeft: .8 + 'em'}} class = "modalContractDetailContent">
<p>Contract Details</p>
<form action="/action_page.php">
<textarea name="message" rows="2" cols="30"></textarea>
<br></br>
</form>
</div>
</div>
<div class = "column1">
<p></p>
<p></p>

<p style = {{marginLeft: 3 + 'em'}}>Add image</p>
</div>
</div>

<p></p>

<div class = "row">
<div class = "column1">
<div style = {{marginLeft: 7 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Add money</button>
</div>
</div>
<div class = "column1">
<div style = {{marginLeft: 3 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Send contract</button>
</div>
</div>
</div>
</div>
</div>

<div id="myModal6" class="modal">


<div class="modalContent">
<div style = {{marginLeft: 50 + 'em'}}>
<div id = "close6" class="close" onClick = {spn6}>&times;</div>
</div>
<p>Chatting with John Doe6</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style = {{marginLeft: 56 + 'em'}}>
<button id = "button6id" class="button1" style={{fontWeight: 'bold'}} onClick = {btn12}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal6" class = "modalContract">
<div class="modalContractContent">
<div style = {{marginLeft: 25 + 'em'}}>
<div id = "close12" class="close" onClick = {spn12}>&times;</div>
</div>
<p>Let's Collaborate</p>
<div class = "row">
<div class = "column1">
<div style = {{marginLeft: .8 + 'em'}} class = "modalContractDetailContent">
<p>Contract Details</p>
<form action="/action_page.php">
<textarea name="message" rows="2" cols="30"></textarea>
<br></br>
</form>
</div>
</div>
<div class = "column1">
<p></p>
<p></p>

<p style = {{marginLeft: 3 + 'em'}}>Add image</p>
</div>
</div>

<p></p>

<div class = "row">
<div class = "column1">
<div style = {{marginLeft: 7 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Add money</button>
</div>
</div>
<div class = "column1">
<div style = {{marginLeft: 3 + 'em'}}>
<button class="button1" style={{fontWeight: 'bold'}}>Send contract</button>
</div>
</div>
</div>
</div>
</div>



</body>

</>

);
}


var span = document.getElementById("close1");

function btn1() {
var modal = document.getElementById("myModal");
modal.style.display = "block";
var btn = document.getElementById("profile1");
btn.style.backgroundColor = "#ffe1b4";
}

function spn1() {
var modal = document.getElementById("myModal");
modal.style.display = "none";
var btn = document.getElementById("profile1");
btn.style.backgroundColor = "#E8E8E8";
}

window.onclick = function(event) {
var modal = document.getElementById("myModal");
var btn = document.getElementById("profile1");
if (event.target == modal) {
modal.style.display = "none";
btn.style.backgroundColor = "#E8E8E8";
}
}


var span7 = document.getElementById("close7");

function btn7() {
var modal7 = document.getElementById("collabModal");
modal7.style.display = "block";
document.getElementById("myModal").style.zIndex = 0
var btn7 = document.getElementById("button1id");
btn7.style.display = "none";
}

function spn7() {
var modal7 = document.getElementById("collabModal");
modal7.style.display = "none";
var btn7 = document.getElementById("button1id");
btn7.style.display = "inline-block";
}

window.onclick = function(event) {
var modal7 = document.getElementById("collabModal");
var btn7 = document.getElementById("button1id");
if (event.target == modal7) {
modal7.style.display = "none";
btn7.style.display = "inline-block";
}
}

// Modal 2
var span2 = document.getElementById("close2");

function btn2() {
var modal2 = document.getElementById("myModal2");
modal2.style.display = "block";
var btn2 = document.getElementById("profile2");
btn2.style.backgroundColor = "#ffe1b4";
}

function spn2() {
var modal2 = document.getElementById("myModal2");
modal2.style.display = "none";
var btn2 = document.getElementById("profile2");
btn2.style.backgroundColor = "#E8E8E8";
}

window.onclick = function(event) {
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("profile2");
if (event.target == modal2) {
modal2.style.display = "none";
btn2.style.backgroundColor = "#E8E8E8";
}
}


var span8 = document.getElementById("close8");

function btn8() {
var modal8 = document.getElementById("collabModal2");
modal8.style.display = "block";
document.getElementById("myModal2").style.zIndex = 0
var btn8 = document.getElementById("button2id");
btn8.style.display = "none";
}

function spn8() {
var modal8 = document.getElementById("collabModal2");
modal8.style.display = "none";
var btn8 = document.getElementById("button2id");
btn8.style.display = "inline-block";
}

window.onclick = function(event) {
var modal8 = document.getElementById("collabModal2");
var btn8 = document.getElementById("button2id");
if (event.target == modal8) {
modal8.style.display = "none";
btn8.style.display = "inline-block";
}
}


// Modal 3
var span3 = document.getElementById("close3");

function btn3() {
var modal3 = document.getElementById("myModal3");
modal3.style.display = "block";
var btn3 = document.getElementById("profile3");
btn3.style.backgroundColor = "#ffe1b4";
}

function spn3() {
var modal3 = document.getElementById("myModal3");
modal3.style.display = "none";
var btn3 = document.getElementById("profile3");
btn3.style.backgroundColor = "#E8E8E8";
}

window.onclick = function(event) {
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("profile3");
if (event.target == modal3) {
modal3.style.display = "none";
btn3.style.backgroundColor = "#E8E8E8";
}
}


var span9 = document.getElementById("close9");

function btn9() {
var modal9 = document.getElementById("collabModal3");
modal9.style.display = "block";
document.getElementById("myModal3").style.zIndex = 0
var btn9 = document.getElementById("button3id");
btn9.style.display = "none";
}

function spn9() {
var modal9 = document.getElementById("collabModal3");
modal9.style.display = "none";
var btn9 = document.getElementById("button3id");
btn9.style.display = "inline-block";
}

window.onclick = function(event) {
var modal9 = document.getElementById("collabModal3");
var btn9 = document.getElementById("button3id");
if (event.target == modal9) {
modal9.style.display = "none";
btn9.style.display = "inline-block";
}
}


// Modal 4
var span4 = document.getElementById("close4");

function btn4() {
var modal4 = document.getElementById("myModal4");
modal4.style.display = "block";
var btn4 = document.getElementById("profile4");
btn4.style.backgroundColor = "#ffe1b4";
}

function spn4() {
var modal4 = document.getElementById("myModal4");
modal4.style.display = "none";
var btn4 = document.getElementById("profile4");
btn4.style.backgroundColor = "#E8E8E8";
}

window.onclick = function(event) {
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("profile4");
if (event.target == modal4) {
modal4.style.display = "none";
btn4.style.backgroundColor = "#E8E8E8";
}
}


var span10 = document.getElementById("close10");

function btn10() {
var modal10 = document.getElementById("collabModal4");
modal10.style.display = "block";
document.getElementById("myModal4").style.zIndex = 0
var btn10 = document.getElementById("button4id");
btn10.style.display = "none";
}

function spn10() {
var modal10 = document.getElementById("collabModal4");
modal10.style.display = "none";
var btn10 = document.getElementById("button4id");
btn10.style.display = "inline-block";
}

window.onclick = function(event) {
var modal10 = document.getElementById("collabModal4");
var btn10 = document.getElementById("button4id");
if (event.target == modal10) {
modal10.style.display = "none";
btn10.style.display = "inline-block";
}
}


// Modal 5
var span5 = document.getElementById("close5");

function btn5() {
var modal5 = document.getElementById("myModal5");
modal5.style.display = "block";
var btn5 = document.getElementById("profile5");
btn5.style.backgroundColor = "#ffe1b4";
}

function spn5() {
var modal5 = document.getElementById("myModal5");
modal5.style.display = "none";
var btn5 = document.getElementById("profile5");
btn5.style.backgroundColor = "#E8E8E8";
}

window.onclick = function(event) {
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("profile5");
if (event.target == modal5) {
modal5.style.display = "none";
btn5.style.backgroundColor = "#E8E8E8";
}
}


var span11 = document.getElementById("close11");

function btn11() {
var modal11 = document.getElementById("collabModal5");
modal11.style.display = "block";
document.getElementById("myModal5").style.zIndex = 0
var btn11 = document.getElementById("button5id");
btn11.style.display = "none";
}

function spn11() {
var modal11 = document.getElementById("collabModal5");
modal11.style.display = "none";
var btn11 = document.getElementById("button5id");
btn11.style.display = "inline-block";
}

window.onclick = function(event) {
var modal11 = document.getElementById("collabModal5");
var btn11 = document.getElementById("button5id");
if (event.target == modal11) {
modal11.style.display = "none";
btn11.style.display = "inline-block";
}
}


// Modal 6
var span6 = document.getElementById("close6");

function btn6() {
var modal6 = document.getElementById("myModal6");
modal6.style.display = "block";
var btn6 = document.getElementById("profile6");
btn6.style.backgroundColor = "#ffe1b4";
}

function spn6() {
var modal6 = document.getElementById("myModal6");
modal6.style.display = "none";
var btn6 = document.getElementById("profile6");
btn6.style.backgroundColor = "#E8E8E8";
}

window.onclick = function(event) {
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("profile6");
if (event.target == modal6) {
modal6.style.display = "none";
btn6.style.backgroundColor = "#E8E8E8";
}
}


var span12 = document.getElementById("close12");

function btn12() {
var modal12 = document.getElementById("collabModal6");
modal12.style.display = "block";
document.getElementById("myModal6").style.zIndex = 0
var btn12 = document.getElementById("button6id");
btn12.style.display = "none";
}

function spn12() {
var modal12 = document.getElementById("collabModal6");
modal12.style.display = "none";
var btn12 = document.getElementById("button6id");
btn12.style.display = "inline-block";
}

window.onclick = function(event) {
var modal12 = document.getElementById("collabModal6");
var btn12 = document.getElementById("button6id");
if (event.target == modal12) {
modal12.style.display = "none";
btn12.style.display = "inline-block";
}
}


export default ConnectPage;
