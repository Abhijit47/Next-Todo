import { SvgSpinnersBarsRotateFade } from "@/assets/icons";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";
import { Suspense } from "react";

export default async function TodosPage() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <LeftColumn />

        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <SvgSpinnersBarsRotateFade className="size-20" />
            </div>
          }
        >
          <RightColumn />
        </Suspense>
      </div>
    </div>
  );
}
