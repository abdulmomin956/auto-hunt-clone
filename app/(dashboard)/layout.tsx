import NavBar from "@/components/NavBar"
import { getLoggedInUser } from "@/lib/appwrite";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const account = await getLoggedInUser();

    if (!account) {
        redirect('/?login=true');
    }
    return (
        <div className="w-full">
            <div className="flex flex-col w-full h-auto">
                <NavBar />
                <main>{children}</main>
            </div>
        </div>
    )
}