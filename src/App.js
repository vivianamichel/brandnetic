import logo from './logo.svg';
import './App.css';

function App() {
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


    <div style = "margin-left: 85em">
      <img src = "profilepic.png" alt = "Profile Picture" width = "40" height = "40"></img>
    </div>
        <div style = "margin-left: 32em;">
    <div class = "row">
      <div class = "column1">
        <a style = "color:black" href = "index.html">Connect</a>
      </div>
      <div class = "column1">
        <div style = "margin-left: 10em;">
        <a style = "color:black" href = "explore.html">Explore</a>
      </div>
    </div>
      <div class = "column1">
        <div style = "margin-left: 10em;">
        <a style = "color:black" href = "profile.html">My Profile</a>
      </div>
    </div>

    </div>
    </div>


        <p></p>
        <div style = "margin-left: 84em;">
          <div style = "font-size: 1.5em;">
          <p style = "color:black">Connections</p>
        </div>
      </div>

    <div style = "margin-left: 73.5em;">
    <div class = "rcorners1">
      <div id = "profile1" class = "rcorners2">
        <div class = "row">
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
          </div>
        </div>
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <b>John Doe</b>
          </div>
          </div>
      </div>
    </div>
      <p></p>
      <div id = "profile2" class = "rcorners2">
        <div class = "row">
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
          </div>
        </div>
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <b>John Doe2</b>
          </div>
          </div>
      </div>
      </div>
    <p></p>
      <div id = "profile3" class = "rcorners2">
        <div class = "row">
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
          </div>
        </div>
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <b>John Doe3</b>
          </div>
          </div>
      </div>
      </div>
      <p></p>
      <div id = "profile4" class = "rcorners2">
        <div class = "row">
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
          </div>
        </div>
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <b>John Doe4</b>
          </div>
          </div>
      </div>
      </div>
      <p></p>
      <div id = "profile5" class = "rcorners2">
        <div class = "row">
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
          </div>
        </div>
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <b>John Doe5</b>
          </div>
          </div>
      </div>
      </div>
      <p></p>
      <div id = "profile6" class = "rcorners2">
        <div class = "row">
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <img src = "profilepic.png" alt = "Profile Picture" width = "31" height = "31"></img>
          </div>
        </div>
          <div class = "column1">
            <div style = "margin-left: .75em;">
            <b>John Doe6</b>
          </div>
          </div>
      </div>
      </div>
    </div>
    </div>


    <div style = "margin-left: .5em;">
        <div class = "bottom">
      <a href="#top">Back to top</a>
      </div>
    </div>




    <div id = "myModal" class="modal">

    <div class="modal-content">
      <div style = "margin-left: 50em;">
      <div id = "close1" class="close">&times;</div>
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
      <div style = "margin-left: 56em;">
      <button id = "button1id" class="button1" style="font-weight:bold;">Let's Collaborate</button>
    </div>
    </div>

    </div>


    <div id = "collabModal" class = "modalContract">
      <div class="modalContract-content">
        <div style = "margin-left: 25em;">
        <div id = "close7" class="close">&times;</div>
      </div>
      <p>Let's Collaborate</p>
      <div class = "row">
        <div class = "column1">
      <div style = "margin-left: .8em;" class = "modalContract-Detail-content">
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

      <p style = "margin-left: 3em;">Add image</p>
    </div>
    </div>

    <p></p>

    <div class = "row">
      <div class = "column1">
        <div style = "margin-left: 7em;">
    <button class="button1" style="font-weight:bold;">Add money</button>
    </div>
    </div>
    <div class = "column1">
      <div style = "margin-left: 3em;">
    <button class="button1" style="font-weight:bold;">Send contract</button>
    </div>
    </div>
    </div>
    </div>
    </div>


    <div id="myModal2" class="modal">


    <div class="modal-content">
      <div style = "margin-left: 50em;">
      <div id = "close2" class="close">&times;</div>
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
      <div style = "margin-left: 56em;">
      <button id = "button2id" class="button1" style="font-weight:bold;">Let's Collaborate</button>
    </div>
    </div>

    </div>


    <div id = "collabModal2" class = "modalContract">
      <div class="modalContract-content">
        <div style = "margin-left: 25em;">
        <div id = "close8" class="close">&times;</div>
      </div>
      <p>Let's Collaborate</p>
      <div class = "row">
        <div class = "column1">
      <div style = "margin-left: .8em;" class = "modalContract-Detail-content">
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

      <p style = "margin-left: 3em;">Add image</p>
    </div>
    </div>

    <p></p>

    <div class = "row">
      <div class = "column1">
        <div style = "margin-left: 7em;">
    <button class="button1" style="font-weight:bold;">Add money</button>
    </div>
    </div>
    <div class = "column1">
      <div style = "margin-left: 3em;">
    <button class="button1" style="font-weight:bold;">Send contract</button>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div id="myModal3" class="modal">


    <div class="modal-content">
      <div style = "margin-left: 50em;">
      <div id = "close3" class="close">&times;</div>
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
      <div style = "margin-left: 56em;">
      <button id = "button3id" class="button1" style="font-weight:bold;">Let's Collaborate</button>
    </div>
    </div>

    </div>


    <div id = "collabModal3" class = "modalContract">
      <div class="modalContract-content">
        <div style = "margin-left: 25em;">
        <div id = "close9" class="close">&times;</div>
      </div>
      <p>Let's Collaborate</p>
      <div class = "row">
        <div class = "column1">
      <div style = "margin-left: .8em;" class = "modalContract-Detail-content">
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

      <p style = "margin-left: 3em;">Add image</p>
    </div>
    </div>

    <p></p>

    <div class = "row">
      <div class = "column1">
        <div style = "margin-left: 7em;">
    <button class="button1" style="font-weight:bold;">Add money</button>
    </div>
    </div>
    <div class = "column1">
      <div style = "margin-left: 3em;">
    <button class="button1" style="font-weight:bold;">Send contract</button>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div id="myModal4" class="modal">


    <div class="modal-content">
      <div style = "margin-left: 50em;">
      <div id = "close4" class="close">&times;</div>
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
      <div style = "margin-left: 56em;">
      <button id = "button4id" class="button1" style="font-weight:bold;">Let's Collaborate</button>
    </div>
    </div>

    </div>


    <div id = "collabModal4" class = "modalContract">
      <div class="modalContract-content">
        <div style = "margin-left: 25em;">
        <div id = "close10" class="close">&times;</div>
      </div>
      <p>Let's Collaborate</p>
      <div class = "row">
        <div class = "column1">
      <div style = "margin-left: .8em;" class = "modalContract-Detail-content">
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

      <p style = "margin-left: 3em;">Add image</p>
    </div>
    </div>

    <p></p>

    <div class = "row">
      <div class = "column1">
        <div style = "margin-left: 7em;">
    <button class="button1" style="font-weight:bold;">Add money</button>
    </div>
    </div>
    <div class = "column1">
      <div style = "margin-left: 3em;">
    <button class="button1" style="font-weight:bold;">Send contract</button>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div id="myModal5" class="modal">


    <div class="modal-content">
      <div style = "margin-left: 50em;">
      <div id = "close5" class="close">&times;</div>
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
      <div style = "margin-left: 56em;">
      <button id = "button5id" class="button1" style="font-weight:bold;">Let's Collaborate</button>
    </div>
    </div>

    </div>


    <div id = "collabModal5" class = "modalContract">
      <div class="modalContract-content">
        <div style = "margin-left: 25em;">
        <div id = "close11" class="close">&times;</div>
      </div>
      <p>Let's Collaborate</p>
      <div class = "row">
        <div class = "column1">
      <div style = "margin-left: .8em;" class = "modalContract-Detail-content">
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

      <p style = "margin-left: 3em;">Add image</p>
    </div>
    </div>

    <p></p>

    <div class = "row">
      <div class = "column1">
        <div style = "margin-left: 7em;">
    <button class="button1" style="font-weight:bold;">Add money</button>
    </div>
    </div>
    <div class = "column1">
      <div style = "margin-left: 3em;">
    <button class="button1" style="font-weight:bold;">Send contract</button>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div id="myModal6" class="modal">


    <div class="modal-content">
      <div style = "margin-left: 50em;">
      <div id = "close6" class="close">&times;</div>
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
      <div style = "margin-left: 56em;">
      <button id = "button6id" class="button1" style="font-weight:bold;">Let's Collaborate</button>
    </div>
    </div>

    </div>


    <div id = "collabModal6" class = "modalContract">
      <div class="modalContract-content">
        <div style = "margin-left: 25em;">
        <div id = "close12" class="close">&times;</div>
      </div>
      <p>Let's Collaborate</p>
      <div class = "row">
        <div class = "column1">
      <div style = "margin-left: .8em;" class = "modalContract-Detail-content">
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

      <p style = "margin-left: 3em;">Add image</p>
    </div>
    </div>

    <p></p>

    <div class = "row">
      <div class = "column1">
        <div style = "margin-left: 7em;">
    <button class="button1" style="font-weight:bold;">Add money</button>
    </div>
    </div>
    <div class = "column1">
      <div style = "margin-left: 3em;">
    <button class="button1" style="font-weight:bold;">Send contract</button>
    </div>
    </div>
    </div>
    </div>
    </div>



      <script>
      // Get the modal
      var modal = document.getElementById("myModal");
      var btn = document.getElementById("profile1");
      var span = document.getElementById("close1");

      btn.onclick = function() {
        modal.style.display = "block"
        btn.style.backgroundColor = "#ffe1b4"
        return;
      }

      span.onclick = function() {
        modal.style.display = "none";
        btn.style.backgroundColor = "#E8E8E8";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          btn.style.backgroundColor = "#E8E8E8";
        }
      }

      var modal7 = document.getElementById("collabModal");
      var btn7 = document.getElementById("button1id");
      var span7 = document.getElementById("close7");

      btn7.onclick = function() {
        modal7.style.display = "block";
        btn7.style.display = "none";
      }

      span7.onclick = function() {
        modal7.style.display = "none";
        btn7.style.display = "inline-block";
      }

      window.onclick = function(event) {
        if (event.target == modal7) {
          modal7.style.display = "none";
          btn7.style.display = "inline-block";
        }
      }

      // Get the modal 2
      var modal2 = document.getElementById("myModal2");
      var btn2 = document.getElementById("profile2");
      var span2 = document.getElementById("close2");

      btn2.onclick = function() {
        modal2.style.display = "block";
        btn2.style.backgroundColor = "#ffe1b4";
      }

      span2.onclick = function() {
        modal2.style.display = "none";
        btn2.style.backgroundColor = "#E8E8E8";
      }

      window.onclick = function(event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
          btn2.style.backgroundColor = "#E8E8E8";
        }
      }

      var modal8 = document.getElementById("collabModal2");
      var btn8 = document.getElementById("button2id");
      var span8 = document.getElementById("close8");

      btn8.onclick = function() {
        modal8.style.display = "block";
        btn8.style.display = "none";
      }

      span8.onclick = function() {
        modal8.style.display = "none";
        btn8.style.display = "inline-block";
      }

      window.onclick = function(event) {
        if (event.target == modal8) {
          modal8.style.display = "none";
          btn8.style.display = "inline-block";
        }
      }

      // Get the modal 3
      var modal3 = document.getElementById("myModal3");
      var btn3 = document.getElementById("profile3");
      var span3 = document.getElementById("close3");

      btn3.onclick = function() {
        modal3.style.display = "block";
        btn3.style.backgroundColor = "#ffe1b4";
      }

      span3.onclick = function() {
        modal3.style.display = "none";
        btn3.style.backgroundColor = "#E8E8E8";
      }

      window.onclick = function(event) {
        if (event.target == modal3) {
          modal3.style.display = "none";
          btn3.style.backgroundColor = "#E8E8E8";
        }
      }

      var modal9 = document.getElementById("collabModal3");
      var btn9 = document.getElementById("button3id");
      var span9 = document.getElementById("close9");

      btn9.onclick = function() {
        modal9.style.display = "block";
        btn9.style.display = "none";
      }

      span9.onclick = function() {
        modal9.style.display = "none";
        btn9.style.display = "inline-block";
      }

      window.onclick = function(event) {
        if (event.target == modal9) {
          modal9.style.display = "none";
          btn9.style.display = "inline-block";
        }
      }

      // Get the modal 4
      var modal4 = document.getElementById("myModal4");
      var btn4 = document.getElementById("profile4");
      var span4 = document.getElementById("close4");

      btn4.onclick = function() {
        modal4.style.display = "block";
        btn4.style.backgroundColor = "#ffe1b4";
      }

      span4.onclick = function() {
        modal4.style.display = "none";
        btn4.style.backgroundColor = "#E8E8E8";
      }

      window.onclick = function(event) {
        if (event.target == modal4) {
          modal4.style.display = "none";
          btn4.style.backgroundColor = "#E8E8E8";
        }
      }

      var modal10 = document.getElementById("collabModal4");
      var btn10 = document.getElementById("button4id");
      var span10 = document.getElementById("close10");

      btn10.onclick = function() {
        modal10.style.display = "block";
        btn10.style.display = "none";
      }

      span10.onclick = function() {
        modal10.style.display = "none";
        btn10.style.display = "inline-block";
      }

      window.onclick = function(event) {
        if (event.target == modal10) {
          modal10.style.display = "none";
          btn10.style.display = "inline-block";
        }
      }

      // Get the modal 5
      var modal5 = document.getElementById("myModal5");
      var btn5 = document.getElementById("profile5");
      var span5 = document.getElementById("close5");

      btn5.onclick = function() {
        modal5.style.display = "block";
        btn5.style.backgroundColor = "#ffe1b4";
      }

      span5.onclick = function() {
        modal5.style.display = "none";
        btn5.style.backgroundColor = "#E8E8E8";
      }

      window.onclick = function(event) {
        if (event.target == modal5) {
          modal5.style.display = "none";
          btn5.style.backgroundColor = "#E8E8E8";
        }
      }

      var modal11 = document.getElementById("collabModal5");
      var btn11 = document.getElementById("button5id");
      var span11 = document.getElementById("close11");

      btn11.onclick = function() {
        modal11.style.display = "block";
        btn11.style.display = "none";
      }

      span11.onclick = function() {
        modal11.style.display = "none";
        btn11.style.display = "inline-block";
      }

      window.onclick = function(event) {
        if (event.target == modal11) {
          modal11.style.display = "none";
          btn11.style.display = "inline-block";
        }
      }

      // Get the modal 6
      var modal6 = document.getElementById("myModal6");
      var btn6 = document.getElementById("profile6");
      var span6 = document.getElementById("close6");

      btn6.onclick = function() {
        modal6.style.display = "block";
        btn6.style.backgroundColor = "#ffe1b4";
      }

      span6.onclick = function() {
        modal6.style.display = "none";
        btn6.style.backgroundColor = "#E8E8E8";
      }

      window.onclick = function(event) {
        if (event.target == modal6) {
          modal6.style.display = "none";
          btn6.style.backgroundColor = "#E8E8E8";
        }
      }

      var modal12 = document.getElementById("collabModal6");
      var btn12 = document.getElementById("button6id");
      var span12 = document.getElementById("close12");

      btn12.onclick = function() {
        modal12.style.display = "block";
        btn12.style.display = "none";
      }

      span12.onclick = function() {
        modal12.style.display = "none";
        btn12.style.display = "inline-block";
      }

      window.onclick = function(event) {
        if (event.target == modal12) {
          modal12.style.display = "none";
          btn12.style.display = "inline-block";
        }
      }



      </script>

    </body>
    </>
  );
}

export default App;
