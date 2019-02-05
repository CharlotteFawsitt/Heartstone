import React, { Component } from "react";
import CardView from "./CardView";
import axios from "axios";
import logo from "./images/mainImage.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="columns is-multiline is-centered">
          <div className="column is-4">
            <img src={logo} style={{ width: "444px", height: "277.5px" }} />
            <p>
              Hearthstone is a free-to-play online digital collectible card game
              developed and published by Blizzard Entertainment. Originally
              subtitled Heroes of Warcraft, Hearthstone builds upon the existing
              lore of the Warcraft series by using the same elements,
              characters, and relics. It was first released for Microsoft
              Windows and macOS in March 2014, with ports for iOS and Android
              releasing later that year. The game features cross-platform play,
              allowing players on any supported device to compete with one
              another, restricted only by geographical region account limits.
            </p>
            <br />
            <p>
              The game is a turn-based card game between two opponents, using
              constructed decks of 30 cards along with a selected hero with a
              unique power. Players use their limited mana crystals to play
              abilities or summon minions to attack the opponent, with the goal
              of destroying the opponent's hero. Winning matches and completing
              quests earn in-game gold, rewards in the form of new cards, and
              other in-game prizes. Players can then buy packs of new cards
              through gold or microtransactions to customize and improve their
              decks. The game features several modes of play, including casual
              and ranked matches, drafted arena battles, and single-player
              adventures. New content for the game involves the addition of new
              card sets and gameplay, taking the form of either expansion packs
              or adventures that reward the player with collectible cards upon
              completion.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
