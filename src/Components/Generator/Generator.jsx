import React from 'react';
import { TbClipboardCopy } from "react-icons/tb";

class Generator extends React.Component {

    constructor(props, state) {
        super(props);
        this.state = {short:null};
        this.library = {};
    };


    async getSmol() {

        const urlInput = document.getElementById("urlInput");
        const url = encodeURIComponent(urlInput.value);

        const response = await fetch(`https://is.gd/create.php?format=simple&url=${url}`);

        if (response.ok) {
            if (this.library[url]) {
                this.setState({ short: this.library[url] });
            }
            else {
          const shortUrl= await response.text();
          this.setState({ short: shortUrl });
          this.library[url] = shortUrl;
            }
        } else {
            throw new Error('Something went wrong. Try again');
        }
      }

      componentDidMount() {
        this.setState({ short: null });
    }



    render () {


        const toggleSmol = () => {
            this.getSmol();
        }

        return (
        <div className='border-4 bg-gray-300 border-solid border-black p-2 w-full md:w-[40rem] lg:w-[60rem] h-[20rem] mt-[7rem] mx-auto flex flex-col justify-center items-center'>
            <div className='mx-auto'>
                <h1 className='text-gray-600 text-3xl font-medium'>Paste your long link here</h1>
            </div>
            <div className='mt-6 w-[15rem] lg:w-[20rem] h-10'>
                <input id='urlInput' type="url" className='w-full h-full rounded-lg bg-gray-50' />
            </div>
            <div className='mt-6 '>
                <button onClick={toggleSmol} className='border rounded-lg text-gray-900 bg-gray-50 p-1 hover:bg-gray-900 hover:text-gray-50'>Get Smol</button>
            </div>
            <div>
                <h1 className={this.state.short ? 'text-gray-600 text-3xl font-medium mt-6' : 'hidden'} >Your smol link is: {this.state.short} <button className='hover:scale-110 hover:text-gray-900' type="button" onClick={() => {navigator.clipboard.writeText(this.state.short)}}><TbClipboardCopy/></button></h1>

            </div>
        </div>
        )
    }
}

export default Generator;
