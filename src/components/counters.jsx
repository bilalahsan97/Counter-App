/* REV. 1.5 NOTES:
   Navbar component changed from class component to a Stateless Functional Component.
   Argument destructred by passing in the component directly as a parameter such as "{totalCounters}".
*/

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        // Argument destructred "this.props" .git
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
        <div>
            <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
                > Reset
            </button>
            { this.props.counters.map(counter => (
                <Counter key={counter.id}
                 onDelete={onDelete}
                 onIncrement={onIncrement}
                counter={counter} />
            ))}
        </div>
        );
    }
};
 
export default Counters;