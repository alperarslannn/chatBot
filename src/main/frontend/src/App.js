import { Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';

//import * as io from 'socket.io-client';
import io from 'socket.io-client';
import './App.css';

const socket = io.connect('http://localhost:8000');

function App() {

  const [message, setMessage] = useState('');
  //const [userTyping, setUserTyping] = useState(false);

  let sendMessageWithEnter = (e) => {
    if(e.keyCode === 13){
      sendMessage();
    }
  }

  let sendMessage = () => {
    if(message.trim() !== ''){
      let chatBox = document.querySelector(".chatBox");
  
      const node = document.createElement("div");
      node.classList.add("clientText");
      node.classList.add("chatText");
  
      const textNode = document.createTextNode(message);
      node.appendChild(textNode);
  
      chatBox.appendChild(node);
  
      setMessage("");
  
      chatBox.scrollTop = chatBox.scrollHeight;
  
      getBotAnswer();
    }
  }


  let getBotAnswer = () => {
    // socket.on("connection", (socket) => {
    //   console.log("succeed");
    //   socket.emit("frontendSaysHi");
    // });

    //socket.emit("chat","HelloWorld");

    // function waitForUserToStopSendingMessages(message, callback){
    //   if(userTyping === true){
    //     setUserTyping(false);
    //   }
    //   else if(userTyping === false){
    //     setTimeout(callback, 1000);
    //   }
    //   console.log(message);
    // }

    // waitForUserToStopSendingMessages("HelloWorld",function(){
    //   setUserTyping(userTyping => {
    //     socket.emit("chat","HelloWorld");
    //     return true;
    //   });
    // });

    socket.emit("chat","HelloWorld");

    let counter = 0;
    
    socket.on("response",function(data){
      if(counter === 0){
        counter++;
        let chatBox = document.querySelector(".chatBox");
  
        const node = document.createElement("div");
        node.classList.add("serverText");
        node.classList.add("chatText");
  
        const textNode = document.createTextNode(data);
        node.appendChild(textNode);
  
        chatBox.appendChild(node);
  
        chatBox.scrollTop = chatBox.scrollHeight;
  
      } 
    })

  }

  useEffect(() => {
    socket.on("connect", function(data){
      if(data !== undefined){
        data.trim();
        let chatBox = document.querySelector(".chatBox");
    
        const node = document.createElement("div");
        node.classList.add("serverText");
        node.classList.add("chatText");
  
        const textNode = document.createTextNode(data);
        node.appendChild(textNode);
  
        chatBox.appendChild(node);

        chatBox.scrollTop = chatBox.scrollHeight;
      }  

    } )

  },[])

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className="App">
      <h1 className='App-header'>Chat - Bot</h1>
      <Box className={"chatContainer"} sx={{  m:10, border: '1px solid grey', padding: "1px 1px 1px 1px", margin: "1% 10%", height:"75vh", borderRadius:"10px"}}>
        <Box sx={{ margin: "3% 5% 0px 5%", border: '1px solid grey', maxHeight: "80%", minHeight:"80%" ,overflow:"auto" }} className={"chatBox"} >
           </Box>
        <Box
          sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin: "5px 5%"
          }}
        >
          <input type={'textField'} placeholder={'Message'} className={'textFieldCustom'} value={message} onChange={handleMessageChange} onKeyDown={e => sendMessageWithEnter(e)} ></input>
          <Button
          sx={[
            {m: 1, mr:0, width: '5%', height:'7ch', ml:0, backgroundColor:'#b388eb', color:'white',borderColor:'#fdc5f5', flexGrow:1},
            {'&:hover':{backgroundColor:'#a56af2', borderColor:'#fdc5f5'}}
          ]}
          variant="outlined" onClick={sendMessage}>Send</Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
