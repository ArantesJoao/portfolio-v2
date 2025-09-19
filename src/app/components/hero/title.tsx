import SocialLinks from './social-links'

const Title = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center lg:items-start text-slate-100">
        <p className="text-2xl lg:text-3xl">Hello, I&apos;m</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-purple-500 text-center leading-12">João Víctor Arantes</h1>
        <p className="text-2xl lg:text-3xl text-nowrap mt-2">Sr. Frontend Engineer</p>
        <p className="text-md lg:text-lg mt-2 max-w-sm sm:max-w-lg xl:max-w-none text-center lg:text-left lg:pr-10">I create clean, usable interfaces that make the web easier for everyone</p>
        <SocialLinks />
      </div>
    </>
  );
};

export default Title;