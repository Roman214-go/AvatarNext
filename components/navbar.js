import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { ImHome, ImImage } from "react-icons/im"
import { GiRabbitHead } from "react-icons/gi"
import { BsCameraReelsFill } from "react-icons/bs" 
import { MdOutlineScreenShare } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import Link from 'next/link';
import { Icon } from "@chakra-ui/react"

export default function NavBar() {
    return (
        <ProSidebar width="70px">
            <Menu iconShape="square">
                <SidebarHeader>
                    <MenuItem icon={<Icon as={ImHome} />}>
                        <Link href="/"><a></a></Link>
                    </MenuItem>
                </SidebarHeader>
                <SidebarContent>
                    <MenuItem icon={<Icon as={GiRabbitHead} />}>
                        <Link href="/avatarinventory"><a></a></Link>
                    </MenuItem>
                    <MenuItem icon={<Icon as={BsCameraReelsFill} />}>
                        <Link href="/record"><a></a></Link>
                    </MenuItem>
                    <MenuItem icon={<Icon as={MdOutlineScreenShare} />}>
                        <Link href="/streamingpairling"><a></a></Link>
                    </MenuItem>
                    <MenuItem icon={<Icon as={ImImage} />}>
                        <Link href="/backgroundselection"><a></a></Link>
                    </MenuItem>
                </SidebarContent>
                <SidebarFooter>
                    <MenuItem icon={<Icon as={FaUserAlt} />}>
                        <Link href="/profile"><a></a></Link>
                    </MenuItem>
                    <MenuItem icon={<Icon as={IoMdSettings} />}>
                        <Link href="/settings"><a></a></Link>
                    </MenuItem>
                </SidebarFooter>
            </Menu>
        </ProSidebar>
    )
}