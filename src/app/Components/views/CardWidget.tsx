import Link from "next/link";

export const CardWidget = ({ title, description,id }: { title: string, description: string, id: string }) => {
  return (
    <div className="col-span-1">
      <Link href={`/drive/${id}`}>
        <div className="bg-white shadow-md rounded-md p-6 max-w-sm">
          <h2 className="text-gray-700 font-bold text-lg">{title}</h2>
          <p className="text-gray-500 text-base">{description}</p>
        </div>
      </Link>
    </div>
    );
};
