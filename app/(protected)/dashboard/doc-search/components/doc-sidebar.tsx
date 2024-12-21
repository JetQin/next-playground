import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { Plus, DownloadCloud } from "lucide-react"
  
  export function DocSidebar() {
    const projects = [
        {
            "name": "",
            "url": "#",
            "icon": DownloadCloud,
        }
    ]
    return (
      <Sidebar side="right">
        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {projects.map((project) => (
                    <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                        <a href={project.url}>
                        <project.icon />
                        <span>{project.name}</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  