import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({

render(){
return (
    <div>
        <h1><Link to="/">Whippetgram</Link></h1>
    {/* Allows props to be passed down to children - any props from parent goes to phot or singlegrid */}
    {React.cloneElement(this.props.children, this.props)}    
    </div>
)
}
});

export default Main;