import React, { Component } from 'react'

// React.Fragment is used to remove the extra div element.

export default class Counter extends Component {
    // anything that needs to be changed dynamically goes into the state property.
    
    
    //css properties in camelCase notation 

    /*constructor() {
        super(); // must call base constructor by calling a super() function.
        this.handleIncrement = this.handleIncrement.bind(this);
    }  this method could be used to bind events or an arrow fnction as used below*/

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn bn-secondary bn-sm m-2'
                 >
                    Increment
                </button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)}
                 className="btn btn-danger btn-sm m2"
                 >
                    Delete
                </button>
            </div>
        )
    };
    //whenever the map method is used to render a list of items, for each item you must set a key attribute.

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "zero" : count
    }
}
 