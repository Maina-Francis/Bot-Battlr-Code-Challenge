import React from "react";
import BotCard from "./BotCard";

function BotCollection(props) {
  const { bot, addBot, deleteBot } = props;

  return (
    <div className="ui four column grid">
      <div className="row">
        {bot.map((bot) => {
          return <BotCard bot={bot} handleBot={addBot} deleteBot={deleteBot} />;
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
