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

  const closeNotes = () => {
    setIsNotesOpen(false);
  }

  return (
    <div>
      <div className="window-container">
        {isNotesOpen &&
          <div>
            <img
              src="src/assets/notes/notes-app-background.png" 
              alt="Notes App Background"
              className="notes-background"
            ></img>
            <Button onClick={closeNotes}>
              <img
                src="src/assets/notes/notes-close-button.png"
                alt="Notes Close Button"
                className="notes-close-btn"
              ></img>
            </Button>
            <Box className="notes-thumnail-container">
              {/* notes container */}
            </Box>
          </div>
        }
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
