import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react';

function HeadingFeature(props) {
    return (
        <Flex
            w='full'
            px='16px'
            justifyContent='space-between'
            alignItems='center'
        >
            <VStack 
                textAlign='left' 
                alignItems='flex-start'
                spacing='0'
            >
                <Heading 
                    fontSize='4xl'
                    color='gray.700'
                >
                    Sale
                </Heading>
                <Text 
                    as='span' 
                    fontWeight='400' 
                    fontSize='sm' 
                    color='gray.400'
                    mt={1}
                    letterSpacing='0.03em'
                >
                    Super summer sale
                </Text>
            </VStack>
            <Text 
                as='span' 
                fontWeight='300' 
                fontSize='sm' 
                color='gray.700'
                letterSpacing='0.03em'
            >
                View all
                <ArrowForwardIcon w={6} h={6} pl={1} color='gray.700' />
            </Text>
        </Flex>
    );
}

export default HeadingFeature;