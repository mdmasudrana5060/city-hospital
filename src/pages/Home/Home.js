import React from 'react';
import Banner from '../Home/Banner/Banner';
import Doctors from './Doctors/Doctors';

import Services from './Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>



        </div>
    );
};

export default Home;