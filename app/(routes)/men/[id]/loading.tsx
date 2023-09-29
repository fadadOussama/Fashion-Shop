import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="case py-20 flex flex-wrap justify-between gap-6">
      <Skeleton className="h-[750px] w-[500px] mx-auto" />
      <Skeleton className="w-[500px] h-[500px] content-start mx-auto" />
    </div>
  );
}
