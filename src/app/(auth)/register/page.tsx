import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { RegisterForm } from "./components/register-form";

type RegisterPageProps = {
  searchParams: {
    organizationId: string;
  };
};

const RegisterPage = ({ searchParams }: RegisterPageProps) => {
  const { organizationId } = searchParams;

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <RegisterForm organizationId={organizationId} />
        </CardContent>
      </Card>
      <div className="mt-4 text-center">
        Already have an account?
        <Link
          href={`/login?organizationId=${organizationId}`}
          className="text-primary ml-2"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
