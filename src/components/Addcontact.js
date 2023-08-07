import React from 'react';

class Addcontact extends React.Component{
    render(){
        return(
            <div>
                <div className="ui main">
                <h1>Add Contact</h1>
                 <form className="ui form">
                   <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name"/>
                   </div>
                   <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email"/>
                   </div>
                   <button className="ui button blue">add</button>
                 </form>
            </div>
            </div>
        
        )
    }

}

export default Addcontact;