import {
    Editable,
    EditablePreview,
    EditableInput,
    Grid,
    Flex,
    Box
} from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg"

export default function Profile() {
    return (
        <>
            <Box w="150px" h="150px">
                <CgProfile size="100%"/>
            </Box>
            <Grid gridTemplateColumns="1fr 1fr" gap="50px" mt={10}>
                <Flex gap="5%" alignItems="center">
                    Name:
                    <Editable defaultValue="Write your name" p={1} w="100%">
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Flex>
                <Flex gap="5%" alignItems="center">
                    Surname:
                    <Editable defaultValue="Write your surname" p={1} w="100%">
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Flex>
                <Flex gap="5%" alignItems="center">
                    Phone:
                    <Editable defaultValue="Write your phone number" p={1} w="100%">
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Flex>
            </Grid>
        </>
    )
}