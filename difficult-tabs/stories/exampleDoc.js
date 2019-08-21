import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes must be commented (Jsdoc) and default props must be assigned
// Remember in case of being a stateless functional component the proptypes must be below the class

/**
 * Description of the component
 */
class Example extends Component {
    static propTypes = {
        /** This prop does whatever */
        exampleProp: PropTypes.string,
        /** This other prop does another */
        anotherProp: PropTypes.number,
    }
    static defaultProps = {
        exampleProp: 'Example',
        anotherProp: 17
    }
    
    state = {
        foo: ''
    }
    render() {
        return (<div></div>);
    }
}

export default Example;