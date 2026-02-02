import './Notes.css'
import { Box, Button } from '@mui/material'

function Notes(props) {

  return (
    <div>
      <div className="window-container">
        {props.isNotesOpen && (
          <div>
            <img
              src="/assets/notes/notes-app-background.png" 
              alt="Notes App Background"
              className="notes-background"
            ></img>

            <Button onClick={props.viewNotes}>
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
    </div>
  )
}

export default Notes