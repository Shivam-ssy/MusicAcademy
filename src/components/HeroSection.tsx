import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/spotlight-new";

function HeroSection() {
  return (
    <div className="flex w-full bg-grid-white/[0.03] relative overflow-hidden flex-col items-center justify-center h-screen">
      <Spotlight
      gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, 0.08) 0%, hsla(210, 100%, 55%, 0.05) 50%, hsla(210, 100%, 45%, 0.02) 80%)"

      gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.06) 0%, hsla(210, 100%, 55%, 0.03) 80%, transparent 100%)"
      
      gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.04) 0%, hsla(210, 100%, 45%, 0.02) 80%, transparent 100%)"
      />
      <h1 className="md:text-6xl text-4xl text-center px-5 md:px-0 font-bold md:mb-5">
        Master the art of music
      </h1>
      <p className="max-w-4xl w-full px-5 md:px-0 text-sm text-center">
        Dive into our comprehensive music courses and transform your musical
        journey today. Whether you&apos;re a beginner or looking to refine your
        skills, join us to unlock your true potential
      </p>
      <div className="mt-5">
        <Button
          borderRadius="1.75rem"
          className="bg-black/20 dark:bg-black/50 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
