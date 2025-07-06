//Hero.tsx
import data from "../../data/data.json";

export default function Hero() {
  return (
    // <section className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img
    //       src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
    //       alt="profile"
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div className="pr-4">
    //       <h1 className="text-5xl font-bold"> {data.hero.greeting}</h1>
    //       <h2 className="text-3xl font-bold"> {data.hero.description} </h2>
    //       <p className="py-6"> </p>
    //     </div>
    //   </div>
    // </section>
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content max-w-none w-full p-0 gap-0">
        {/* Content Container - 60% */}
        <div className="flex-[0.6] flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              <span className="typing-animation">{data.hero.greeting}</span>
            </h1>
            <h2 className="text-3xl font-bold text-base-content/80 mb-6">
              {data.hero.description}
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed">
              Your additional content goes here. This space now has proper
              proportions and typography hierarchy.
            </p>
            {/* Optional CTA buttons */}
            <div className="mt-8 flex gap-4">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
        </div>

        {/* Image Container - 40% */}
        <div className="flex-[0.4] min-h-screen relative flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
          <img
            src="your-transparent-portrait.png"
            alt="profile"
            className="max-w-full max-h-[80vh] object-contain drop-shadow-2xl"
          />
          {/* Optional decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
