import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, SunIcon, MoonIcon, UsersRound} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPath = useLocation().pathname;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 sm:py-4 px-4">
        {/* Logo */}
        <div className="text-lg italic  text-gray-800 dark:text-gray-100 flex items-center gap-1">
          <Link to="/" className="flex items-center gap-1"><UsersRound/><span>Users Management</span></Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Button asChild className={`${currentPath === "/" && "hidden"}`}>
            <Link to="/">All Users</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/users/create">Create User</Link>
          </Button>
          {/* Theme Toggle Button */}
          <Button variant="ghost" onClick={toggleTheme}>
            {isDarkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleTheme}>
            {isDarkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col justify-center">
              <SheetTrigger asChild>
              <Link to="/">
                <Button className="w-full">Home</Button>
              </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
              <Link to="/users/create"><Button className="w-full">Create User</Button></Link>
              </SheetTrigger>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
