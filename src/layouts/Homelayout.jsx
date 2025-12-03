import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from 'daisyui/components/navbar';
import NAvbar from '../components/NAvbar';
import LeftAside from '../components/homeLayouts/LeftAside';
import RightAside from '../components/homeLayouts/RightAside';

const Homelayout = () => {
    return (
        <div>
            <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <NAvbar></NAvbar>
            </nav>
            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
               <aside className='col-span-3 sticky top-2 h-fit'>
                <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
               <aside  className='col-span-3 sticky top-2 h-fit'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default Homelayout;