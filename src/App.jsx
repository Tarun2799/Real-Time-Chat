import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";


const App = () => {

const user = true;
// If user is present that we are able to see the app.

  return (
    <div className='container'>

      {user ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>
      ) : (<Login/>) }
      <Notification/>
    </div>
  )
}

export default App