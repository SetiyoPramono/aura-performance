import { MessageCircle, Heart, FileSpreadsheet, Zap } from "lucide-react";

const SlideDonasi = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
              Pilar 3
            </div>
            <Zap className="w-6 h-6 text-success" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Sistem Donasi & <span className="gradient-text">Integrasi Otomasi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fokus pada konversi dan alur kerja otomatisasi
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Automation */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-1 group">
            <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp Automation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sinkronisasi <span className="text-success font-medium">Starsender</span> untuk 
              notifikasi otomatis di web crowdfunding
            </p>
          </div>

          {/* Donasi Aja */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-2 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Donasi Aja</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Setup sistem donasi terintegrasi
            </p>
            <div className="space-y-2">
              {["rumahbayi.org", "pantibayi.id", "yayasanalhidayah.id"].map((site, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground">{site}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integrasi Data */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-3 group">
            <div className="w-14 h-14 rounded-2xl bg-highlight/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-7 h-7 text-highlight" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrasi Data</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fix script <span className="text-highlight font-medium">Google Spreadsheet</span> untuk 
              formulir pendaftaran santri dan donasi agar data masuk real-time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDonasi;
