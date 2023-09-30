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
            <div className="navLink">PRODUCTS</div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-3 grid-rows-1 gap-4 p-6 customScreen z-50">{children}</div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
