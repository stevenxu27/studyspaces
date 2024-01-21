import React from 'react';
import NavBar from '../components/NavBar.tsx';
import SideBar from '../components/SideBar.tsx';
import MainSection from '../components/MainSection.tsx';

export default function Main() {
    return (
        <>
            <NavBar search={true}/>
            <div id="background">
                <SideBar/>
                <div>
                   <MainSection/>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.4678210311436!2d-123.25525762373182!3d49.26753207139053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672b6e7ecb487%3A0xb469afb686ebb577!2sIrving%20K.%20Barber%20Learning%20Centre!5e0!3m2!1sen!2sca!4v1705832961155!5m2!1sen!2sca"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> 
                </div>
                
            </div>
        </>
    );
}
