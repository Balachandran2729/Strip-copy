import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import '../App.css'

const Content3 = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div
      className="earth px-4 md:px-22 py-10 md:py-30 overflow-hidden relative"
      style={{
        backgroundColor: '#002c59',
        clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      {/* Globe container */}
      <div
        className="absolute top-0 md:right-0 w-full md:w-1/2 h-[400px] md:h-full flex justify-center md:block"
        style={{ zIndex: 0 }}
      >
        <Globe
          ref={globeRef}
          width={window.innerWidth < 768 ? 350 : 900}
          height={window.innerWidth < 768 ? 350 : 1100}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="green"
          atmosphereAltitude={0.25}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-[250px] md:mt-0 text-center md:text-left">
        <div className="mb-[-25]">
          <p className="text-blue-400 pb-6 md:pb-20 font-bold text-xl">Global scale</p>
        </div>
        <div className="mt-[-10] md:mt-[-40]">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-300">
            The backbone for <br className="hidden md:block" /> global commerce
          </h1>
        </div>
        <div className="py-6 md:py-10 px-2 md:px-0">
          <p className="text-base md:text-xl text-slate-300">
            Stripe makes moving money as easy and <br className="hidden md:block" /> programmable as moving data. Our teams are <br className="hidden md:block" />
            based in offices around the world and we process <br className="hidden md:block" /> hundreds of billions of dollars each year for <br className="hidden md:block" />
            ambitious businesses of all sizes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 my-10 text-white px-2 md:px-0">
          <div>
            <h4 className="text-xl md:text-2xl font-bold py-2">
              <span className="text-blue-500">|</span> 500M+
            </h4>
            <p>API requests per day, peaking at 30,000 requests per second.</p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold py-2">
              <span className="text-blue-500">|</span> 99.999%
            </h4>
            <p>historic uptime for <span className="text-blue-400">stripe services</span></p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold py-2">
              <span className="text-blue-500">|</span> 47+
            </h4>
            <p>countries with local acquiring</p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold py-2">
              <span className="text-blue-500">|</span> 135+
            </h4>
            <p>countries and payment methods supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
