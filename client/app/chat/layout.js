import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ChatSidebar } from '@/components/ChatSidebar';

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <ChatSidebar />
            <main className="w-screen">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
