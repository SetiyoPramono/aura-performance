import { Target, Search, TrendingUp, Rocket } from "lucide-react";

const plans = [
  {
    icon: Search,
    title: "Audit GSC Berkala",
    description: "Review hasil Google Search Console untuk meningkatkan performa SEO website yayasan",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Optimasi Performa",
    description: "Peningkatan kecepatan loading dan Core Web Vitals seluruh website",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Rocket,
    title: "Ekspansi Otomasi",
    description: "Implementasi workflow AI Agent untuk efisiensi operasional",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const SlideNextPlan = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Rencana Kerja <span className="gradient-text">Bulan Depan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Next Action Plan
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 opacity-0 fade-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${plan.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <plan.icon className={`w-7 h-7 ${plan.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        {/* Priority Badge */}
        <div className="flex justify-center opacity-0 fade-up stagger-4">
          <div className="px-6 py-3 rounded-full glass border-primary/30">
            <span className="text-muted-foreground">Prioritas Utama: </span>
            <span className="text-primary font-medium">SEO & Analytics Optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideNextPlan;
