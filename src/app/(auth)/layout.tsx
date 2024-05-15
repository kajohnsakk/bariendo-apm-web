export const metadata = {
  title: "Login",
  description: "Customer appointment",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
