import React, { Component } from 'react';
import { withAuthorization } from '../../../Session';

class PostForm extends Component {

    render () {
        return (
            <div>
                <form>
                    <input type='text' placeholder='Title' name='title'/>
                    <input type='text' placeholder='Comments' name='body'/>
                    <input type='text' value={this.props.currentCityId} name='cityId' />
                    <input type='text' name='userId' />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostForm);