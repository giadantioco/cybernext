function Loading() {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-left">ID</th>
              <th className="px-4 py-2 border-b text-left">Title</th>
              <th className="px-4 py-2 border-b text-left">Category</th>
              <th className="px-4 py-2 border-b text-left">Price</th>
              <th className="px-4 py-2 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map((_, index) => (
              <tr key={index} className="animate-pulse">
                <td className="px-4 py-2 border-b">
                  <div className="h-4 bg-gray-300 rounded w-12"></div>
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="h-8 bg-gray-300 rounded w-24"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Loading;
