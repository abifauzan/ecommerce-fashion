import { Flex, VStack, Icon, Text, Link } from "@chakra-ui/react"
import { BiHomeAlt } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi'
import { Link as ReactLink } from 'react-router-dom'
import { useLocation } from 'react-router'

function NavbarMobile(props) {
    
    const { pathname } = useLocation()
    const isActiveHome = pathname === '/'
    const isActiveBag = pathname === '/bag'
    const isActiveProfile = pathname === '/profile'

    return (
        <Flex
            w='100vw'
            bg='white'
            position='fixed'
            bottom='0'
            left='0'
            justifyContent='space-around'
            pb='23px'
            pt='15px'
            borderTopLeftRadius='25'
            borderTopRightRadius='25'
        >
            <Link 
                as={ReactLink} 
                to='/'
                textDecoration='none'
                outline='0'
                _active={{ textDecoration: 'none', outline: '0' }}
                _visited={{ textDecoration: 'none', outline: '0'}}
                _activeLink={{ textDecoration: 'none', outline: '0'}}
                _hover={{ textDecoration: 'none', outline: '0'}}
                _focus={{ outline: '0' }}
            >
                <VStack spacing={0}>
                    <Icon 
                        as={isActiveHome ? AiFillHome : BiHomeAlt} 
                        boxSize='7'
                        color='blue.500' 
                    />
                    <Text 
                        as='span' 
                        mt={0}
                        fontWeight={isActiveHome ? '500' : '500'}
                        fontSize='md'
                        color={isActiveHome ? 'blue.700' : 'gray.500'}
                    >
                        Home
                    </Text>
                </VStack>
            </Link>
            
            <Link 
                as={ReactLink} 
                to='/bag' 
                textDecoration='none'
                outline='0'
                _active={{ textDecoration: 'none', outline: '0' }}
                _visited={{ textDecoration: 'none', outline: '0'}}
                _activeLink={{ textDecoration: 'none', outline: '0'}}
                _hover={{ textDecoration: 'none', outline: '0'}}
                _focus={{ outline: '0' }}
            >
                <VStack spacing={0}>
                    <Icon 
                        as={isActiveBag ? HiShoppingBag : HiOutlineShoppingBag} 
                        boxSize='7'
                        color='blue.500' 
                    />
                    <Text 
                        as='span' 
                        mt={0}
                        fontWeight={isActiveBag ? '500' : '500'}
                        fontSize='md'
                        color={isActiveBag ? 'blue.700' : 'gray.500'}
                    >
                        Bag
                    </Text>
                </VStack>
            </Link>

            <Link 
                as={ReactLink} 
                to='/profile' 
                textDecoration='none'
                outline='0'
                _active={{ textDecoration: 'none', outline: '0' }}
                _visited={{ textDecoration: 'none', outline: '0'}}
                _activeLink={{ textDecoration: 'none', outline: '0'}}
                _hover={{ textDecoration: 'none', outline: '0'}}
                _focus={{ outline: '0' }}
            >
                <VStack spacing={0}>
                    <Icon 
                        as={isActiveProfile ? AiFillHome : BiHomeAlt} 
                        boxSize='7'
                        color='blue.500' 
                    />
                    <Text 
                        as='span' 
                        mt={0}
                        fontWeight={isActiveProfile ? '500' : '500'}
                        fontSize='md'
                        color={isActiveProfile ? 'blue.700' : 'gray.500'}
                    >
                        Profile
                    </Text>
                </VStack>
            </Link>
        </Flex>
    );
}

export default NavbarMobile;