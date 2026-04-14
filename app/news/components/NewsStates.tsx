import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

export function NewsSkeletonCard() {
  return (
    <div className="w-full min-h-[422px] bg-white animate-pulse shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
      {/* Image */}
      <div className="h-[240px] bg-gray-200" />

      {/* Content */}
      <div className="px-6 pt-5 pb-12">
        <div className="h-[11px] w-[38%] bg-gray-200 mb-[14px] rounded-sm" />
        <div className="h-[19px] w-[90%] bg-gray-200 mb-2 rounded-sm" />
        <div className="h-[19px] w-[65%] bg-gray-200 mb-4 rounded-sm" />

        <div className="h-[13px] w-full bg-gray-200 mb-[6px] rounded-sm" />
        <div className="h-[13px] w-[85%] bg-gray-200 mb-[6px] rounded-sm" />
        <div className="h-[13px] w-[72%] bg-gray-200 mb-5 rounded-sm" />

        <div className="h-[13px] w-[26%] bg-gray-200 rounded-sm" />
      </div>
    </div>
  );
}

export function NewsErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6 px-5 py-4 bg-red-50 border-[1.5px] border-red-200">
      <div className="flex items-center gap-3 text-sm text-red-800">
        <FiAlertTriangle size={18} />
        <span>{message}</span>
      </div>

      <button
        onClick={onRetry}
        className="flex items-center gap-1.5 bg-red-800 text-white px-4 py-2 text-sm hover:bg-red-900 transition"
      >
        <FiRefreshCw size={13} />
        Thử lại
      </button>
    </div>
  );
}

export function NewsEmptyState() {
  return (
    <div className="py-16 text-center text-gray-400">
      <p className="text-sm">Hiện chưa có bài viết nào.</p>
    </div>
  );
}