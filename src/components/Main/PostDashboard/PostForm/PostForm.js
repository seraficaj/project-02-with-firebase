import React, { Component } from 'react';
import { withAuthorization } from '../../../Session';
import firebase from 'firebase';

class PostForm extends Component {
        
    testPost = (e) => {
        debugger;
        e.preventDefault();
        debugger;
        e.stopPropagation();
        debugger;
        
    }


    render () {
        firebase.database().ref('cities/').on('value',function(snap){
            console.log(snap.val())
        });
        return (
            <div>
                <form>
                    <input type='text' placeholder='Title' name='name'/>
                    <input type='text' placeholder='Comments' name='body'/>
                    {/* <input type='text' value={this.props.currentCityId} name='cityId' /> */}
                    <input type='text' name='userId' />
                    <button type="submit" onSubmit={this.testPost}>Submit</button>
                </form>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostForm);