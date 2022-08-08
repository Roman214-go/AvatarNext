import NavBar from "./navbar";
import { Flex, Box } from "@chakra-ui/react"

export default function Layout({ children }) {
    return (
      <>
        <Flex height="100vh">
            <NavBar />
            <Box as="main" m="2% 5%" w="100%">{children}</Box>
        </Flex>
        
      </>
    )
  }