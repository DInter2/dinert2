import { ReactNode, useState } from 'react';
import { FaHome, FaCog, FaUser } from 'react-icons/fa';

type MenuWidgetProps = {
  icon: ReactNode;
  title: string;
};
const MenuWidget = ({ icon, title }: MenuWidgetProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center p-2 rounded-lg ${isHovered ? 'bg-gray-200' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <span className="ml-2 text-lg font-medium">{title}</span>
    </div>
  );
};
