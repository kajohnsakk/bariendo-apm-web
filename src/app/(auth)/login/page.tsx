import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LoginForm } from "./components/login-form";

type LoginPageProps = {
  searchParams: {
    organizationId: string;
  };
};

const LoginPage = ({ searchParams }: LoginPageProps) => {
  const { organizationId } = searchParams;

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>Hi there! Nice to see you again.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginForm organizationId={organizationId} />
        </CardContent>
      </Card>

      <div className="mt-4 text-center">
        Dont have an account?
        <Link
          href={`/register?organizationId=${organizationId}`}
          className="text-primary ml-2"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
