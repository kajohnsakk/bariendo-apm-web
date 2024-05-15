import Footer from "@/components/layout/footer";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="p-6">{children}</div>
      <Footer />
    </div>
  );
}
