import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ChatSidebarFooter() {
    return (
        <DropdownMenu className="outline-none focus:ring-0">
            <DropdownMenuTrigger asChild>
                <Button
                    className="w-full flex items-center justify-around px-5 outline-none focus:ring-0"
                    variant="secondary"
                >
                    <Avatar className={'my-1'}>
                        <AvatarFallback className={'bg-background'}>CN</AvatarFallback>
                    </Avatar>
                    <span>[--User's Name]</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>

                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
