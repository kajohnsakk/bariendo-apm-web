"use client";

import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";

type CustomCardProps = {
  title: string;
  children: React.ReactNode;
  showBackButton?: boolean;
};

const CustomCard = ({
  title,
  children,
  showBackButton = true,
}: CustomCardProps) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="flex items-center w-full">
        {showBackButton && (
          <Button className="rounded-full w-10 h-10 p-1" onClick={goBack}>
            <FaArrowLeft className="text-white text-14" />
          </Button>
        )}

        <h2 className="text-xl font-semibold m-auto">{title}</h2>
      </div>
      <ScrollArea className="w-full my-4">{children}</ScrollArea>
    </div>
  );
};

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomCard;
