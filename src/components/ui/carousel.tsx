"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
};

export function Carousel({ children, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const update = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const frame = requestAnimationFrame(update);
    emblaApi.on("reInit", update);
    emblaApi.on("select", update);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("reInit", update);
      emblaApi.off("select", update);
    };
  }, [emblaApi, update]);

  return (
    <div className={cn("relative", className)}>
      <div className="mb-4 flex items-center justify-end gap-2">
        <Button type="button" variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev} aria-label="Previous">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext} aria-label="Next">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">{children}</div>
      </div>
    </div>
  );
}

export function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("min-w-0 flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_40%]", className)}>{children}</div>;
}
