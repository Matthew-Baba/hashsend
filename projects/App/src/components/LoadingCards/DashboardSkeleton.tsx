

const DashboardSkeleton = () => {
  return (
    <aside className="rounded-lg paper px-4 py-6 animate-pulse">
      <div className="mb-3 space-y-1">
        <div className="placeholder-color h-5 w-36"></div>
        <div className="placeholder-color h-4"></div>
      </div>

      <div className="space-x-3 flex items-end">
        <div className="placeholder-color h-10 w-10"></div>
        <div className="text-sm placeholder-color h-5 w-12"></div>
      </div>

      <div className="mt-2 placeholder-color h-6"></div>
    </aside>
  )
}

export default DashboardSkeleton