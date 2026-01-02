import { Globe, Mail, BarChart3, Settings } from "lucide-react";

const SlideInfrastruktur = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-highlight/20 text-highlight text-sm font-medium">
              Pilar 4
            </div>
            <Settings className="w-6 h-6 text-highlight" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Administrasi IT & <span className="gradient-text">Infrastruktur</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pengelolaan aset digital dan akun perusahaan
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Domain & Hosting */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Domain & Hosting</h3>
            </div>
            <ul className="space-y-3">
              <li className="p-3 rounded-lg bg-secondary/50">
                <p className="text-sm text-foreground">Perpanjangan domain idyah.id</p>
              </li>
              <li className="p-3 rounded-lg bg-secondary/50">
                <p className="text-sm text-foreground">Lisensi Berdu (6+ landing page)</p>
              </li>
              <li className="p-3 rounded-lg bg-secondary/50">
                <p className="text-sm text-foreground">Migrasi Berdu → WordPress</p>
                <p className="text-xs text-muted-foreground mt-1">gerciq.com</p>
              </li>
            </ul>
          </div>

          {/* Email Bisnis */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Email Bisnis</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Setup Email Workspace Baru untuk standarisasi komunikasi tim
            </p>
            <div className="space-y-2">
              {["dev@", "cs@", "timdev@", "devapps@"].map((email, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-accent/5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <code className="text-sm text-accent">{email}alfatihah.com</code>
                </div>
              ))}
            </div>
          </div>

          {/* SEO & Analytics */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-lg font-semibold">SEO & Analytics</h3>
            </div>
            <div className="text-center py-6">
              <p className="text-5xl font-bold text-success mb-2">20+</p>
              <p className="text-muted-foreground">Website dengan GSC</p>
              <p className="text-sm text-muted-foreground mt-2">
                Google Search Console untuk monitoring trafik
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideInfrastruktur;
