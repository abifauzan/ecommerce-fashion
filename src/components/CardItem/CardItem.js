import { Image } from '@chakra-ui/image';
import { Box, VStack, Tag, Button, Icon, HStack, Flex, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
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

const StarRating = ({ value }) => {

    const max = 10
    const rating = []

    const FilledIcon = <Icon color='yellow.400' as={BsStarFill} w='3' h='3' />
    const HalfIcon = <Icon color='yellow.400' as={BsStarHalf} w='3' h='3' />
    const OuterIcon = <Icon color='gray.400' as={BsStar} w='3' h='3' />

    for (let i = 1; i <= value; i++) {
        if (i === value && i % 2 !== 0) rating.push(HalfIcon)
        else if ((i + 2) % 2 === 0 ) rating.push(FilledIcon)
    }

    const rest = Array(5 - rating.length).fill(OuterIcon)
    const box = [...rating, ...rest]

    return (
        <HStack spacing={1}>
            {box.map((el, id) => (
                <Box key={id} alignItems='center' alignContent='center'>
                    {el}
                </Box>
            ))}
        </HStack>
    )
}

const ItemThumbnail = ({ data, available }) => {

    // const itemName = 'Evening Dress yosh awesome testing yosh'
    const itemName = 'Evening Dress'
    const subStrName = itemName.length > 27 ? itemName.substr(0, 27)+'...' : itemName

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
                spacing='0'
                // bg='white'
            >
                <Box 
                    position='absolute'
                    right='0'
                    top='-45%'
                    z-index='10'
                >
                    <ButtonLove />
                </Box>
                <HStack w='full' spacing='0' textAlign='left'>
                    <StarRating value={5} />
                    <Text color='gray.400' fontSize='xs' pl='1' pt='1'>(10)</Text>
                </HStack>
                <Text w='full' color='gray.400' fontSize='xs'>Dorothy Perkins</Text>
                <Text 
                    w='full' 
                    h='42px'
                    color='gray.700' 
                    fontSize='lg' 
                    fontWeight='600' 
                    pt='0' 
                    lineHeight='1.2'
                    // overflow='hidden'
                >
                    {subStrName}
                </Text>
                <HStack w='full' spacing='0'>
                    <Text
                        as='del'
                        fontSize='md'
                        fontWeight='500'
                        color='gray.600'
                    >
                        15$
                    </Text>
                    <Text
                        fontSize='md'
                        fontWeight='500'
                        color='blue.600'
                        pl='1'
                    >
                        10$
                    </Text>
                </HStack>
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