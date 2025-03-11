import wave from "./../assets/memojis/wave.png";

function Hero() {
  return (
    <div className="hero bg-primary text-primary-content min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={wave}
          alt="Memoji of Sam Neale"
          className="md:max-w-sm rounded-lg max-w-full"
        />
        <div>
          <h1 className="text-6xl font-bold baskervville">
            Hello, I'm Sam Neale!
          </h1>
          <p className="py-6 text-xl baskervville">
            I write code and fly planes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
