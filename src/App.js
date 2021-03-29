    import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">
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
        <a style = {{color:'black'}} href = "index.html">Connect</a>
      </div>
      <div class = "column1">
        <div style = {{marginLeft: 10 + 'em'}}>
        <a style = {{color:'black'}} href = "explore.html">Explore</a>
      </div>
    </div>
      <div class = "column1">
        <div style = {{marginLeft: 10 + 'em'}}>
        <a style = {{color:'black'}} href = "profile.html">My Profile</a>
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
  <div id = "profile2" class = "rcorners2">
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
  <div id = "profile3" class = "rcorners2">
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
  <div id = "profile4" class = "rcorners2">
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
  <div id = "profile5" class = "rcorners2">
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
  <div id = "profile6" class = "rcorners2">
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
  <div id = "close1" class="close" onClick = {span1}>&times;</div>
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
  <button id = "button1id" class="button1" style={{fontWeight:'bold'}}>Let's Collaborate</button>
</div>
</div>

</div>


<div id = "collabModal" class = "modalContract">
  <div class="modalContract-content">
    <div style = {{marginLeft: 25 + 'em'}}>
    <div id = "close7" class="close">&times;</div>
  </div>
  <p>Let's Collaborate</p>
  <div class = "row">
    <div class = "column1">
  <div style = {{marginLeft: .8 + 'em'}} class = "modalContract-Detail-content">
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





    </body>

    </div>

  );
}

var span = document.getElementById("close1");

function btn1() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var btn = document.getElementById("profile1");
  btn.style.backgroundColor = "#ffe1b4";
}

function span1() {
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

export default App;
