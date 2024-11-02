import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 ">
        <Link href="/" className="flex items-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School System</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa]">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
