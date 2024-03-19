import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
    render() {
        const { items } = this.props; // props'tan items'i al
        return (
            <div className="sidebar">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

