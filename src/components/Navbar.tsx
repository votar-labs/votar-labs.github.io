import { Menu, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";


interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    url: "/",
    alt: "VotAR",
    title: "VotAR",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Blog", url: "/blog" },
  ],
  className,
}: NavbarProps) => {
  return (
    <section className={cn("py-4 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.url}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ModeToggle />
            <Button size="sm">
              Contactar
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                       <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-semibold tracking-tighter">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <div className="flex flex-col gap-4">
                    {menu.map((item) => (
                      <a key={item.title} href={item.url} className="text-md font-semibold py-2">
                        {item.title}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="flex justify-between items-center bg-muted/40 p-2 rounded-lg">
                       <span className="text-sm font-medium">Tema</span>
                       <ModeToggle />
                     </div>
                     <Button size="sm">
                      Contactar
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
