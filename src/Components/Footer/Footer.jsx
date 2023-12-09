import React from 'react';
import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";

export default function Footer() {

    return (
        <div className='footer mt-[7rem] bg-gray-300 grid grid-cols-2 content-center justify-center text-center'>
            <div className='col-span-1 my-10'>
                <h1 className='text-gray-600 text-xl '><strong> About </strong><br /><br />This site and service brought to you by Michael Harwood and <a className='underline' href="https://is.gd/apishorteningreference.php">is.gd</a></h1>
            </div>
            <div className='col-span-1 my-10 mx-auto'>
                <h1 className='text-gray-600 text-xl my-auto'><strong> Contact </strong><br /><br /></h1>
                <div className='flex flex-row text-3xl space-x-4'>
                    <a className='text-gray-600 hover:text-gray-900 hover:scale-110' href="https://github.com/MHarwood13"><BsGithub /><span class="sr-only">Link to personal GitHub</span></a>
                    <a className='text-gray-600 hover:text-gray-900 hover:scale-110' href="https://www.linkedin.com/in/michael-harwood-503378235/"><SiIndeed /><span class="sr-only">Link to Indeed profile</span></a>
                </div>
            </div>
        </div>
    )
}
