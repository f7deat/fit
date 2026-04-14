import {
  NewsListSkeleton,
  NewsSidebarSkeleton,
} from "./components/NewsSkeletons";

export default function Loading() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="flex-1 min-w-0">
          <NewsListSkeleton />
        </div>
        <NewsSidebarSkeleton />
      </div>
    </section>
  );
}
