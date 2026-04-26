import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function ScaleWithLine() {
  return (
    <section className="relative h-screen w-full overflow-hidden [--pattern:var(--color-neutral-300)] dark:[--pattern:var(--color-neutral-700)] bg-neutral-200 dark:bg-neutral-800">
      {/* Content sits between the frame lines */}
      <div className="max-w-7xl shadow-lg mx-auto w-full h-full flex items-center justify-center relative">
        {/* Frame lines - full viewport width */}
        <HorizontalScaleLine className="absolute top-0 w-screen mx-auto" />
        <HorizontalScaleLine className="absolute bottom-0 w-screen mx-auto" />
        <VerticalScaleLine className="absolute left-0 h-screen mx-auto" />
        <VerticalScaleLine className="absolute right-0 h-screen mx-auto" />

        <div className="size-full p-14 bg-white/10 dark:bg-black/10">
          <div className="relative p-10 size-full flex flex-col justify-between">
            <img
              src="https://assets.aceternity.com/components/mountains-snow.webp"
              alt="image"
              className="w-full h-full object-cover mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none absolute inset-0"
            />

            <nav className="flex items-center justify-between mt-3 relative z-25">
              <div className="flex items-center gap-6">
                <h2 className="tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-blue-400 to-blue-800 text-shadow-lg font-bold text-3xl text-shadow-blue-600/10">
                  ClipaAi
                </h2>
                <a href="#" className="text-neutral-700 dark:text-neutral-300 text-xl">
                  Features
                </a>
                <a href="#" className="text-neutral-700 dark:text-neutral-300 text-xl">
                  About Us
                </a>
                <a href="#" className="text-neutral-700 dark:text-neutral-300 text-xl">
                  Pricing
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <ModeToggle />
                <Button className="py-2 px-2 bg-linear-to-r from-blue-400 to-blue-800 text-white text-xs">
                  Get Started
                  <ArrowRight />
                </Button>
                <Button className="py-2 px-2">Sign In</Button>
              </div>
            </nav>

            {/* ✅ FIXED HERO SECTION */}
            <div className="flex flex-col items-center justify-center text-center px-4 md:px-10 py-10 md:py-16 z-10">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Welcome to ClipaAi
              </h1>

              <p className="mt-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
                ClipaAi is a platform for creating and sharing AI-powered
                content.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-3 bg-linear-to-r from-blue-400 to-blue-800 text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" className="px-6 py-3">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Lines */}
            <Lines className="mask-b-from-10% absolute inset-x-0 top-0" />
            <Lines className="mask-b-from-10% absolute inset-x-0 bottom-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

const HorizontalScaleLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-14 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border-(--pattern)",
        className,
      )}
    />
  );
};

const VerticalScaleLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-full w-14 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-x border-(--pattern)",
        className,
      )}
    />
  );
};

const Lines = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "h-14 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.5rem)]",
        className,
      )}
    />
  );
};