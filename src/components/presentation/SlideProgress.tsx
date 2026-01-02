interface SlideProgressProps {
  current: number;
  total: number;
}

const SlideProgress = ({ current, total }: SlideProgressProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-primary"
                : i < current
                ? "bg-primary/50"
                : "bg-muted"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideProgress;
