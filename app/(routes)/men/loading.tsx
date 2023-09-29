import { Skeleton } from "@/components/ui/skeleton";

const skeletonsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Loading() {
  return (
    <div className="case py-20">
      <Skeleton className="h-[30px] w-[250px] mx-auto my-8 mb-[50px]" />

      <div className="flex flex-col gap-[50px] md:flex-row relative">
        <div className="w-full md:w-[200px]">
          <Skeleton className="w-1/3 h-[20px] mb-4" />
          <Skeleton className="w-full h-[20px] my-4 inline-block" />
          <Skeleton className="w-full h-[20px] my-4 inline-block" />
        </div>

        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skeletonsArr.map((i) => (
            <div key={i}>
              <Skeleton className=" h-[350px] mb-4" />
              <Skeleton className="w-[70%] h-[10px] mb-2 block mx-auto" />
              <Skeleton className="w-[10%] h-[7px] block mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
