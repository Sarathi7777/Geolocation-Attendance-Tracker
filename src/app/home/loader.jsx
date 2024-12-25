import Image from 'next/image';



const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen z-50 bg-white">
      <Image src="/favicon.svg" height={150} width={150} alt="Loader" />
    </div>
  );
};

export default Loader;
