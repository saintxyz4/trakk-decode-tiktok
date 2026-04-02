import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, Search, Zap, Clock, MessageSquare, Settings, LogOut, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Tableau de bord", tier: "free" },
  { to: "/dashboard/diagnostic", icon: Search, label: "Diagnostic", tier: "free" },
  { to: "/dashboard/inspiration", icon: Zap, label: "Inspiration", tier: "free" },
  { to: "/dashboard/historique", icon: Clock, label: "Historique", tier: "creator" },
  { to: "/dashboard/chat", icon: MessageSquare, label: "Coach IA", tier: "studio" },
  { to: "/dashboard/settings", icon: Settings, label: "Paramètres", tier: "free" },
];

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      }
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/login");
      setLoading(false);
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Déconnecté");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-thin border-border bg-card flex flex-col shrink-0 hidden md:flex">
        <div className="p-5 border-b border-thin border-border">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Trakk<span className="font-accent text-lg">.</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            const isLocked = item.tier !== "free"; // simplified - will be enhanced with real tier check
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                {isLocked && <Lock className="h-3 w-3 ml-auto text-muted-foreground/50" />}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-thin border-border">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Mobile header */}
        <div className="md:hidden p-4 border-b border-thin border-border flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold">Trakk<span className="font-accent">.</span></Link>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6 md:p-10 max-w-5xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
