import './Taskbar.css'
import { Button } from '@mui/material'

function Taskbar(props) {

  return (
    <div>
      <div className="taskbar-container">
        <Button onClick={props.viewNotes}>
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

export default Taskbar