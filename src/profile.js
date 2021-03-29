import logo from './logo.svg';
import React from "react";

const ProfilePage = () => {
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




<div style = {{marginLeft: .5 + 'em'}}>
<div class = "bottom">
<a href="#top">Back to top</a>
</div>
</div>





</body>

</>

);
}

export default ProfilePage;
