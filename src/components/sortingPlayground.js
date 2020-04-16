import React, { Component } from 'react'
import SortItem from './sortItem'

class SortingPlayground extends Component {

    render() {
        return this.props.items.map((item) => (
            <SortItem key={Math.floor((Math.random() * 100000) + 1)} num={item[0]} color={item[1]} style={SortItemStyle} />
        ));
    }
}

const SortItemStyle = {
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block'
}

export default SortingPlayground;
