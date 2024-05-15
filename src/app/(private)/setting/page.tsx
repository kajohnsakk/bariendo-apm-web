"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { LuUserCircle } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const SettingPage = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ SettingPage ~ session:", session);

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2 border-b-2 pb-3">
        <LuUserCircle className="text-primary text-5xl" />
        <div className="flex flex-col">
          <p className="text-[#373C40] text-lg font-semibold">
            {session?.user?.firstName} {session?.user?.lastName}
          </p>
          <p className="text-[#6B7280] text-sm">{session?.user?.email}</p>
        </div>
      </div>
      <div>
        <Button className="mt-3 w-full" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default SettingPage;
