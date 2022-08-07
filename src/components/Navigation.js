const Navigation = () => {
  return (
    <>
      <div className="container p-6 ">
        <nav className="flex ff-barlow-cond text-white mb-10 nav-bg justify-between px-[10rem]">
          <button className="uppercase letter-spacing-2">
            <span className="mr-2 text-white font-bold">00</span>active
          </button>
          <button className="uppercase letter-spacing-2">
            <span className="mr-2 text-white font-bold">01</span>hovered
          </button>
          <button className="uppercase letter-spacing-2">
            <span className="mr-2 text-white font-bold">02</span>idle
          </button>
        </nav>

        <nav className="flex ff-barlow-cond nav-bg justify-between px-[10rem]">
          <button className="uppercase text-accent letter-spacing-2">
            moon
          </button>
          <button className="uppercase text-accent letter-spacing-2">
            mars{" "}
          </button>
          <button className="uppercase text-accent letter-spacing-2">
            europa{" "}
          </button>
        </nav>
      </div>
      <div className="m-10 flex dot">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="m-10 flex flex-col number-nav">
        <button className="fs-400">1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </>
  );
};

export default Navigation;
