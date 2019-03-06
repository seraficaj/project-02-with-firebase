import React, {Component} from 'react';
import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import Post from '../Post';

class CitiesPage extends Component {
    state = {
        postList: [{
                        id: 1, 
                        city: 'san-francisco', 
                        poster: 123,
                        title: 'SF Bay Area',
                        date: '2019',
                        body: 'West coast best coast'
                    },
                    {
                        id: 2,
                        city: 'london',
                        poster: 123,
                        title: 'London',
                        date: '2019',
                        body: 'Cloudy, but cool tours'
                    },
                    {
                        id: 3,
                        city: 'gibraltar',
                        poster: 456,
                        title: 'Gibraltar',
                        date: '2018',
                        body: 'Discover Gibraltar'
                    }],
        currentCity: '',
    }

    setCurrentCity = (e) => {
        e.preventDefault();
        this.setState({
            currentCity: e.target.name
        })
        console.log(this.state.currentCity);
        // this.filterByCity(e.target.name);
    }

    // filterByCity = (cityName) => {
    //     console.log(cityName);
    //     let posts = this.state.postList.filter(function(post) {
    //         if (post.city === cityName) {
    //             return (posts);
    //         }
    //     })
    // }

    render() {

        let posts = this.state.postList.map((post,index) => (
            <Post title={post.title} body={post.body} key={index}/> 
          ))
        
        return (
            <div>
                <ul>
                    <li><a href='' onClick={this.setCurrentCity} name="san-francisco">San Francisco</a></li>
                    <li><a href='' onClick={this.setCurrentCity} name="london">London</a></li>
                    <li><a href='' onClick={this.setCurrentCity} name="gibraltar">Gibraltar</a></li>
                </ul>
                <div>
                    <h1>Posts</h1>
                    {posts}
                </div>
            </div>

        )
    }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(CitiesPage);