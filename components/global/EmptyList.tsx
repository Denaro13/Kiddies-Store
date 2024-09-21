import { cn } from "@/lib/utils";
import React from "react";

const EmptyList = ({
  headings = "No items found",
  className,
}: {
  headings?: string;
  className?: string;
}) => {
  return (
    <div>
      <h2 className={cn("text-cl", className)}>{headings}</h2>
    </div>
  );
};

export default EmptyList;
