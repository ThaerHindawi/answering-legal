import Logo from "./Logo";
import Top from "./Top";
import RightSide from "./RightSide";
import NavItems from "./NavItems";

const navItems = [
  { label: "Products", href: "/", dropdown: true },
  { label: "About", href: "/", dropdown: true },
  { label: "Resources", href: "/", dropdown: true },
  { label: "Pricing", href: "/pricing", dropdown: false },
];

export default function Header() {
  return (
    <header className="bg-neutral-bg h-133 flex flex-col gap-4 max-w-1440 mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8 lg:pb-6">
      {/* Top section */}
      <Top />
      <nav className="flex justify-between items-center h-47">
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        <NavItems navItems={navItems} />
        {/* Right side */}
        <RightSide />
      </nav>
    </header>
  );
}
