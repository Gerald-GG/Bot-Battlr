import React from 'react'; 
import './YourBotArmy'; 

function YourBotArmy({ enlistedBots, setEnlistedBots }) {

  const releaseBot = (bot) => {
    // Define a function to release a bot from the army
    const updatedList = enlistedBots.filter(b => b.id !== bot.id);
    setEnlistedBots(updatedList);
  };

  const dischargeBot = async (bot) => {
    try {
      // Delete the bot from the backend
      await fetch(`http://localhost:8000/bots/${bot.id}`, {
        method: 'DELETE',
      });

      // Remove the bot from the frontend by filtering the enlistedBots array
      const updatedList = enlistedBots.filter(b => b.id !== bot.id);
      setEnlistedBots(updatedList);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="enlisted-bots-container">
        {enlistedBots.map((bot) => (
          // Map through the enlistedBots array and create a display for each enlisted bot
          <div className="enlisted-bot" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button className="discharge-button" onClick={() => dischargeBot(bot)} style={{ color: 'red' }}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
