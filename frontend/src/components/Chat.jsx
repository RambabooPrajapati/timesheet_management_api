import React, { useState } from 'react';
import '../styles/Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'Are You Done ?', time: '10:36am', sender: 'other' },
    { text: 'Not yet. let you know once i done', time: '10:38am', sender: 'self' },
    { text: 'Are You Done ?', time: '10:54am', sender: 'other' },
    { text: 'Not yet. let you know once i done', time: '10:56am', sender: 'self' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { text: newMessage, time: currentTime, sender: 'self' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type Here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>➤</button>
      </div>
    </div>
  );
};

export default Chat;
