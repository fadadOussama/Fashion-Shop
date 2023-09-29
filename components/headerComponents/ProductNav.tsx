import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props = {
  children: React.ReactNode;
};

export default function ProductNav({ children }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center">
            <li className="navLink">PRODUCTS</li>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 grid-rows-1 gap-4 p-6 customScreen z-50">{children}</ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
