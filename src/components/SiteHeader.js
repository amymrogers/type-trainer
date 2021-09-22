import React, { Component } from 'react';
import logo from '../logo.svg';

class SiteHeader extends React.Component {
    render() {
        return (<div class="flex flex-row items-center text-md p-4 bg-white shadow">
            <img class="w-10 mr-1 p-1" src={logo} />
            <p class="text-xl font-sans font-bold text-gray-800 invisible md:visible">Type Trainer</p>
        </div>);
    }
}

export default SiteHeader;