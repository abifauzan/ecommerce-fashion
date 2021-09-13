import { Flex, Heading, VStack } from "@chakra-ui/layout"
import HeroHeaderImg from '../../assets/images/hero_header.jpg'
import CardItem from "../../components/CardItem/CardItem"
import HeadingFeature from "../../components/HeadingFeature/HeadingFeature"

const HeroHeader = (
    <Flex 
        w='full' 
        h='196px'
        bgImage={`url(${HeroHeaderImg})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize='cover'
    >
        <Flex 
            w='full' 
            h='full'
            bg='rgba(0,0,0,.4)'
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='flex-end'
            p='26px 16px 26px 16px'
            letterSpacing='0.03em'
            
        >
            <Heading 
                w='full' 
                size='2xl'
                color='white'
                fontWeight='800'
            >Street Clothes</Heading>
        </Flex>
    </Flex>
)

const Home = (props) => {

    return (
        <VStack
            w='full'
            spacing='0'
        >
            {HeroHeader}
            <VStack
                w='full'
                pt='37px'
                mt={0}
            >
                <VStack 
                    w='full'
                    alignItems='flex-start'
                >
                    <HeadingFeature />
                    <CardItem type='thumbnail' />
                </VStack>

            </VStack>
        </VStack>
    )
} 

export default Home