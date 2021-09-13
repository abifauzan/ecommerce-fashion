import { Image } from '@chakra-ui/image';
import { Box, VStack, Tag, Button, Icon } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai'
import React from 'react';
import ItemImg1 from '../../assets/images/sample_item1.png'

const DiscountTag = ({ value }) => {

    return (
        <Tag px='1.5' py='1.5' size='sm' variant='solid' colorScheme='blue' borderRadius='30px'>{value}%</Tag>
    )
}

const ButtonLove = (props) => {

    return (
        <Button
            bg='white'
            borderRadius='999px'
            p='0'
            color='gray.700'
            boxShadow='md'
        >
            <Icon as={AiOutlineHeart} w='5' h='5' />
        </Button>
    )
}

const ItemGrid = ({ data, available }) => {

    return (
        <VStack
            // spacing='2'
            w='150px'
            position='relative'
        >
            <Box
                w='full'
                h='184px'
                position='relative'
                borderRadius='8'
                bgGradient='linear(to-tr, green.200, pink.500)'
            >
                
            </Box>
        </VStack>
    )
}

const ItemThumbnail = ({ data, available }) => {

    return (
        <Box
            // spacing='2'
            w='150px'
            position='relative'
        >
            <Box
                w='full'
                h='184px'
                position='relative'
                borderRadius='8'
                bgGradient='linear(to-tr, gray.200, gray.300)'
                overflow='hidden'
            >
                <Image 
                    src={ItemImg1} 
                    objectFit='contain'
                    objectPosition='10px bottom'
                />

                <Box 
                    position='absolute'
                    top='10px'
                    left='10px'
                >
                    <DiscountTag value='-20' />
                </Box>

                
            </Box>
            <VStack 
                w='full' 
                position='relative'
                h='50px'
                // bg='white'
            >
                <Box 
                    position='absolute'
                    right='0'
                    top='-50%'
                    z-index='10'
                >
                    <ButtonLove />
                </Box>
            </VStack>
        </Box>
    )
}

function CardItem({ data, type, mode, available = true}) {
    
    const card = 
        type === 'thumbnail' 
        ? <ItemThumbnail data={data} available={available} />
        : <ItemGrid data={data} available={available} />

    return card
}

export default CardItem;