import '../styles/loader.css'; // Create this CSS file in the same directory

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black z-50">
    <div data-glitch="IEI CUIET" class="glitch text-7xl">IEI CUIET</div>
    </div>
  );
};

export default Loader;
