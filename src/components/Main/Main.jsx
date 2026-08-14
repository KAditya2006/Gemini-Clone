import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context)

  return (
    <div className="main">

      <div className="nav">
        <p>Gemini</p>

        <img
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>

      <div className="main-container">

        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Aditya.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">

              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img
                  src={assets.compass_icon}
                  alt="Compass icon"
                />
              </div>

              <div className="card">
                <p>Briefly summarize this concept: Urban planning</p>
                <img
                  src={assets.bulb_icon}
                  alt="Bulb icon"
                />
              </div>

              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img
                  src={assets.message_icon}
                  alt="Message icon"
                />
              </div>

              <div className="card">
                <p>Improve the readability of the following code</p>
                <img
                  src={assets.code_icon}
                  alt="Code icon"
                />
              </div>

            </div>
          </>
        ) : (
          <div className="result">

            <div className="result-title">
              <img
                src={assets.user_icon}
                alt="User Icon"
              />

              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">

              <img
                src={assets.gemini_icon}
                alt="Gemini icon"
              />

              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: resultData
                  }}
                ></p>
              )}

            </div>

          </div>
        )}

        <div className="main-bottom">

          <div className="search-box">

            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />

            <div>

              <img
                src={assets.gallery_icon}
                alt="Gallery Icon"
              />

              <img
                src={assets.mic_icon}
                alt="Mic icon"
              />

              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="Send icon"
                />
              ) : null}

            </div>

          </div>

        </div>

        <p className="bottom-info">
          Gemini may display inaccurate info, including about people,
          so double check its responses.
        </p>

      </div>

    </div>
  )
}

export default Main