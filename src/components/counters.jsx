/* REV. 1.4 NOTES:
   Added a reset button and implemented its "onIncrement" handling method.
   Made the state from local to global for all components.
   Added a Navbar.
   Rendered all webpage elements inside of App component by placing all children elements inside App.js.
   Moved all handling events/state components to App.js.
   Total number of counters displayed on navbar.
*/

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
        <div>
            <button 
                onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2"
                > Reset
            </button>
            { this.props.counters.map(counter => (
                <Counter key={counter.id}
                 onDelete={this.props.onDelete}
                 onIncrement={this.props.onIncrement}
                counter={counter} />
            ))}
        </div>
        );
    }
};
 
export default Counters;