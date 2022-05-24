import { Button, TextField, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';

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

  }

  useEffect(() => {
    
  },[])



  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className="App">
      <h1 className='App-header'>Chat - Bot</h1>
      <Box sx={{  m:10, border: '1px solid grey', padding: "1px 1px 1px 1px", margin: "1% 10%", height:"75vh", borderRadius:"10px"}}>
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
          <TextField  id="outlined-basic" label="Message" variant="outlined" value={message} onChange={handleMessageChange} onKeyDown={e => sendMessageWithEnter(e)} />
          <Button
          sx={{
            m: 1, width: '5%', height:'7ch', ml:0
          }}
          variant="outlined" onClick={sendMessage}>Send</Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
