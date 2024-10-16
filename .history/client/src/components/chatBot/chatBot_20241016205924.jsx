import './chatBot.scss'



const Title = () => {
    return (
        <div className={container}>
      <div className={header}>
        <div className={left}>
          <div className={image}>
            <img src="./robot" alt="AI" />
          </div>
          <p>AI Assistant</p>
        </div>
      </div>
    </div>
    )
    }


const ChatBot = () => {
  return (
    <div className='chatbot-container'>
        <Title />
    </div>
  )
}

export default ChatBot