import React, { useEffect, useState } from 'react';
import '../assets/styles/ChatInterface.css';
import profilePic from '../assets/images/Logo.png';

const messagesData = [
  {
    type: 'received',
    content: [
      'The gas evolved on heating CH<sub>3</sub>MgBr in methanol is:',
      '(a) Methane',
      '(b) Ethane',
      '(c) Propane',
      '(d) HBr'
    ]
  },
  {
    type: 'sent',
    content: ['Unable to solve, please give me the solution']
  },
  {
    type: 'received',
    content: ['Sure, the answer is', '(a) Methane']
  },
  {
    type: 'received',
    content: [
      'Methylmagnesium bromide (CH<sub>3</sub>MgBr) is a Grignard reagent, and when it reacts with methanol, it undergoes a typical Grignard reaction where the methanol acts as an acidic proton source. The gas evolved in this reaction is methane (CH<sub>4</sub>).'
    ]
  }
];

const ChatInterface = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const animateMessages = () => {
      if (currentMessageIndex < messagesData.length) {
        setVisibleMessages(prevMessages => [
          ...prevMessages,
          messagesData[currentMessageIndex]
        ]);
        setCurrentMessageIndex(prevIndex => prevIndex + 1);
      }
    };

    const timeout = setTimeout(animateMessages, 1000);
    return () => clearTimeout(timeout);
  }, [currentMessageIndex]);

  useEffect(() => {
    const chatMessagesContainer = document.querySelector('.chat-messages');
    if (chatMessagesContainer) {
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="chat-header">
          <img src={profilePic} alt="Profile" />
          <span>Quila</span>
        </div>
        <div className="chat-messages">
          {visibleMessages.map((message, index) => (
            <div
              key={index}
              className={`chat-message message-${message.type}`}
              style={{ animation: 'fadeIn 0.5s' }}
            >
              {message.content.map((text, textIndex) => (
                <p key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input type="text" placeholder="Type a message" />
          <button>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;