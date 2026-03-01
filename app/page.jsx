'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedOn from './components/FeaturedOn';
import Episodes from './components/Episodes';
import Player from './components/Player';
import Clips from './components/Clips';
import Guests from './components/Guests';
import SocialProof from './components/SocialProof';
import Newsletter from './components/Newsletter';
import BookCTA from './components/BookCTA';
import Footer from './components/Footer';
import AudioPlayerBar from './components/AudioPlayerBar';

export default function Home() {
    const [playerVisible, setPlayerVisible] = useState(false);
    const [playerTitle, setPlayerTitle] = useState('');

    const handlePlay = (title) => {
        setPlayerTitle(title);
        setPlayerVisible(true);
    };

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <FeaturedOn />
                <Episodes onPlay={handlePlay} />
                <Player />
                <Clips />
                <Guests />
                <SocialProof />
                <Newsletter />
                <BookCTA />
            </main>
            <Footer />
            <AudioPlayerBar
                title={playerTitle}
                visible={playerVisible}
                onClose={() => setPlayerVisible(false)}
            />
        </>
    );
}
