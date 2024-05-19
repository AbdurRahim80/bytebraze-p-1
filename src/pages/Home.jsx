import Hero from "../components/Hero";
import wave from '../assets/images/wave.svg'
const Home = () => {
    return (
        <div className="flex flex-col justify-center relative  min-h-[calc(100vh-132px)]">
            <Hero/>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;