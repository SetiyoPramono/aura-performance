import { useState, useEffect, useCallback } from "react";
import SlideTitle from "./SlideTitle";
import SlideExecutive from "./SlideExecutive";
import SlideMaintenance from "./SlideMaintenance";
import SlideWebDev from "./SlideWebDev";
import SlideDonasi from "./SlideDonasi";
import SlideInfrastruktur from "./SlideInfrastruktur";
import SlideRiset from "./SlideRiset";
import SlideHambatan from "./SlideHambatan";
import SlideNextPlan from "./SlideNextPlan";
import SlideClosing from "./SlideClosing";
import SlideProgress from "./SlideProgress";
import NavigationControls from "./NavigationControls";

const slides = [
  { id: 1, component: SlideTitle },
  { id: 2, component: SlideExecutive },
  { id: 3, component: SlideMaintenance },
  { id: 4, component: SlideWebDev },
  { id: 5, component: SlideDonasi },
  { id: 6, component: SlideInfrastruktur },
  { id: 7, component: SlideRiset },
  { id: 8, component: SlideHambatan },
  { id: 9, component: SlideNextPlan },
  { id: 10, component: SlideClosing },
];

const PresentationViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setSlideKey((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      setSlideKey((prev) => prev + 1);
    }
  }, [currentSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goToNext, goToPrev]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Slide Content */}
      <div 
        key={slideKey} 
        className="min-h-screen py-16 md:py-8 flex items-center"
      >
        <div className="w-full">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <NavigationControls
        onPrev={goToPrev}
        onNext={goToNext}
        canPrev={currentSlide > 0}
        canNext={currentSlide < slides.length - 1}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />

      {/* Progress Indicator */}
      <SlideProgress current={currentSlide} total={slides.length} />
    </div>
  );
};

export default PresentationViewer;
