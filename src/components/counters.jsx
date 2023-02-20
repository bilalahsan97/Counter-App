/* REV. 1.3 NOTES:
    Created a new file"counters.jsx".
    Rendered multiple countersby importing from "counter.jsx".
    Assigned unique ids to each counter.
*/

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0 },
            {id: 2, value: 0 },
            {id: 3, value: 0 },
            {id: 4, value: 0 }
        ]
     };

    render() { 
        return (
        <div>
            { this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value} />
                ))}
        </div>
        );
    }
}
 
export default Counters;