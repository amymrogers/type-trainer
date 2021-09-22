import React, { Component } from 'react';

class SiteFooter extends React.Component {
    render() {
        return (<div class="flex flex-col items-center text-md p-4">
            <p class="text-sm font-sans font-bold hover:text-red-400"><a href="https://amyrogers.design/">Made by Amy Rogers</a></p>
        </div>);
    }
}

export default SiteFooter;