import { UserRole } from "@prisma/client";

import { SidebarNavItem } from "types";

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "Home",
    items: [
      { href: "/dashboard", icon: "dashboard", title: "Dashboard" }
    ]
  },
  {
    title: "Feature",
    items: [
      {
        href: "/admin",
        icon: "laptop",
        title: "Admin Panel",
        authorizeOnly: UserRole.ADMIN,
      },
      { href: "/dashboard/playground", icon: "atom", title: "Playground" },
      { href: "/dashboard/doc-search", icon: "post", title: "Document Search" },
      { href: "/dashboard/data-analysis", icon: "laptop", title: "Data Analysis" },
      { href: "/dashboard/summarization", icon: "bolt", title: "Summarization" },
      { href: "/dashboard/comparison", icon: "brain", title: "Comparison" },
      {
        href: "/admin/orders",
        icon: "package",
        title: "Orders",
        badge: 2,
        authorizeOnly: UserRole.ADMIN,
      },
      {
        href: "#/dashboard/posts",
        icon: "post",
        title: "User Posts",
        authorizeOnly: UserRole.USER,
        disabled: true,
      },
    ],
  },
  {
    title: "System",
    items: [
      { href: "/dashboard/settings", icon: "settings", title: "Settings" },
    ],
  },
];
