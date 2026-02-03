import './Discord.css'

export default function Discord(props) {
  return (
    <div>
      <div className='page-container'>
        {props.isDiscordOpen && (
          <div>
            {/* friendpage (homepage) */}
            <img
              src='assets/discord/discord-friendpage.png'
              alt="Discord Friend Page"
              className="discord-page"
            ></img>
          </div>
        )}
      </div>
    </div>
  )
}