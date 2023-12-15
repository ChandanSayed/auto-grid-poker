import Image from 'next/image';
import logo from '/public/home/logo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="max-w-designSize mx-auto px-4 md:px-100 pt-5 md:pt-10 relative">
      <div className="w-[760px] h-[561px] rounded-full blur-[200px] bg-redBoxGradient opacity-40 absolute -z-10 -left-64 -top-48"></div>
      <div className="absolute -z-10 w-[400px] h-[400px] rounded-full blur-[200px] opacity-50 bg-blueBoxGradient -top-20 -right-24"></div>
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-40 lg:w-auto" />
      </Link>
      <div className="flex flex-col-reverse lg:flex-row pt-14 md:pt-20">
        <div className="lg:w-1/2 max-lg:mt-6 max-lg:text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight md:leading-tight">Get your workstation organized automatically with the click of a button.</h2>
          <p className="text-sm md:text-2xl font-bold mt-3.5 mb-6 md:my-8">No Register. No Login Required</p>
          <button className="text-lg bg-buttonGradient cursor-pointer rounded-full px-16 py-3.5 hover:opacity-80">Download Now</button>
        </div>
        <div className="lg:w-1/2">
          <img src={'/home/flow.gif'} alt="Flow" />
        </div>
      </div>
    </section>
  );
};

export default Header;
