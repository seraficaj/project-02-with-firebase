import React, { Component } from 'react';
import { withAuthorization } from '../../Session';
import { Header, Image, Segment, Container } from 'semantic-ui-react';

class Cities extends Component {
  setCity = e => {
    e.preventDefault();
    this.props.setCity(e);
  };

  testLog = (city) => (e) => {
    e.preventDefault()
    console.log(city)
    // "this", "e", "id"
  }


  render() {
    return (
      <div>
        <Header as="h1" attached="top">
          AttachedHeadr
        </Header>
        <h1>Cities</h1>
        <Container>
          <Segment.Group>
            <Segment>
              <Image
                src="/assets/SF1.jpg"
                as="a"
                size="massive"
                href="/"
                label={{
                  as: 'a',
                  color: 'black',
                  content: 'San Francisco',
                  icon: 'travel',
                  ribbon: true
                }}
                onClick={this.testLog('san-francisco')}
              />
              
            </Segment>
            <Segment>
              <Image
                src="/assets/London1.jpg"
                as="a"
                size="massive"
                href="/"
                label={{
                  as: 'a',
                  color: 'black',
                  content: 'London',
                  icon: 'travel',
                  ribbon: true
                }}
                name='london'
                onClick={this.testLog('london')}
              />
            </Segment>
            <Segment>
              <Image
                src="/assets/Sydney1.jpg"
                as="a"
                size="massive"
                href="/"
                label={{
                  as: 'a',
                  color: 'black',
                  content: 'Sydney',
                  icon: 'travel',
                  ribbon: true
                }}
                name='sydney'
                onClick={this.testLog}
              />
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Cities);
