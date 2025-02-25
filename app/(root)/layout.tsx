import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav"
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Tolu', lastName: 'Oludipe'};

  // if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image 
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

