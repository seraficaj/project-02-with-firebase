import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Landing.css';

const Landing = () => (
  <div>
    <Carousel autoPlay infiniteLoop transitionTime={500} useKeyboardArrows>
      <div>
        <img src="https://m.theepochtimes.com/assets/uploads/2015/06/10/CheekToCheek_03.jpg" />
        <p className="legend">Gaga gets 'cheeky' in London!</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
        <p className="legend"> Swift's spectacular Sunday in Sydney!!</p>
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/lGkqNVrgFWE/maxresdefault.jpg" />
        <p className="legend">Slaylena Gomez!!</p>
      </div>
    </Carousel>
    <hr />
    {/* This next section is for the cards below the banner */}
    <Card.Group itemsPerRow={3}>
      <Card
        link
        header="Slaytina"
        meta="The $7 Billion Woman"
        description={[
          'Legs 5 inches longer than Naomi Smalls With the modelling capabilities of Raja the Gemini A waist 3 inches smaller than Violet Chachki I give you... Slaytina!'
        ].join('')}
        // the .join in this was for the original way the text had to be input. Evey line had to be a seperate literal and divided by comma's to avoid putting on a single line
      />
      <Card
        link
        header="Rick Sanchez"
        meta="Scientist"
        description={[
          'Rick is a genius scientist whose alcoholism and reckless,',
          ' nihilistic behavior are a source of concern for his family.'
        ].join('')}
      />
      <Card
        link
        header="Slaytina"
        meta="The $7 Billion Woman"
        description={[
          'Legs 5 inches longer than Naomi Smalls With the modelling capabilities of Raja the Gemini A waist 3 inches smaller than Violet Chachki I give you... Slaytina!'
        ].join('')}
      />
    </Card.Group>
    <hr />
  </div>
);

export default Landing;
