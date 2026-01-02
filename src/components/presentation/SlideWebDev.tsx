import { Palette, Layout, Globe2, Code2 } from "lucide-react";

const SlideWebDev = () => {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="space-y-4 opacity-0 fade-up">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
              Pilar 2
            </div>
            <Code2 className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Web Development & <span className="gradient-text">UI/UX Update</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Peningkatan tampilan dan fungsionalitas website
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Redesign & Update */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Palette className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Redesign & Update</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <p className="text-foreground">Redesain full website</p>
                  <p className="text-sm text-muted-foreground">wearemagictree.com dll</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-foreground">Optimasi tampilan Navbar & Formulir</p>
                  <p className="text-sm text-muted-foreground">Perbaikan UI komponen</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-success mt-2 shrink-0" />
                <div>
                  <p className="text-foreground">Custom Page Protection</p>
                  <p className="text-sm text-muted-foreground">Halaman dengan kunci</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-highlight mt-2 shrink-0" />
                <div>
                  <p className="text-foreground">Update Archive & Single Post</p>
                  <p className="text-sm text-muted-foreground">alquransantri.com & bayarzakat.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Setup Website Baru */}
          <div className="p-6 rounded-2xl glass opacity-0 fade-up stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Setup Website Baru</h3>
            </div>
            <div className="space-y-4">
              {["rumahbayi.org", "sedekahbaitullah.my.id", "baitullahjourney.com"].map((site, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl bg-secondary/50 flex items-center gap-3 group hover:bg-secondary transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Layout className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{site}</p>
                    <p className="text-xs text-muted-foreground">Deployment Complete</p>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                    Live
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideWebDev;
