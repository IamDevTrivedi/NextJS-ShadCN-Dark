import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ChatSidebar } from "@/components/ChatSidebar"

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <ChatSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}
