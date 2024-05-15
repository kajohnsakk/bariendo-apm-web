"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import useRedirect from "@/app/hooks/useRedirect";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormType = z.infer<typeof LoginFormSchema>;

type LoginFormProps = {
  organizationId: string;
};

export const LoginForm = ({ organizationId }: LoginFormProps) => {
  const { toast } = useToast();
  const { redirect } = useRedirect();
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormType) => {
    const login = await signIn("credentials", {
      email: data.email,
      password: data.password,
      organizationId,
      redirect: false,
    });

    if (login && login.ok) {
      redirect("/services");
    } else {
      toast({
        title: "Login failed",
        description: login?.error,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4">
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  );
};
