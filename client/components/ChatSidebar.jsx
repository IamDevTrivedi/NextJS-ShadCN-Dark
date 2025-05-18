"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar";

import Link from "next/link";

import { ChatSidebarFooter } from "./ChatSidebarFooterDD";

import { Button } from "./ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreVertical } from "lucide-react";

// Dummy user chats
const usersChat = [
    {
        SidebarGroupLabel: "Today",
        items: [
            { name: "t-1", href: "/chat/t-1" },
            { name: "t-2", href: "/chat/t-2" },
        ],
    },
    {
        SidebarGroupLabel: "Last 7 days",
        items: [
            { name: "7-1", href: "/chat/7-1" },
            { name: "7-2", href: "/chat/7-2" },
        ],
    },
    {
        SidebarGroupLabel: "Last 30 Days",
        items: [
            { name: "30-1", href: "/chat/30-1" },
            { name: "30-2", href: "/chat/30-2" },
        ],
    },
];

export function ChatSidebar() {
    const handleRename = (chatName) => {
        console.log(`Rename chat: ${chatName}`);
        // Add your logic here (e.g., open modal)
    };

    const handleDelete = (chatName) => {
        console.log(`Delete chat: ${chatName}`);
        // Add your logic here (e.g., confirm + API call)
    };

    return (
        <Sidebar>
            <SidebarHeader className="text-3xl font-bold text-center px-1 py-4">
                <Link href="/">Talkasauras</Link>
            </SidebarHeader>

            <SidebarContent>
                {usersChat.map(
                    (group, idx) =>
                        group.items.length > 0 && (
                            <SidebarGroup key={idx}>
                                <SidebarGroupLabel>{group.SidebarGroupLabel}</SidebarGroupLabel>
                                {group.items.map((chat, chatIdx) => (
                                    <div
                                        key={chatIdx}
                                        className="flex items-center justify-between w-full pr-2"
                                    >
                                        <Button
                                            variant="ghost"
                                            className="justify-start w-4/5 truncate"
                                            asChild
                                        >
                                            <Link href={chat.href}>{chat.name}</Link>
                                        </Button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreVertical className="w-1/5 h-4 text-primary" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent side="right" align="end">
                                                <DropdownMenuItem
                                                    onClick={() => handleRename(chat.href)}
                                                >
                                                    Rename
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-destructive"
                                                    onClick={() => handleDelete(chat.href)}
                                                >
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                ))}
                            </SidebarGroup>
                        )
                )}
            </SidebarContent>

            <SidebarFooter>
                <ChatSidebarFooter />
            </SidebarFooter>
        </Sidebar>
    );
}
