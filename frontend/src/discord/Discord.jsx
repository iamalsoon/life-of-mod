import { Button } from '@mui/material'
import './Discord.css'

export default function Discord(props) {
  return (
    <div>
      <div className='discord-container'>
        <div className='page-container'>
          {props.isDiscordOpen && (
            <div>
              {/* friendpage (homepage) */}
              {/* should make interchangeable with other pages */}
              <img
                src='assets/discord/discord-friendpage.png'
                alt="Discord Friend Page"
                className="discord-page"
              ></img>
              <Button onClick={props.viewDiscord}>
                <img
                  src='assets/discord/discord-x.png'
                  alt='Discord Close Button'
                  className='page-close-btn'
                ></img>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}