import { useState } from 'react'
import './App.css'
import Notes from './notes/Notes'
import Taskbar from './taskbar/Taskbar'
import Discord from './discord/Discord'

function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isDiscordOpen, setIsDiscordOpen] = useState(false);

  const viewDiscord = () => {
    setIsDiscordOpen(!isDiscordOpen);
  }

  const viewNotes = () => {
    setIsNotesOpen(!isNotesOpen);
  }
  
  return (
    <div>
      <Notes viewNotes={viewNotes} isNotesOpen={isNotesOpen}/>
      <Taskbar viewNotes={viewNotes} viewDiscord={viewDiscord} />
      <Discord viewDiscord={viewDiscord} isDiscordOpen={isDiscordOpen}/>
    </div>
  )
}

export default App
