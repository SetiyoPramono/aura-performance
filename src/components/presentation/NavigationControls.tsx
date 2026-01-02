import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  currentSlide: number;
  totalSlides: number;
}

const NavigationControls = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
  isFullscreen,
  onToggleFullscreen,
  currentSlide,
  totalSlides,
}: NavigationControlsProps) => {
  return (
    <>
      {/* Desktop Side Navigation */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={onNext}
          disabled={!canNext}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Top Right Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        <div className="px-3 py-1.5 rounded-full glass text-sm">
          <span className="text-primary font-medium">{currentSlide + 1}</span>
          <span className="text-muted-foreground"> / {totalSlides}</span>
        </div>
        <button
          onClick={onToggleFullscreen}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-20 left-0 right-0 z-50 flex justify-center gap-4 px-4">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          className="flex-1 max-w-32 h-12 rounded-xl glass flex items-center justify-center gap-2 hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Prev</span>
        </button>
        <button
          onClick={onNext}
          disabled={!canNext}
          className="flex-1 max-w-32 h-12 rounded-xl glass flex items-center justify-center gap-2 hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <span className="text-sm">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default NavigationControls;
