import React, { Component } from 'react';
import styles from './tabs.module.css'


class TabItem extends Component {
    render() {
        return (
        <div className={styles.tabItem}>
            <p className={styles.tabItemTitle}>Title</p>
        </div>
        )
    }
}

export default TabItem;