import logo from "/logo_plain.svg"

const Nav = () => {
    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="aristocrat" className="w-1/3 h-1/3 md:w-1/5 md:h-1/5"/>
                <a className="text-xl text-accent">aristocrat</a>
            </div>
        </div>
    );
};
  

export default Nav