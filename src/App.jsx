import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy'; 
import BotSpecs from './Components/BotSpecs'; 
import SortBar from './Components/SortBar';
import './App.css';

function App() {

  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null); 
  const enlistBot = (bot) => {
    // Define a function to enlist a bot in the user's bot army
    if (!enlistedBots.some(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const showBotSpecs = (bot) => {
    // Define a function to show the specifications of a bot
    setSelectedBot(bot);
  };

  const goBackToList = () => {
    // Define a function to go back to the list of bots
    setSelectedBot(null);
  };

  return (
    <div className="app-container">
      <main>
        <section className="bot-collection">
          {selectedBot ? (
            // If a bot is selected, display the "BotSpecs" component with details
            <BotSpecs bot={selectedBot} enlistBot={enlistBot} goBackToList={goBackToList} />
          ) : (
            // If no bot is selected, display the BotCollection component
            <BotCollection
              enlistBot={enlistBot}
              showBotSpecs={showBotSpecs}
              enlistedBots={enlistedBots}
            />
          )}
        </section>
        <section className="your-bot-army">
          <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
        </section>
      </main>
    </div>
  );
}

export default App; 