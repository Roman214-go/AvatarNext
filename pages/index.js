import {
    Input, 
    Text, 
    Box,
    Flex,
  } from '@chakra-ui/react'
import AddAvatar from '../components/addAvatar'

const Index = () => {

    return (
        <>
            <Box>
                <Text>Find avatar</Text>
                <Input placeholder="Search" size="md" variant="flushed" />
            </Box>
            <Flex m="5% 10%"  gap="70px" flexWrap="wrap">
                <AddAvatar />            
                <AddAvatar />            
                <AddAvatar />            
                <AddAvatar />            
                <AddAvatar />            
                <AddAvatar />            
                <AddAvatar />            
            </Flex>
        </>
    )
}

export default Index
