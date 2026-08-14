import React, { useState, useContext } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    newChat
  } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">

      <div className="top">

        <img
          onClick={() => setExtended(prev => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu"
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Plus" />

          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">

            <p className="recent-title">
              Recent Chats
            </p>

            {prevPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img
                    src={assets.message_icon}
                    alt="Message icon"
                  />

                  <p>{item.slice(0, 18)} ...</p>
                </div>
              )
            })}

          </div>
        )}

      </div>

      <div className="bottom">

        <div className="bottom-item recent-entry">
          <img
            src={assets.question_icon}
            alt="Question icon"
          />
          {extended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img
            src={assets.history_icon}
            alt="History icon"
          />
          {extended && <p>History</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img
            src={assets.setting_icon}
            alt="Settings icon"
          />
          {extended && <p>Settings</p>}
        </div>

      </div>

    </div>
  )
}

export default Sidebar