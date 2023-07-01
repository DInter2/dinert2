"use client";

// import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Esta pasta está vazia",
  subtitle = "Entre em contato para mais esclarecimentos",
  showReset = false,
}) => {
  // const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
      "
    >
      <Heading center title={title} subtitle={subtitle} />
    </div>
  );
};

export default EmptyState;
