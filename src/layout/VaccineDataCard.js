import React from 'react';
import { Flex,Stack ,Box} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query'; 
import {useColorModeValue,Badge,Text,Spacer} from '@chakra-ui/react';

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
                        justifyContent="space-between"
                        >
                            <Box
                            w="100%"
                            pr={isNotSmallerScreen ? "10": "0"}
                            justifyContent="space-between"
                            >
                                <Stack isInline="solid" align="baseline">
                                    <Text fontWeight="bold" fontSize="md" my={2} align="start" pr={2}>
                                        {vaccine.name}
                                    </Text>
                                    <Badge variant="solid" colorScheme="green" rounded="full" px={2} textAlign="right" align="end">
                                        {vaccine.vaccine}
                                    </Badge>
                                </Stack>
                                <Stack 
                                isInline="solid" 
                                align="baseline"
                                justify-content="space-between"
                                >
                                    <Text as="h2" fontWeight="semibold" fontSize="md" my={2}>
                                        Address :
                                    </Text>
                                    <Text as="h2" fontWeight="semibold" fontSize="md">
                                        {vaccine?.block_name}, {vaccine?.district_name},{" "}
                                        {vaccine?.state_name}
                                    </Text>
                                </Stack>
                                <Stack 
                                isInline="solid" 
                                align="baseline"
                                justify-content="space-between"
                                >
                                    <Text as="h2" fontWeight="semibold" fontSize="md" my={2}>
                                        Pincode :
                                    </Text>
                                    <Text as="h2" fontWeight="semibold" fontSize="md">
                                        {vaccine?.pincode}
                                    </Text>
                                </Stack>
                            </Box>
                            <Box
                            w="100%"
                            >
                                <Stack isInline="solid" align="baseline">
                                    <Text as="h2" fontWeight="semibold" fontSize="md" my={2}>
                                        Available Capacity :
                                    </Text>
                                    <Badge variant="solid" colorScheme="green" rounded="full" px={2} textAlign="right">
                                        {vaccine?.available_capacity}
                                    </Badge>
                                </Stack>
                                <Stack isInline="solid" align="baseline">
                                    <Text as="h2" fontWeight="semibold" fontSize="md" my={2}>
                                        Minimum Age :
                                    </Text>
                                    <Text as="h2" fontWeight="semibold" fontSize="md">
                                        {vaccine?.min_age_limit}
                                    </Text>
                                </Stack>
                                <Stack isInline="solid" align="baseline">
                                    <Text as="h2" fontWeight="semibold" fontSize="md" my={2}>
                                        Fees(₹) : 
                                    </Text>
                                    <Text as="h2" fontWeight="semibold" fontSize="md">
                                        {vaccine?.fee}
                                    </Text>
                                </Stack>
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </Stack>
    )
   
}

export default VaccineDataCard;