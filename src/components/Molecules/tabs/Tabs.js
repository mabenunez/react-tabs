import React, { Component } from 'react';
import styles from './tabs.module.css'
import colors from '../../../constants/colors'

/*When to use Tabs:
-You have 2-9 different categories of content. If you have more, consider using a list
-Category names are relatively short and predictable, both in terms of position and copy (i.e. they match the prototype).
-The number of categories is unlikely to change on a regular basis.
-The categories are similar in nature; it makes logical sense that they’re tabbed together.
-The categories fit in a single row. 
-Avoid using tabs inside tabs
*/


class Tabs extends Component {
    constructor(props) {
        super(props)
        let style = this.props.tabs.map( (s, ids, arr) => {
            if (ids === 0) {
                return (
                    {borderBottomColor: colors.glOrange}
                )
            } else {
                return (
                    {borderBottomColor: colors.glGrayLigth}
                )
            }
            
        })

        this.state = style
        console.log(this.state)
        console.log(this.state[0])
    }
    changeBorderColor = (e) => {
        this.setState({
            [e.currentTarget.id] : { borderBottomColor : colors.glOrange }
    })
        console.log(e.currentTarget.id)
    }

    render() {
        const childrenTabs = this.props.tabs.map( (t, idt, arr) => {
            return (
                <li style={this.state[idt]} onClick={this.changeBorderColor} className={styles.tabItem} key={idt} id={idt}>
                    <p className={styles.tabItemTitle} >{t.title}</p>
                </li>
            )
        })
        
        return(
            <section className={styles.tabSection}>
                <ul className={styles.tabBar}>
                    {childrenTabs}
                </ul>
            </section>
        )
    }
} 


export default Tabs;

/*

style={{marginRight: spacing + 'em'}}


    class Tabs extends Component {
    render() {
        return (
            <section className={styles.tabSection}>
                <div className={styles.tabBar}>
                    <TabItem></TabItem>
                </div>
            </section>
        )
    }
}
*/
/*
class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                borderBottomColor: colors.glGrayLigth
            }
        }
    }
    changeBorderColor = (e) => {
        this.setState({
          style : {
            borderBottomColor: colors.glOrange
          }
        })
    }
    //ALGO ASI
    showContent = (id, arrayAFiltrar, idDeLaTabClickeada) => {
        const filteredContent = arrayAFiltrar.filter(cont => {
            return cont.id === idDeLaTabClickeada
        })
        filteredContent.style = 'display: none'
    }
    render() {
        const childrenTabs = this.props.tabs.map( (t, idt, arr) => {
            return (
                <li style={this.state.style} onClick={this.changeBorderColor} className={styles.tabItem} key={idt} id={idt}>
                    <p className={styles.tabItemTitle} >{t.title}</p>
                </li>
            )
        })
        const tabContent = this.props.tabs.map( (c, idc, arr) => {
            return (
                <div key={idc} id={idc}>
                    {c.content}
                </div>
            )
        })
        console.log(childrenTabs)
        return(
            <section className={styles.tabSection}>
                <ul className={styles.tabBar}>
                    {childrenTabs}
                </ul>
                <div>
                    {tabContent}
                </div>
            </section>
        )
    }
} 


export default Tabs;
*/