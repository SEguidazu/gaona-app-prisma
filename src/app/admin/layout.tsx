import AdminHeader from "@/components/headers/AdminHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <main className="p-4">{children}</main>
    </>
  );
}
