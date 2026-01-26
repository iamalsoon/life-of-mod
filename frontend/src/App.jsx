import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'

function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const viewNotes = () => {
    if (isNotesOpen) {
      setIsNotesOpen(false)
    } else {
      setIsNotesOpen(true)
    }
  }

  return (
    <div>
      <div className="window-container">
        <div id="notes-window">
          {isNotesOpen &&
            <img 
              src="src/assets/notes/notes-app-background.png" 
              alt="notes-app-background"
              className="notes-background hidden"
            ></img>
          }
          {!isNotesOpen &&
            <img
              src="src/assets/notes/notes-app-background.png" 
              alt="notes-app-background"
              className="notes-background"
            ></img>
          }
        </div>
      </div>
      <div className="taskbar-container">
        <Button onClick={viewNotes}>
          <img 
            src="src/assets/notes/notes-app-button.png" 
            alt="Notes App Button" 
            className="notes-button"
          ></img>
        </Button>
      </div>
    </div>
  )
}

export default App
