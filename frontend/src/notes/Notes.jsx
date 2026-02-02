import { useState } from 'react'
import './Notes.css'
import { Box, Button } from '@mui/material'

function Notes() {
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
              src="/assets/notes/notes-app-background.png" 
              alt="Notes App Background"
              className="notes-background"
            ></img>

            <Button onClick={closeNotes}>
              <img
                src="/assets/notes/notes-close-btn.png"
                alt="Notes Close Button"
                className="notes-close-btn"
              ></img>
            </Button>
            {/* <Box className="notes-prev-container">
              <Button className="notes-thumbnail-btn">
                <img 
                  src="/assets/notes/notes-thumbnail-btn.png" 
                  alt="Notes Thumbnail Button"
                  className="notes-thumbnail-btn"
                ></img>
              </Button>
              
            </Box> */}
          </div>
        )
        }
      </div>
      <div className="taskbar-container">
        <Button onClick={viewNotes}>
          <img 
            src="/assets/notes/notes-app-btn.png" 
            alt="Notes App Button" 
            className="notes-button"
          ></img>
        </Button>
      </div>
    </div>
  )
}

export default Notes