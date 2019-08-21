import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired, /* Requires activeTab state from parent (Tabs.js) */
        label: PropTypes.string.isRequired, /* Obtained from the parent component of Tabs.js as props */
        onClick: PropTypes.func.isRequired /* Requires onClick prop with onClickTabItem function from parent (Tabs.js) */
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: { activeTab, label }
        } = this;

        let className = 'tabBar-item';
        let style = {} /* inline style for the active state. Must be inside an object */
        if (activeTab === label) {
            className += ' tabBar-active';
            style += {borderBottomColor: '#FFFFFF'} /* Property that uses value from the constants file. */
        }
        
        return (
            <li className={className} style={{style}} onClick={onClick}>
                {label}
            </li>
        );
    }
}

export default Tab;