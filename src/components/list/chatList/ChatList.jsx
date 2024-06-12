import React, { useState } from 'react';
import "./chatList.css";

const ChatList = () => {

  //going to chnage the state of the add button to Minus.
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="public\search.png" alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <img src={ addMode ? "public/minus.png" :"public/plus.png" } alt="" className='add' onClick={()=> setAddMode( (prev) => !prev)} />
        </div>
          {/* here in item we have user image, after fetching the data from database it's gonna be dynamic */}
          {/* If we increase the items in this container.They are gonna overflow, so we have implememnt scroll feature. Let's see how to do that in our chatList.css. */}
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
        <div className="item">
          <img src="public\avatar.png" alt="" />
          <div className="texts">
            <span>TJ</span>
            <p>Ram Ram Ji</p>
          </div>
        </div>
    </div>
  )
}

export default ChatList