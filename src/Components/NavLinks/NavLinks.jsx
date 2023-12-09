import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/dist';

class NavLink extends React.Component {

    render () {
        return (
            <div>
                <BrowserRouter>
                <nav className='grow flex justify-end items-center space-x-4 md:space-x-[2rem] xl:space-x-[4rem] text-base md:text-xl xl:text-2xl 2xl:space-x-[7rem] 2xl:text-3xl'>
                    <div className='hover:underline font-bold text-gray-600'><Link onClick={this.scrollToBottom}>About</Link></div>
                    <div className='hover:underline font-bold text-gray-600'><Link onClick={this.scrollToBottom}>Contact</Link></div>
                    <div className='hover:underline font-bold text-gray-600'><Link to="https://youtu.be/dQw4w9WgXcQ" target="_blank">Secret</Link></div>
                </nav>
                </BrowserRouter>
            </div>
        )
    }
    scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
}

export default NavLink;
