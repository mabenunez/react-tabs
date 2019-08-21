import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

/* 
-Insert the component Tabs inside its parent/container
-Inside <Tabs><Tabs/>, set JSX tags with the atribute 'label' -and a string value for it- as direct children of Tabs
-Inside them, insert the content that will be displayed when the tab with the value of the 'label' atribute is clicked
*/

class Tabs extends Component {

    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired /* Requires at least two tags ([0] and [1]) inside of <Tabs><Tabs/> */
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ 
            activeTab: tab 
        });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children
            },
            state: {
                activeTab
            }
        } = this;
    return (
        <section className="tabSection">
            <ol className="tabBar">
                {children.map((child) => { const { label } = child.props;
                    return (
                        <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem}/>
                    );
                })}
            </ol>

            <div>
                {children.map((child) => {
                    if (child.props.label !== activeTab) 
                        return undefined;
                    return child.props.children;
                })}
            </div>
        </section>
    );
  }
}
export default Tabs;