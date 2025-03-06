import { Skeleton } from "@/components/ui/skeleton";
import * as S from "../../ProductDetails/index.styles";
export default function SkeletonProductPage() {
  return (
    <>
      <S.ProductsDetailsGrid>
        <Skeleton className="h-[415px] max-h-[500px]" />

        <div className="sm:ml-4">
          <S.ProductDetailsContainer>
            <Skeleton className="rounded-md w-1/2 h-4" />
            <Skeleton className="rounded-md w-2/3 h-5 mt-3" />
            <div className="flex flex-row gap-3">
              <Skeleton className="rounded-md w-9 h-3 mt-3" />

              <Skeleton className="rounded-md w-9 h-3 mt-3" />
            </div>
            <Skeleton className="rounded-md w-10 h-5 mt-5" />
          </S.ProductDetailsContainer>
          <Skeleton className="rounded-md w-full h-8 mt-8 mb-8" />
          <Skeleton className="rounded-md w-full h-8 mt-4" />
          <Skeleton className="rounded-md w-full h-8 mt-4" />
        </div>
      </S.ProductsDetailsGrid>
    </>
  );
}
