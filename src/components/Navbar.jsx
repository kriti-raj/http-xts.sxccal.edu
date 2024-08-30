const Navbar = ({ Logo }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-8 py-2 bg-gradient-to-r from-transparent to-transparent shadow-lg">
        <div className="flex items-center">
          <img className="h-16 w-16" src={Logo} alt="Logo" />
        </div>
        <h1 className="font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black-900 via-gray-300 to-purple-600 text-center flex-1 drop-shadow-md">
          XAVERIAN THEATRICAL SOCIETY
        </h1>
      </div>
    </>
  );
};

export default Navbar;
