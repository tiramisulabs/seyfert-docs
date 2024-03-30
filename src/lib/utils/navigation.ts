import type { Badge } from "../schema/badge";

export interface Link {
    type: 'link';
    label: string;
    href: string;
    isCurrent: boolean;
    badge: Badge | undefined;
    attrs: any;
}

interface Group {
    type: 'group';
    label: string;
    entries: (Link | Group)[];
    collapsed: boolean;
    badge: Badge | undefined;
}

export type SidebarEntry = Link | Group;

export function flattenSidebar(sidebar: SidebarEntry[]): Link[] {
    return sidebar.flatMap((entry) =>
        entry.type === "group" ? flattenSidebar(entry.entries) : entry,
    );
}
