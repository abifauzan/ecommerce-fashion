import { Container, Box } from "@chakra-ui/react"
import NavbarMobile from "../components/Navbar/NavbarMobile";



function LayoutMobile({ children }) {
    return (
        <Container 
            maxW='container.lg' 
            bg='gray.100'
            p='0'
            width='100vw'
            minH='100vh'
            h='auto'
            position='relative'
            overflowX='hidden'
            overflowY='scroll'
        >
            <Box w='full' h='full' position='relative' pb='190px'>
                { children }
            </Box>
            <NavbarMobile />
        </Container>
    );
}

export default LayoutMobile;