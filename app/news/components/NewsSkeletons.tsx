import { NewsSkeletonCard } from "./NewsStates";

export function NewsListSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-5 w-44 animate-pulse bg-gray-200" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <NewsSkeletonCard />
        <NewsSkeletonCard />
      </div>
    </div>
  );
}

export function NewsSidebarSkeleton() {
  return (
    <aside className="w-full lg:w-auto lg:flex-shrink-0 flex flex-col gap-6">
      <div className="w-full max-w-[350px] h-[107px] animate-pulse bg-gray-200" />
      <div className="w-full max-w-[350px] rounded-none bg-white px-6 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
        <div className="mb-5 h-5 w-28 animate-pulse bg-gray-200" />
        <div className="space-y-4">
          <div className="h-5 animate-pulse bg-gray-200" />
          <div className="h-5 animate-pulse bg-gray-200" />
          <div className="h-5 animate-pulse bg-gray-200" />
        </div>
      </div>
    </aside>
  );
}

export function RelatedArticlesSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 rounded-lg bg-white animate-pulse"
          style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
        >
          <div className="w-24 h-24 rounded-md bg-gray-200 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="h-4 w-[85%] mb-2 bg-gray-200 rounded" />
            <div className="h-4 w-[70%] mb-5 bg-gray-200 rounded" />
            <div className="flex items-center justify-between">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-3 w-10 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
