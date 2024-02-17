import SideNav from "@/app/components/sideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SideNav />
      {children}
    </section>
  );
}
