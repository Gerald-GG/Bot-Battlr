import React, { useEffect, useState } from 'react';
import "./BotCollection.css";

function BotCollection({ enlistBot, showBotSpecs, enlistedBots }) {
  
  const [bots, setBots] = useState([]);

  useEffect(() => {

    // Fetch data from a local server
    fetch("http://localhost:3000/bots") 
      .then(response => response.json()) 
      .then(data => setBots(data));
  }, []);

  return (
    // Render the component's content
    <div className="container">
      <h2>Bot <span>Collection</span></h2>
      <div className="bot-card-container">
        {bots.map(bot => (
          // Map through the "bots" array and create a bot card for each bot
          <div className={`bot-card ${enlistedBots.some(b => b.id === bot.id) ? 'enlisted' : ''}`} key={bot.id} 
          onClick={() => showBotSpecs(bot)}>
            {/* Bot-card div contains bot information and a button to enlist a bot */}
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            {enlistedBots.some(b => b.id === bot.id) ? (
              // If the bot is already enlisted, display an "Enlisted" message
              <p className="enlisted-message">Enlisted</p>
            ) : (
              // If the bot is not enlisted, display an "Enlist" button
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
