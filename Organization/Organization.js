import React from 'react';
import { Jumbotron } from 'reactstrap';
import Header from '../Header/Header';


class Organization extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
              <Header/>
                  <Jumbotron>
                    <h1 className="display-1">Welcome to Cognizant</h1>
                    <p className="lead">At Cognizant, we are committed to providing our associates with an enriching, rewarding and encouraging work culture. We believe in thinking out of the box, in doing big things early! With that thought in mind, we welcome you into the Cognizant family with an expectation that your experience with us would be nothing less. With that hope you enjoy your journey with Cognizant and we wish you stellar success in all that you undertake while working with the organization.</p>
                  </Jumbotron>
                </div>
                );
    }

}
export default Organization;