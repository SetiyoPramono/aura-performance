import { Lightbulb, Bot, HardDrive, Users, GraduationCap, Layers } from "lucide-react";

const SlideRiset = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-info/20 text-info text-sm font-medium">
              Pilar 5
            </div>
            <Lightbulb className="w-6 h-6 text-info" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Riset, Pengembangan & <span className="gradient-text">SDM</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Investasi waktu untuk kemajuan tim ke depan
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Riset Teknologi */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-info" />
              </div>
              <h3 className="text-xl font-semibold">Riset Teknologi</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">AI Agent Workflow</p>
                  <p className="text-sm text-muted-foreground">Eksperimen menggunakan n8n</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Kichat WA Bot</p>
                  <p className="text-sm text-muted-foreground">Setup aplikasi otomasi</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <HardDrive className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Optimasi Backup</p>
                  <p className="text-sm text-muted-foreground">Tanpa membebani disk space</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pemberdayaan Tim */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="text-xl font-semibold">Pemberdayaan Tim</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-highlight/20 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-highlight" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Briefing Mingguan</p>
                  <p className="text-sm text-muted-foreground">Tim Web Development</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Training Donasi Aja</p>
                  <p className="text-sm text-muted-foreground">Untuk CS RANS</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">5 Sub-domain Training</p>
                  <p className="text-sm text-muted-foreground">Lingkungan khusus member baru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideRiset;
