import React from "react";
import BotCard from "./BotCard";
// import BotSpecs from "./BotSpecs";

function BotCollection(props) {
  const { bot, addBot, deleteBot } = props;

  return (
    <div className="ui four column grid">
      <div className="row">
        {bot.map((bot) => {
          return (
            <>
              <BotCard bot={bot} handleBot={addBot} deleteBot={deleteBot} />
              {/* <BotSpecs bot={bot} handleBot={addBot} /> */}
            </>
          );
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
