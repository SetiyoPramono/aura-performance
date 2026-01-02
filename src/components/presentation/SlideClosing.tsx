import { Quote, Sparkles } from "lucide-react";

const SlideClosing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-4 text-center relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl relative z-10 space-y-10">
        {/* Quote Icon */}
        <div className="flex justify-center opacity-0 fade-up">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center pulse-glow">
            <Quote className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Quote */}
        <blockquote className="opacity-0 fade-up stagger-1">
          <p className="text-3xl md:text-5xl font-bold leading-tight">
            "Sistem yang stabil adalah kunci{" "}
            <span className="gradient-text">pelayanan yang maksimal.</span>"
          </p>
        </blockquote>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 opacity-0 fade-up stagger-2">
          <span className="w-16 h-px bg-border" />
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="w-16 h-px bg-border" />
        </div>

        {/* Thanks */}
        <div className="space-y-2 opacity-0 fade-up stagger-3">
          <p className="text-2xl font-semibold text-foreground">Terima Kasih</p>
          <p className="text-muted-foreground">Tim Web Development & IT Support</p>
        </div>
      </div>
    </div>
  );
};

export default SlideClosing;
