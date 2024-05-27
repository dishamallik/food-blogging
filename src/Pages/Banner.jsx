const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/yFHxRJn/banner.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-rose-300">Hello Foodies</h1>
            <p className="mb-5 text-3xl text-rose-100 ">We're the secret ingredient for home cooks.</p>
            <button className="btn btn-outline bg-rose-400">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  