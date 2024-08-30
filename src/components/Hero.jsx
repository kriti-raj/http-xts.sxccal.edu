import {
  AboutUs,
  BgLandscape,
  ContactUs,
  Events,
  Logo,
  Gallery,
  Registrations,
  SponsorUs,
} from "./Assets.js";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

const Hero = () => {
  return (
    <>
      <div
        className="h-[100vh] w-[100vw] bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgLandscape})`,
        }}
      >
        <Navbar Logo={Logo} />
        <div className="flex-grow flex flex-col justify-end">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="col-span-1 bg-black bg-opacity-60 m-3 rounded-lg shadow-lg">
              <p className="text-xl sm:text-xl md:text-xl text-red-200 font-extrabold px-4 py-4 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg sm:px-8 text-justify">
                <span className="text-3xl">Welcome</span> to the Xaverian
                Theatrical Society! Theatre is an artform of expressions and we,
                at XTS, intend to unleash the creativity and passion for theatre
                among students. Together as a family we attempt to build a
                dedicated and consolidated team towards our future endeavours.
              </p>
            </div>
            <div></div>
            <div className="flex justify-center items-center">
              {/* <img className="h-48 w-auto" src={Gallery} alt="Gallery" /> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex md:justify-around w-full items-end px-4 py-4">
            {[
              AboutUs,
              Gallery,
              Events,
              Registrations,
              SponsorUs,
              ContactUs,
            ].map((src, index) => (
              <Cards key={index} src={src} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
