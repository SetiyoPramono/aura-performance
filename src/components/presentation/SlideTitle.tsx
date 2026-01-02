import { Calendar, User } from "lucide-react";

const SlideTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center px-4">
      <div className="space-y-8 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass opacity-0 fade-up">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-muted-foreground">Laporan Bulanan</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 fade-up stagger-1">
          Laporan Akuntabilitas &{" "}
          <span className="gradient-text">Kinerja Bulanan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground opacity-0 fade-up stagger-2">
          Web Development & IT Support
        </p>

        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 opacity-0 fade-up stagger-3">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground">Januari 2025</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass">
            <User className="w-5 h-5 text-accent" />
            <span className="text-foreground">Tim Web Development</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default SlideTitle;
