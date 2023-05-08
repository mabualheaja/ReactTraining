import { useState } from 'react'
import Avatar from "./components/Avatar";



function App() {
  const user = {
    fullName: "Hedy Lamarr",
    AvatarUrl: "https://i.imagur.com/yXOvdOSs.jpg",
    theme : {
      color: "yellow",
      backgroundColor: "black"
    }
  };

  return (
    <Avatar fullName={user.fullName} avatarUrl={ user.AvatarUrl}/>
  );
}

export default App
