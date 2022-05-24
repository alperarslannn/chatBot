import { Button, TextField, Box } from '@mui/material';
import { useEffect, useState } from 'react';
//import * as io from 'socket.io-client';
import io from 'socket.io-client';
import './App.css';

// const socket = io({
//   path: 'http://localhost:8000/chat',
//   transports: ['polling', 'websocket'],
// });

const socket = io.connect('http://localhost:8000');
//let chatSok = io.connect('http://localhost:8000/chat');


function App() {

  const [message, setMessage] = useState('');

  let sendMessageWithEnter = (e) => {
    if(e.keyCode === 13){
      sendMessage();
    }
  }

  let sendMessage = () => {
    let lastChild = document.querySelector(".chatBox");

    const node = document.createElement("div");
    node.classList.add("clientText");
    node.classList.add("chatText");

    const textNode = document.createTextNode(message);
    node.appendChild(textNode);

    lastChild.appendChild(node);

    setMessage("");

    document.querySelector(".chatBox").scrollTop = document.querySelector(".chatBox").scrollHeight;

    getBotAnswer();
  }


  let getBotAnswer = () => {
    // socket.on("newMessage", function(message) {
		// 	displayMessage(message.user.username, message.message);
		// });

    console.log("bot func")
    console.log(socket.connected);

    // socket.on("connection", (socket) => {
    //   console.log("succeed");
    //   socket.emit("frontendSaysHi");
    // });

    socket.emit("chat","HelloWorld");

    // socket.on("chat", function(data){
    //   console.log("data");
    // });
    

    // chatSok.on("chat", (socket) => {
    //   console.log("succeed");
    //   socket.emit("frontendSaysHi".toString);
    // });
  }

  useEffect(() => {
    socket.on("connect", function(){
      console.log("connected");
      alert("connected");
    } )

    //   chatSok.on("connect", function(){
    //   console.log("connectedToChatSok");
    //   alert("connectedToChatSok");
    // } )
  },[])

  


  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className="App">
      <h1 className='App-header'>Chat - Bot</h1>
      <Box className={"chatContainer"} sx={{  m:10, border: '1px solid grey', padding: "1px 1px 1px 1px", margin: "1% 10%", height:"75vh", borderRadius:"10px"}}>
        <Box sx={{ margin: "3% 5% 0px 5%", border: '1px solid grey', maxHeight: "80%", minHeight:"80%" ,overflow:"auto" }} className={"chatBox"} >
          <div className='clientText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX </div>
          <div className='serverText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX  aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa</div>
          <div className='clientText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX </div>
          <div className='serverText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX  aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa</div>
          <div className='clientText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX </div>
          <div className='serverText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX  aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa</div>
          <div className='clientText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX </div>
          <div className='serverText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX  aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa</div>
          <div className='clientText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX </div>
          <div className='serverText chatText'>HiAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaX  aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa</div>
        </Box>
        <Box
          sx={{
            display:"flex",
            justifyContent:"center",
            '& .MuiTextField-root': { m: 1, width: '60%', height:'10%' },
            margin: "5px 5%"
          }}
        >
          <TextField sx={{
            backgroundColor:'#ffe5ec', color:'white', border:"1px solid grey", borderRadius:'10px'
          }}  id="outlined-basic" label="Message" value={message} onChange={handleMessageChange} onKeyDown={e => sendMessageWithEnter(e)} />
          <Button
          sx={{
            m: 1, width: '5%', height:'7ch', ml:0, backgroundColor:'#b388eb', color:'white',borderColor:'#fdc5f5'
          }}
          variant="outlined" onClick={sendMessage}>Send</Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
