"use client";

import useRedirect from "./hooks/useRedirect";

export default function Home() {
  const { redirect } = useRedirect();

  redirect("/services");
}
