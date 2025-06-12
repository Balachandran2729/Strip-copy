import { useState, useEffect, useRef } from 'react';
import moduler from '../assets/videos/moduler.mov';
import payment from '../assets/videos/payment.mov';
import offering from '../assets/videos/offering.mov';
import connection from '../assets/videos/connection.mov';
import billing from '../assets/videos/billing.mov';

const Content2 = () => {
  const videoSources = {
    mod: moduler,
    pay: payment,
    bill: billing,
    connect: connection,
    offer: offering,
  };

  const [activeSection, setActiveSection] = useState('mod');
  const sectionRefs = {
    mod: useRef(null),
    pay: useRef(null),
    bill: useRef(null),
    connect: useRef(null),
    offer: useRef(null),
  };

  const contentData = {
    mod: {
      title: 'Modular solutions',
      heading: 'A fully integrated suite of financial and payments products',
      desc: `Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.`,
      btnText: 'Start with Modular',
    },
    pay: {
      title: 'Payments',
      heading: 'Accept and optimise payments, globally',
      desc: `Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.`,
      btnText: 'Start with Payments',
    },
    bill: {
      title: 'Billing',
      heading: 'Capture recurring revenue',
      desc: `Manage flat rate, usage-based, and hybrid pricing models, minimise churn, and automate finance operations.`,
      btnText: 'Start with Billing',
    },
    connect: {
      title: 'Connect',
      heading: 'Set up multi-party payments and payouts',
      desc: `Integrate payments into your platform or marketplace for end-to-end payments experiences.`,
      btnText: 'Start with Connect',
    },
    offer: {
      title: 'Issuing',
      heading: 'Build a fintech offering with banking-as-a-service',
      desc: `Launch, manage, and scale a commercial card programme without any setup fees.`,
      btnText: 'Start with Issuing',
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.7 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-slate-100">
      {/* Desktop View */}
      <div className="hidden md:flex relative">
        {/* Content */}
        <div className="w-1/2">
          {Object.entries(sectionRefs).map(([id, refKey]) => {
            const { title, heading, desc, btnText } = contentData[id];
            return (
              <div
                key={id}
                className="conainer mx-15 mt-16 justify-start text-left"
                ref={refKey}
                data-id={id}
              >
                <p className="text-black pb-12 font-bold text-xl">{title}</p>
                <h1 className="text-4xl font-bold">{heading}</h1>
                <div className="py-10">
                  <p className="text-l">{desc}</p>
                </div>
                <p className="inline-block font-bold bg-blue-400 rounded-full px-4 py-1 text-white text-m ml-10 hover:bg-blue-900">
                  {btnText}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sticky Video */}
        <div className="w-1/2 relative">
          <div className="sticky top-0 h-screen flex items-center justify-center p-10">
            <video
              key={activeSection}
              src={videoSources[activeSection]}
              autoPlay
              muted
              loop
              className="rounded-xl shadow-xl w-full h-full object-cover max-w-2xl max-h-2xl"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {Object.keys(contentData).map((id) => {
          const { title, heading, desc, btnText } = contentData[id];
          return (
            <div key={id} className="relative text-black my-10">
              <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                <video
                  key={id}
                  src={videoSources[id]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-6 left-4 right-4 bg-opacity-40 backdrop-blur-sm p-4 rounded-xl shadow-md">
                  <p className="text-blue-300 text-sm font-bold">{title}</p>
                  <h1 className="text-xl font-bold my-2">{heading}</h1>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
              <div className="mt-4 ml-4">
                <p className="inline-block font-bold bg-blue-400 rounded-full px-4 py-1 text-white text-sm hover:bg-blue-900">
                  {btnText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content2;
