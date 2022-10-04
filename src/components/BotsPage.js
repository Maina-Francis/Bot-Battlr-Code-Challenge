import React from "react";
import { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  //useState
  const [botArmy, setBotArmy] = useState([]);
  const [bot, setBot] = useState([]);

  //fetch data from API

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((bot) => setBot(bot));
  }, []);

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        removeBot={removeBotFromTheArmy}
        deleteBot={deleteBotPermanently}
      />
      <BotCollection />
    </div>
  );
}

export default BotsPage;
