import { HardDrive, Bug, ShieldCheck, Wrench } from "lucide-react";

const items = [
  {
    icon: HardDrive,
    title: "Backup Routine",
    description: "Full backup pada 40+ domain",
    details: ["Alfatihah Group", "Yayasan Alhidayah", "Unit Ambulance", "dll"],
    color: "text-primary",
  },
  {
    icon: Bug,
    title: "Security Patching",
    description: "Pembersihan & optimasi keamanan",
    details: ["14.000 komentar spam dibersihkan", "Optimasi Cloudflare berkala", "Pembaruan SSL Expired"],
    color: "text-success",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Perbaikan error sistem",
    details: ["Fix error login 'user lost'", "Perbaikan akses wp-admin", "Website bermasalah"],
    color: "text-accent",
  },
];

const SlideMaintenance = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              Pilar 1
            </div>
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Maintenance & <span className="gradient-text">Keamanan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fokus pada stabilitas sistem dan perlindungan data
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 opacity-0 fade-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideMaintenance;
