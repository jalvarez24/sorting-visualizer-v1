import React, { Component } from 'react'
import '../App.css';

class SortItem extends Component {
    render() {
        return (
            <>
            <div className ="target">
                <span className="numberCircle" style={{backgroundColor: this.props.color}}><span>{this.props.num}</span></span>
            </div>
            </>
        )
    }
}

export default SortItem;
