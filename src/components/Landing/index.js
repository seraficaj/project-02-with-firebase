import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card } from "semantic-ui-react";

const Landing = () => (
  <div>
    <Carousel autoPlay infiniteLoop transitionTime={500}>
      <div>
        <img src="https://m.theepochtimes.com/assets/uploads/2015/06/10/CheekToCheek_03.jpg" />
        <p className="legend">Gaga gets 'cheeky' in London!</p>
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/lGkqNVrgFWE/maxresdefault.jpg" />
        <p className="legend">Slayler Swift!!</p>
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/lGkqNVrgFWE/maxresdefault.jpg" />
        <p className="legend">Slaylena Gomez!!</p>
      </div>
    </Carousel>
    {/* This next section is for the cards below the banner */}

    <div class="ui link card">
      <div class="content">
        <div class="header">Slaytina</div>
        <div class="meta">The $7 Billion Woman</div>
        <div class="description">
          Legs 5 inches longer than Naomi Smalls With the modelling capabilities
          of Raja the Gemini A waist 3 inches smaller than Violet Chachki I give
          you... Slaytina!
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
