import './Taskbar.css'
import { Button } from '@mui/material'

function Taskbar(props) {

  return (
    <div>
      <div className="taskbar-container">
        {/* notes */}
        <Button onClick={props.viewNotes}>
          <img 
            src="/assets/notes/notes-app-btn.png" 
            alt="Notes App Button" 
            className="notes-button"
          ></img>
        </Button>
        {/* discord */}
        <Button onClick={props.viewDiscord}>
          <img 
            src="/assets/discord/discord-icon.png" 
            alt="Discord App Button" 
            className="discord-button"
          ></img>
        </Button>
      </div>
    </div>
  )
}

export default Taskbar