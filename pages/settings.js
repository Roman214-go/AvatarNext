import {
    Editable,
    EditablePreview,
    EditableInput,
    HStack,
    Flex,
    Box,
    Button,
    Text
} from "@chakra-ui/react"
import { FaTwitter, FaFacebook } from "react-icons/fa"

export default function Settings() {
    return (
        <>
            <Box fontSize={24} mb={10}>
                Setting:
            </Box>
            <Flex flexDirection="column" gap={10}>
                <Flex gap="5%" alignItems="center" w="100%">
                    Change password:
                    <Editable defaultValue="Change password" p={1}>
                        <EditablePreview />
                        <EditableInput type="password"/>
                    </Editable>
                </Flex>
                <Flex gap="5%" alignItems="center" w="100%">
                    <Text>Call us:</Text>
                    <Button>Call</Button>
                </Flex>
                <Flex gap="5%" alignItems="center" w="100%">
                    <Text>Report a bug:</Text>
                    <Button>Report</Button>
                </Flex>
                <Flex gap="5%" alignItems="center" w="100%">
                    <Text>Contact us:</Text>
                    <HStack>
                        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                            Facebook
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                            Twitter
                        </Button>
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}