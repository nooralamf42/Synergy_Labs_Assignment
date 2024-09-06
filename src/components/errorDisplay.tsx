import { XCircle } from "lucide-react";

export function ErrorDisplay({ visible}: any) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-red-600 text-white rounded-lg shadow-lg flex items-center">
      <XCircle className="mr-2 h-6 w-6" />
      <span>Server is not responding</span>
    </div>
  );
}
