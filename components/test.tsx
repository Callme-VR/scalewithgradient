import { cn } from "@/lib/utils";

export default function ScaleWithLine() {
  return (
    <section className="relative h-screen w-full overflow-hidden [--pattern:var(--color-neutral-300)]">
      {/* Content sits between the frame lines */}
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center relative">
        {/* Frame lines - full viewport width */}
        <HorizontalScaleLine className="absolute top-0 w-screen mx-auto" />
        <HorizontalScaleLine className="absolute bottom-0 w-screen mx-auto" />
        <VerticalScaleLine className="absolute left-0 h-screen mx-auto" />
        <VerticalScaleLine className="absolute right-0 h-screen mx-auto" />

        <div className="size-full p-14">
          <div className="relative p-10 size-full">
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
        "h-14 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] [background-size:10px_10px] border-y border-(--pattern)",
        className,
      )}
    />
  );
};

const VerticalScaleLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-full w-14 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] [background-size:10px_10px] border-x border-(--pattern)",
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
