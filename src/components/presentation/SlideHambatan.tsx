import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const SlideHambatan = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hambatan & <span className="gradient-text">Solusi</span>
          </h2>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Kendala */}
          <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/20 opacity-0 fade-up stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-destructive">Kendala</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Terjadi error pada panel <span className="text-destructive font-medium">(aaPanel/HestiaCP)</span> di 
              server Vultr yang menyebabkan gangguan pada beberapa layanan.
            </p>
          </div>

          {/* Arrow for Desktop */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
          </div>

          {/* Solusi */}
          <div className="p-8 rounded-2xl bg-success/10 border border-success/20 opacity-0 fade-up stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-success">Solusi</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Melakukan <span className="text-success font-medium">monitoring intensif</span> dan 
              konsultasi dengan pakar server (Konsultan) untuk stabilisasi sistem.
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="p-4 rounded-xl glass flex items-center justify-center gap-3 opacity-0 fade-up stagger-3">
          <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
          <span className="text-muted-foreground">Status: Sistem telah stabil kembali</span>
        </div>
      </div>
    </div>
  );
};

export default SlideHambatan;
