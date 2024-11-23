import wave from "./../assets/memojis/wave.png";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={wave}
          alt="Memoji of Sam Neale"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold baskervville">
            Hello, I'm Sam Neale!
          </h1>
          <p className="py-6 text-xl inria-serif">
            I write code and fly planes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
