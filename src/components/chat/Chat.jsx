import React, {useEffect, useRef, useState} from 'react';
import "./chat.css";
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
  
    const endRef = useRef(null);

    useEffect(()=>{
      endRef.current?.scrollIntoView({behaviour: "smooth"});
    },[]); 
    // run only once, empty brackets, getting back at latest message.
  

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className='chat'>
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Tarun Jhamb</span>
                    <p>Lorem ipsum dolor, sit amet.</p>
                </div>
            </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia quod laborum! Quasi eveniet, totam quae rerum id deleniti enim.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia quod laborum! Quasi eveniet, totam quae rerum id deleniti enim.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia quod laborum! Quasi eveniet, totam quae rerum id deleniti enim.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia quod laborum! Quasi eveniet, totam quae rerum id deleniti enim.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia quod laborum! Quasi eveniet, totam quae rerum id deleniti enim.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./unspalsh.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia quod laborum! Quasi eveniet, totam quae rerum id deleniti enim.</p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* whenever i'm refereshing my page, I'm getting back to the first message of my chat but i want to be at the latest message of my chat. So, to implement this i'M going to use "reference". NOTE: It's under all our messsages. Will use useRef hook. With this to handle ref, useEffect will use.*/}
        <div ref={endRef}></div>

      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={e => setText(e.target.value)}/>
        <div className="emoji">
            <img src="./emoji.png" alt="" onClick={()=>setOpen(prev => !prev)}/>
            <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat