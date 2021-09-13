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
            position='relative'
            overflow='hidden'
        >
            <Box w='full' h='full' position='relative'>
                { children }
            </Box>
            <NavbarMobile />
        </Container>
    );
}

export default LayoutMobile;