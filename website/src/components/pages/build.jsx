import logo from "/logo_plain.svg"

const Build = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-100">
            <img src={logo} alt="aristocrat" className="w-1/3 h-1/3 md:w-1/5 md:h-1/5"/>
            <h2 className="text-4xl md:text-6xl text-accent font-semibold my-10 md my:24">Work in Progress...</h2>
            <p className="text-md md:text-lg text-accent font-semibold">Our exciting new website will launch soon.</p>
            <p className="text-md md:text-lg text-accent font-semibold">Come back and check it out.</p>  
        </div>
    );
};
  

export default Build