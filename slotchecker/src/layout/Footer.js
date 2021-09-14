import React from "react";
import { Flex, Text, HStack,Input,InputGroup,Button,useColorModeValue } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

export const Footer = () => {

    const FormBackground = useColorModeValue("gray.100","gray.700")

    return (
        <Flex
        bg="white"
        width="100%"
        justifyContent="center"
        alignItems="center"
        direction="column"
        background={FormBackground}
        boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
        p={2}
        >
        <HStack spacing={8} mb={5}>
            <Flex 
            w="400" 
            alignItems="center" 
            justifyContent="center"
            >
                <Flex 
                direction="row" 
                rounded={100}
                >
                    <InputGroup>
                    <Input
                    variant="filled"
                    type="email"
                    placeholder="Email"
                    justifySelf="center"
                    />
                    <Button 
                        variant="outline"
                        leftIcon={<EmailIcon />}
                        width="-moz-fit-content"
                        background={FormBackground}
                        >
                            Notify!
                        </Button>
                    </InputGroup>
                </Flex>
            </Flex>

        </HStack>
        <Flex width="100%" justifyContent="center" wrap="wrap">
            <Text width="50%" textAlign="center" color="gray.600" fontSize="lg">
              Made with ❤️ by team LaziX
            </Text>
        </Flex>
        </Flex>
    );
};


export default Footer;