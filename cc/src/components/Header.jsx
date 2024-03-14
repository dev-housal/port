import React from 'react';
import image from '../assets/bg.jpg'
function Header(props) {
    return (
        <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen py-10">
            <div className="flex w-11/12 justify-center space-x-3 mx-auto ">
                <div className="flex flex-col w-1/4 justify-center items-center ">
                    <img src={image} alt="image" className='rounded-full w-52 h-52' />
                    <div className="flex flex-col justify-center items-center w-52 my-2">
                        <div className="">
                            <h4 className='text-white text-lg'>Haitham Dihaji</h4>
                            <h4 className='text-white text-lg font-bolder'>Full Stack developer</h4>
                            <h4 className='text-white text-lg font-bolder'>Github <i class="fa-brands fa-github"></i></h4>
                        </div>
                    </div>
                </div>
                <div className="flex w-3/4 px-2 py-6 flex-col">
                    <h2 className='text-2xl h-fit py-1 border-b text-white border-b-indigo-500'>Lorem, ipsum.</h2>
                    <div className="flex flex-col">
                        <p className='text-justify leading-10 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, natus numquam quae velit laboriosam nihil minus, qui quia sint aliquam vitae animi consectetur culpa repudiandae possimus vel odio odit eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione natus obcaecati assumenda sequi. Exercitationem illo veniam praesentium repudiandae iste ipsa, ratione illum. Fugiat omnis eius magnam soluta, sint, eligendi quibusdam a pariatur ratione, nulla nostrum. Deleniti fuga sint perspiciatis.
                        </p>
                        <a href="" className='font-sans font-medium my-4 border-b-2 text-white hover:text-indigo-500 border-b-sky-600 w-fit text-lg'>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;