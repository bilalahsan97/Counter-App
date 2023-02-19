/* REV. 1.2 NOTES:
    INCREMENT BUTTON ADDED
    EXTRA DIV REMOVED BY USING React.Fragment
    STATE PROPERTY ADDED TO CONTER CLASS
    Dynamically render button colors depending on counter.
    Handle event added to increment button by using an arrow function
*/

import React, { Component } from 'react'

// React.Fragment is used to remove the extra div element.

export default class Counter extends Component {
    // anything that needs to be changed dynamically goes into the state property.
    state = {
        count: 0
    };
    
    //css properties in camelCase notation 

    /*constructor() {
        super(); // must call base constructor by calling a super() function.
        this.handleIncrement = this.handleIncrement.bind(this);
    }  this method could be used to bind events or an arrow fnction as used below*/


    handleIncrement = (product) => {
        console.log(product)
        this.setState ({ count: this.state.count + 1 })
    };

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.handleIncrement() }
                    className='btn bn-secondary bn-sm'
                 >
                    Increment
                </button>
            </React.Fragment>
        );
    }
    //whenever the map method is used to render a list of items, for each item you must set a key attribute.

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count
    }
}
 