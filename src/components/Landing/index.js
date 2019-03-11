import React from 'react';

const Landing = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">Slayfarer</div>
          </h1>
          <h2>World's Best Travel Site.</h2>
          <div
            onClick={() => history.push('/signin')}
            className="ui huge white inverted button"
          >
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
