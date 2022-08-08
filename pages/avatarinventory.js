import { Box, Flex } from "@chakra-ui/react"
import { 
    GiDwarfFace,
    GiBearFace,
    GiCyborgFace,
    GiInvisibleFace,
    GiMonkFace,
    GiNunFace,
    GiPigFace,
    GiWomanElfFace
 } from "react-icons/gi"

export default function AvatarInventory() {
    return (
        <>
            <Box fontSize={24}>
                Inventory
            </Box>
            <Box>
                Avaiable avatars:
            <Flex m={10}  gap={5} flexWrap="wrap" cursor="pointer">
                <GiDwarfFace size={30}/>
                <GiBearFace size={30}/>
                <GiCyborgFace size={30}/>
                <GiInvisibleFace size={30}/>
                <GiMonkFace size={30}/>
                <GiNunFace size={30}/>
                <GiPigFace size={30}/>
                <GiWomanElfFace size={30}/>          
            </Flex>
            </Box>
        </>
    )
}