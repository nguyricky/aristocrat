import logo from "/logo_plain.svg"

const Nav = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-6">
        <section className="md:col-span-1"></section>
        <div className="col-span-1 md:col-span-4 min-h-[8rem] w-full py-5 md:py-10">
            <div className="flex flex-row align-middle items-center">
                <img src={logo} alt="Logo" className="w-[40px] mx-auto md:mx-0"/>
                <h2 className="mx-3 text-lg text-accent font-medium">aristocrat</h2>
            </div>  
        </div>
        <section className="md:col-span-1"></section>
      </div>
    );
  };
  
export default Nav;