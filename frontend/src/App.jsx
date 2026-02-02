import { useState } from 'react'
import './App.css'
import { Box, Button } from '@mui/material'

function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const viewNotes = () => {
    setIsNotesOpen(!isNotesOpen);
  }

  const closeNotes = () => {
    setIsNotesOpen(false);
  }

  return (
    <div>
      <div className="window-container">
        {isNotesOpen && (
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
            <Box className="notes-prev-container">
              <Button className="notes-thumbnail-btn">
                <img 
                  src="src/assets/notes/notes-thumbnail-button.png" 
                  alt="Notes Thumbnail Button"
                  className="notes-thumbnail-btn"
                ></img>
              </Button>
              
            </Box>
          </div>
        )
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
