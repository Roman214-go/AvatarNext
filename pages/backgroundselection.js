import {
    Box,
    Flex
} from "@chakra-ui/react"

export default function BackgroundSelection() {
    return (
        <>
            Choose background:
            <Flex mt={5} gap={30} flexWrap="wrap">
                <Box w={60} h={40} bg="red" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="white" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="black" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="green" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="yellow" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="gold" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="blue" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="wheat" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="lime" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="gray" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
                <Box w={60} h={40} bg="orange" borderRadius={10} border="2px solid black" cursor="pointer"></Box>
            </Flex>
        </>
    )
}