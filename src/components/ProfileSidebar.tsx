
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { name: "General", path: "/company-profile" },
  { name: "Appearance", path: "/company-profile/appearance" },
  { name: "Categories", path: "/company-profile/categories" },
  { name: "Statistics", path: "/company-profile/statistics" },
  { name: "Printer", path: "/company-profile/printer" },
  { name: "Optional input fields", path: "/company-profile/optional-fields" },
  { name: "Alternative appearance", path: "/company-profile/alternative" },
  { name: "Misc", path: "/company-profile/misc" },
];

const ProfileSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-border h-screen">
      <nav className="p-6 space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "block px-3 py-2 text-sm rounded-md transition-colors",
              location.pathname === item.path
                ? "bg-sage-green text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ProfileSidebar;
