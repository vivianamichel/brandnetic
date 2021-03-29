/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("var modal=document.getElementById(\"myModal\"),btn=document.getElementById(\"profile1\"),span=document.getElementById(\"close1\");btn.onclick=function(){modal.style.display=\"block\",btn.style.backgroundColor=\"#ffe1b4\"},span.onclick=function(){modal.style.display=\"none\",btn.style.backgroundColor=\"#E8E8E8\"},window.onclick=function(n){n.target==modal&&(modal.style.display=\"none\",btn.style.backgroundColor=\"#E8E8E8\")};var modal7=document.getElementById(\"collabModal\"),btn7=document.getElementById(\"button1id\"),span7=document.getElementById(\"close7\");btn7.onclick=function(){modal7.style.display=\"block\",btn7.style.display=\"none\"},span7.onclick=function(){modal7.style.display=\"none\",btn7.style.display=\"inline-block\"},window.onclick=function(n){n.target==modal7&&(modal7.style.display=\"none\",btn7.style.display=\"inline-block\")};var modal2=document.getElementById(\"myModal2\"),btn2=document.getElementById(\"profile2\"),span2=document.getElementById(\"close2\");btn2.onclick=function(){modal2.style.display=\"block\",btn2.style.backgroundColor=\"#ffe1b4\"},span2.onclick=function(){modal2.style.display=\"none\",btn2.style.backgroundColor=\"#E8E8E8\"},window.onclick=function(n){n.target==modal2&&(modal2.style.display=\"none\",btn2.style.backgroundColor=\"#E8E8E8\")};var modal8=document.getElementById(\"collabModal2\"),btn8=document.getElementById(\"button2id\"),span8=document.getElementById(\"close8\");btn8.onclick=function(){modal8.style.display=\"block\",btn8.style.display=\"none\"},span8.onclick=function(){modal8.style.display=\"none\",btn8.style.display=\"inline-block\"},window.onclick=function(n){n.target==modal8&&(modal8.style.display=\"none\",btn8.style.display=\"inline-block\")};var modal3=document.getElementById(\"myModal3\"),btn3=document.getElementById(\"profile3\"),span3=document.getElementById(\"close3\");btn3.onclick=function(){modal3.style.display=\"block\",btn3.style.backgroundColor=\"#ffe1b4\"},span3.onclick=function(){modal3.style.display=\"none\",btn3.style.backgroundColor=\"#E8E8E8\"},window.onclick=function(n){n.target==modal3&&(modal3.style.display=\"none\",btn3.style.backgroundColor=\"#E8E8E8\")};var modal9=document.getElementById(\"collabModal3\"),btn9=document.getElementById(\"button3id\"),span9=document.getElementById(\"close9\");btn9.onclick=function(){modal9.style.display=\"block\",btn9.style.display=\"none\"},span9.onclick=function(){modal9.style.display=\"none\",btn9.style.display=\"inline-block\"},window.onclick=function(n){n.target==modal9&&(modal9.style.display=\"none\",btn9.style.display=\"inline-block\")};var modal4=document.getElementById(\"myModal4\"),btn4=document.getElementById(\"profile4\"),span4=document.getElementById(\"close4\");btn4.onclick=function(){modal4.style.display=\"block\",btn4.style.backgroundColor=\"#ffe1b4\"},span4.onclick=function(){modal4.style.display=\"none\",btn4.style.backgroundColor=\"#E8E8E8\"},window.onclick=function(n){n.target==modal4&&(modal4.style.display=\"none\",btn4.style.backgroundColor=\"#E8E8E8\")};var modal10=document.getElementById(\"collabModal4\"),btn10=document.getElementById(\"button4id\"),span10=document.getElementById(\"close10\");btn10.onclick=function(){modal10.style.display=\"block\",btn10.style.display=\"none\"},span10.onclick=function(){modal10.style.display=\"none\",btn10.style.display=\"inline-block\"},window.onclick=function(n){n.target==modal10&&(modal10.style.display=\"none\",btn10.style.display=\"inline-block\")};var modal5=document.getElementById(\"myModal5\"),btn5=document.getElementById(\"profile5\"),span5=document.getElementById(\"close5\");btn5.onclick=function(){modal5.style.display=\"block\",btn5.style.backgroundColor=\"#ffe1b4\"},span5.onclick=function(){modal5.style.display=\"none\",btn5.style.backgroundColor=\"#E8E8E8\"},window.onclick=function(n){n.target==modal5&&(modal5.style.display=\"none\",btn5.style.backgroundColor=\"#E8E8E8\")};var modal11=document.getElementById(\"collabModal5\"),btn11=document.getElementById(\"button5id\"),span11=document.getElementById(\"close11\");btn11.onclick=function(){modal11.style.display=\"block\",btn11.style.display=\"none\"},span11.onclick=function(){modal11.style.display=\"none\",btn11.style.display=\"inline-block\"},window.onclick=function(n){n.target==modal11&&(modal11.style.display=\"none\",btn11.style.display=\"inline-block\")};var modal6=document.getElementById(\"myModal6\"),btn6=document.getElementById(\"profile6\"),span6=document.getElementById(\"close6\");btn6.onclick=function(){modal6.style.display=\"block\",btn6.style.backgroundColor=\"#ffe1b4\"},span6.onclick=function(){modal6.style.display=\"none\",btn6.style.backgroundColor=\"#E8E8E8\"},window.onclick=function(n){n.target==modal6&&(modal6.style.display=\"none\",btn6.style.backgroundColor=\"#E8E8E8\")};var modal12=document.getElementById(\"collabModal6\"),btn12=document.getElementById(\"button6id\"),span12=document.getElementById(\"close12\");btn12.onclick=function(){modal12.style.display=\"block\",btn12.style.display=\"none\"},span12.onclick=function(){modal12.style.display=\"none\",btn12.style.display=\"inline-block\"},window.onclick=function(n){n.target==modal12&&(modal12.style.display=\"none\",btn12.style.display=\"inline-block\")};"), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            color: white;
            font-family: verdana
          }
            html {
            scroll-behavior: smooth;
          }
            p {
          padding-bottom: 10px;
          }
            .bottom {
              position: fixed;
              bottom: 0;
          }
            a {
              font-family: verdana
            }
            img {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .button1 {
            background-color: #FFFFFF; /* Green */
            border-radius: 12px;
            color: white;
            padding: 5px;
            text-align: center;
            text-decoration: none;
            color: black;
            display: inline-block;
            width: 150px;
            height: 40px;
            font-size: 16px;
            margin: 1px 1px;
            cursor: pointer;
          }

          div.rcorners1 {
            border-radius: 15px;
            border: 2px solid #000000;
            padding: 20px;
            width: 300px;
            height: 520px;
          }

          div.rcorners2 {
            border-radius: 15px;
            background-color: #E8E8E8;
            padding: 15px;
            width: 250px;
            height: 60px;
          }

          #column1 {
            width: 50%
          }

            div.transbox {
            margin: 30px;
            background-color: grey;
            border: 1px solid transparent;
            opacity: .9;
          }

          div.transbox p {
            margin: 4%;
            color: white;
            opacity: 1;
          }
            div.transbox h1 {
            margin: 4%;
            color: white;
            opacity: 1;
          }

          .modalContract {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 384px; /* Location of the box */
            padding-left: 170px;
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.0001); /* Black w/ opacity */
          }

          .modalContract-content {
            border-radius: 15px;
            border: 2px solid #000000;
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            width: 500px;
            height: 300px;
          }

          .modalContract-Detail-content {
            border-radius: 15px;
            border: 2px solid #000000;
            background-color: #fefefe;
            padding: 20px;
            width: 300px;
            height: 150px;
          }

          .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 179px; /* Location of the box */
            padding-right: 370px;
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.0001); /* Black w/ opacity */
          }

          /* Modal Content */
          .modal-content {
            border-radius: 15px;
            border: 2px solid #000000;
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            width: 1100px;
            height: 520px;
          }

          /* The Close Button */
          .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
        ` }} />
        <span className="af-view">
          <div>
            <title>Profile Page</title>
            <div id="top" />
            <p />
            <div style={{marginLeft: '85em'}}>
              <img src="profilepic.png" alt="Profile Picture" width={40} height={40} />
            </div>
            <div style={{marginLeft: '32em'}}>
              <div className="af-class-row">
                <div className="af-class-column1">
                  <a style={{color: 'black'}} href="index.html">Connect</a>
                </div>
                <div className="af-class-column1">
                  <div style={{marginLeft: '10em'}}>
                    <a style={{color: 'black'}} href="explore.html">Explore</a>
                  </div>
                </div>
                <div className="af-class-column1">
                  <div style={{marginLeft: '10em'}}>
                    <a style={{color: 'black'}} href="profile.html">My Profile</a>
                  </div>
                </div>
              </div>
            </div>
            <p />
            <div style={{marginLeft: '84em'}}>
              <div style={{fontSize: '1.5em'}}>
                <p style={{color: 'black'}}>Connections</p>
              </div>
            </div>
            <div style={{marginLeft: '73.5em'}}>
              <div className="af-class-rcorners1">
                <div id="profile1" className="af-class-rcorners2">
                  <div className="af-class-row">
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <img src="profilepic.png" alt="Profile Picture" width={31} height={31} />
                      </div>
                    </div>
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <b>John Doe</b>
                      </div>
                    </div>
                  </div>
                </div>
                <p />
                <div id="profile2" className="af-class-rcorners2">
                  <div className="af-class-row">
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <img src="profilepic.png" alt="Profile Picture" width={31} height={31} />
                      </div>
                    </div>
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <b>John Doe2</b>
                      </div>
                    </div>
                  </div>
                </div>
                <p />
                <div id="profile3" className="af-class-rcorners2">
                  <div className="af-class-row">
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <img src="profilepic.png" alt="Profile Picture" width={31} height={31} />
                      </div>
                    </div>
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <b>John Doe3</b>
                      </div>
                    </div>
                  </div>
                </div>
                <p />
                <div id="profile4" className="af-class-rcorners2">
                  <div className="af-class-row">
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <img src="profilepic.png" alt="Profile Picture" width={31} height={31} />
                      </div>
                    </div>
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <b>John Doe4</b>
                      </div>
                    </div>
                  </div>
                </div>
                <p />
                <div id="profile5" className="af-class-rcorners2">
                  <div className="af-class-row">
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <img src="profilepic.png" alt="Profile Picture" width={31} height={31} />
                      </div>
                    </div>
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <b>John Doe5</b>
                      </div>
                    </div>
                  </div>
                </div>
                <p />
                <div id="profile6" className="af-class-rcorners2">
                  <div className="af-class-row">
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <img src="profilepic.png" alt="Profile Picture" width={31} height={31} />
                      </div>
                    </div>
                    <div className="af-class-column1">
                      <div style={{marginLeft: '.75em'}}>
                        <b>John Doe6</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginLeft: '.5em'}}>
              <div className="af-class-bottom">
                <a href="#top">Back to top</a>
              </div>
            </div>
            {/* The Modal */}
            <div id="myModal" className="af-class-modal">
              {/* Modal content */}
              <div className="af-class-modal-content">
                <div style={{marginLeft: '50em'}}>
                  <div id="close1" className="af-class-close">×</div>
                </div>
                <p>Chatting with John Doe</p>
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <div style={{marginLeft: '56em'}}>
                  <button id="button1id" className="af-class-button1" style={{fontWeight: 'bold'}}>Let's Collaborate</button>
                </div>
              </div>
            </div>
            {/* collabModal 1 */}
            <div id="collabModal" className="af-class-modalContract">
              <div className="af-class-modalContract-content">
                <div style={{marginLeft: '25em'}}>
                  <div id="close7" className="af-class-close">×</div>
                </div>
                <p>Let's Collaborate</p>
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '.8em'}} className="af-class-modalContract-Detail-content">
                      <p>Contract Details</p>
                      <form action="/action_page.php">
                        <textarea name="message" rows={2} cols={30} defaultValue={""} />
                        <br /><br />
                      </form>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <p />
                    <p />
                    <p style={{marginLeft: '3em'}}>Add image</p>
                  </div>
                </div>
                <p />
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '7em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Add money</button>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <div style={{marginLeft: '3em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Send contract</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="myModal2" className="af-class-modal">
              {/* Modal content */}
              <div className="af-class-modal-content">
                <div style={{marginLeft: '50em'}}>
                  <div id="close2" className="af-class-close">×</div>
                </div>
                <p>Chatting with John Doe2</p>
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <div style={{marginLeft: '56em'}}>
                  <button id="button2id" className="af-class-button1" style={{fontWeight: 'bold'}}>Let's Collaborate</button>
                </div>
              </div>
            </div>
            {/* collabModal 2 */}
            <div id="collabModal2" className="af-class-modalContract">
              <div className="af-class-modalContract-content">
                <div style={{marginLeft: '25em'}}>
                  <div id="close8" className="af-class-close">×</div>
                </div>
                <p>Let's Collaborate</p>
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '.8em'}} className="af-class-modalContract-Detail-content">
                      <p>Contract Details</p>
                      <form action="/action_page.php">
                        <textarea name="message" rows={2} cols={30} defaultValue={""} />
                        <br /><br />
                      </form>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <p />
                    <p />
                    <p style={{marginLeft: '3em'}}>Add image</p>
                  </div>
                </div>
                <p />
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '7em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Add money</button>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <div style={{marginLeft: '3em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Send contract</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="myModal3" className="af-class-modal">
              {/* Modal content */}
              <div className="af-class-modal-content">
                <div style={{marginLeft: '50em'}}>
                  <div id="close3" className="af-class-close">×</div>
                </div>
                <p>Chatting with John Doe3</p>
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <div style={{marginLeft: '56em'}}>
                  <button id="button3id" className="af-class-button1" style={{fontWeight: 'bold'}}>Let's Collaborate</button>
                </div>
              </div>
            </div>
            {/* collabModal 3 */}
            <div id="collabModal3" className="af-class-modalContract">
              <div className="af-class-modalContract-content">
                <div style={{marginLeft: '25em'}}>
                  <div id="close9" className="af-class-close">×</div>
                </div>
                <p>Let's Collaborate</p>
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '.8em'}} className="af-class-modalContract-Detail-content">
                      <p>Contract Details</p>
                      <form action="/action_page.php">
                        <textarea name="message" rows={2} cols={30} defaultValue={""} />
                        <br /><br />
                      </form>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <p />
                    <p />
                    <p style={{marginLeft: '3em'}}>Add image</p>
                  </div>
                </div>
                <p />
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '7em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Add money</button>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <div style={{marginLeft: '3em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Send contract</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="myModal4" className="af-class-modal">
              {/* Modal content */}
              <div className="af-class-modal-content">
                <div style={{marginLeft: '50em'}}>
                  <div id="close4" className="af-class-close">×</div>
                </div>
                <p>Chatting with John Doe4</p>
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <div style={{marginLeft: '56em'}}>
                  <button id="button4id" className="af-class-button1" style={{fontWeight: 'bold'}}>Let's Collaborate</button>
                </div>
              </div>
            </div>
            {/* collabModal 4 */}
            <div id="collabModal4" className="af-class-modalContract">
              <div className="af-class-modalContract-content">
                <div style={{marginLeft: '25em'}}>
                  <div id="close10" className="af-class-close">×</div>
                </div>
                <p>Let's Collaborate</p>
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '.8em'}} className="af-class-modalContract-Detail-content">
                      <p>Contract Details</p>
                      <form action="/action_page.php">
                        <textarea name="message" rows={2} cols={30} defaultValue={""} />
                        <br /><br />
                      </form>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <p />
                    <p />
                    <p style={{marginLeft: '3em'}}>Add image</p>
                  </div>
                </div>
                <p />
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '7em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Add money</button>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <div style={{marginLeft: '3em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Send contract</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="myModal5" className="af-class-modal">
              {/* Modal content */}
              <div className="af-class-modal-content">
                <div style={{marginLeft: '50em'}}>
                  <div id="close5" className="af-class-close">×</div>
                </div>
                <p>Chatting with John Doe5</p>
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <div style={{marginLeft: '56em'}}>
                  <button id="button5id" className="af-class-button1" style={{fontWeight: 'bold'}}>Let's Collaborate</button>
                </div>
              </div>
            </div>
            {/* collabModal 5 */}
            <div id="collabModal5" className="af-class-modalContract">
              <div className="af-class-modalContract-content">
                <div style={{marginLeft: '25em'}}>
                  <div id="close11" className="af-class-close">×</div>
                </div>
                <p>Let's Collaborate</p>
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '.8em'}} className="af-class-modalContract-Detail-content">
                      <p>Contract Details</p>
                      <form action="/action_page.php">
                        <textarea name="message" rows={2} cols={30} defaultValue={""} />
                        <br /><br />
                      </form>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <p />
                    <p />
                    <p style={{marginLeft: '3em'}}>Add image</p>
                  </div>
                </div>
                <p />
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '7em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Add money</button>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <div style={{marginLeft: '3em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Send contract</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="myModal6" className="af-class-modal">
              {/* Modal content */}
              <div className="af-class-modal-content">
                <div style={{marginLeft: '50em'}}>
                  <div id="close6" className="af-class-close">×</div>
                </div>
                <p>Chatting with John Doe6</p>
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <p />
                <div style={{marginLeft: '56em'}}>
                  <button id="button6id" className="af-class-button1" style={{fontWeight: 'bold'}}>Let's Collaborate</button>
                </div>
              </div>
            </div>
            {/* collabModal 6 */}
            <div id="collabModal6" className="af-class-modalContract">
              <div className="af-class-modalContract-content">
                <div style={{marginLeft: '25em'}}>
                  <div id="close12" className="af-class-close">×</div>
                </div>
                <p>Let's Collaborate</p>
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '.8em'}} className="af-class-modalContract-Detail-content">
                      <p>Contract Details</p>
                      <form action="/action_page.php">
                        <textarea name="message" rows={2} cols={30} defaultValue={""} />
                        <br /><br />
                      </form>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <p />
                    <p />
                    <p style={{marginLeft: '3em'}}>Add image</p>
                  </div>
                </div>
                <p />
                <div className="af-class-row">
                  <div className="af-class-column1">
                    <div style={{marginLeft: '7em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Add money</button>
                    </div>
                  </div>
                  <div className="af-class-column1">
                    <div style={{marginLeft: '3em'}}>
                      <button className="af-class-button1" style={{fontWeight: 'bold'}}>Send contract</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */