import './chatBot.scss'



const Title = () => {
    return (
        <div className='title-container'>
      <div className='title-header'>
        <div className='title-left'>
          <div className=>
            <img src="./robot.png" alt="AI" />
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