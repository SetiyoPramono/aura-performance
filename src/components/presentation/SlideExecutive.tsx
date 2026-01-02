import { Globe, Shield, Server, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    value: "40+",
    label: "Asset Digital",
    description: "Total Website Dikelola",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    value: "14.000+",
    label: "Spam Dibersihkan",
    description: "Migrasi SSL & Cloudflare",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Server,
    value: "40+",
    label: "Backup Rutin",
    description: "Monitoring Vultr/HestiaCP",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Cpu,
    value: "AI",
    label: "Workflow n8n",
    description: "WhatsApp Automation",
    color: "text-highlight",
    bg: "bg-highlight/10",
  },
];

const SlideExecutive = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ringkasan <span className="gradient-text">Eksekutif</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Highlight utama pencapaian bulan ini
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 opacity-0 fade-up`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className="space-y-1">
                <p className={`text-3xl md:text-4xl font-bold ${item.color}`}>
                  {item.value}
                </p>
                <p className="text-foreground font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Text */}
        <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-5">
          <p className="text-muted-foreground leading-relaxed">
            Bulan ini fokus pada <span className="text-primary font-medium">stabilitas sistem</span>, 
            <span className="text-success font-medium"> keamanan data</span>, dan 
            <span className="text-accent font-medium"> inovasi teknologi</span> untuk mendukung 
            operasional seluruh unit bisnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideExecutive;
