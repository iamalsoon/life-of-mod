import { useState } from 'react'
import './App.css'
import Notes from './notes/Notes'
import Taskbar from './taskbar/Taskbar';

function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const viewNotes = () => {
    setIsNotesOpen(!isNotesOpen);
  }
  
  return (
    <div>
      <Notes viewNotes={viewNotes} isNotesOpen={isNotesOpen}/>
      <Taskbar viewNotes={viewNotes} />
    </div>
  )
}

export default App
