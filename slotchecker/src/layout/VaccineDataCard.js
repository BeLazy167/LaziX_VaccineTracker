import React from 'react';
import { Flex,Stack ,Box} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query'; 
import {useColorModeValue,Badge,Text} from '@chakra-ui/react';

const VaccineDataCard = ({vaccineData}) =>{

    const [isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

    const FormBackground = useColorModeValue("gray.100","gray.700")

    return (
            <Stack>
                <Flex
                direction="column"
                maxWidth={{base:"100vh",md:"130vh",lg:"130vh","xl":"160vh"}}
                > 
                    {vaccineData?.map((vaccine) => (
                        <Flex 
                        p={5}
                        m={5}
                        background={FormBackground} 
                        rounded={6}
                        direction={isNotSmallerScreen ? "row": "column"}
                        key={vaccine.center_id}
                        >
                            <Box
                            w="100%"
                            >
                                <Stack isInline="solid" align="baseline">
                                    <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
                                        Vaccine Name
                                    </Text>
                                    <Badge variant="solid" variantColor="teal" rounded="full" px={2} textAlign="right">
                                        {vaccine.name}
                                    </Badge>
                                </Stack>
                                <Stack isInline="solid" align="baseline">
                                    <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
                                        Address
                                    </Text>
                                    <Text as="h2" fontWeight="semibold" fontSize="xl">
                                        {vaccine?.block_name}, {vaccine?.district_name},{" "}
                                        {vaccine?.state_name}
                                    </Text>
                                </Stack>
                            </Box>
                            <Box
                            w="100%"
                            >
                                <Stack isInline="solid" align="baseline">
                                    <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
                                        Vaccine Name
                                    </Text>
                                    <Badge variant="solid" variantColor="teal" rounded="full" px={2} textAlign="right">
                                        {vaccine.name}
                                    </Badge>
                                </Stack>
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </Stack>
    )
   
}

export default VaccineDataCard;