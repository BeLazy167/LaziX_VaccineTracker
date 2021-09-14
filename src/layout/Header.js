import React,{useState, useContext} from 'react';
import { 
    Flex,
    Button,
    Heading,
    useColorMode,
    Switch,
    Box,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { Link,Redirect } from "react-router-dom";



const Header = () =>{
    const { colorMode, toggleColorMode } = useColorMode()
   
    const [ display, changeDisplay] = useState('none');

    const FormBackground = useColorModeValue("gray.100","gray.700")
    const isDark = colorMode === "dark";

    return (
        <Flex>
            <Box p="6">
                <Heading size="md"><Link to="/">SlotChecker</Link></Heading>
            </Box>
            <Flex
            pos="fixed"
            top="1rem"
            right="1rem"
            align="center"
            >

                    <Flex
                    display={['none','none','flex','flex']}
                    >
                        <Link to={{ pathname: "https://selfregistration.cowin.gov.in/" }} target="_blank">
                            <Button
                            colorScheme="green"
                            variant="outline"
                            mr={4}
                            >
                                Book slot
                            </Button>
                        </Link>
                        <Link to={{ pathname: "https://dashboard.cowin.gov.in/" }} target="_blank">
                            <Button
                            colorScheme="green"
                            variant="outline"
                            mr={4}
                            >
                                Stats
                            </Button>
                        </Link>
                    </Flex>
                

                <IconButton 
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={<HamburgerIcon />}
                display={['flex' ,'flex' , 'none' ,'none' ]}
                onClick={() => changeDisplay("flex")}
                />

                <Switch
                isChecked={isDark}
                onChange={toggleColorMode}
               />
            </Flex>

            <Flex
            w="100vw"
            bgColor="gray.100"
            zIndex={20}
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            overflow="auto"
            flexDir="column"
            display={ display }
            background={FormBackground}
            >
                <Flex justify="flex-end">
                    <IconButton 
                    mt={2}
                    mr={6}
                    aria-label="close"
                    size="lg"
                    icon={
                        <CloseIcon />
                    }
                    onClick={() => changeDisplay("none")}
                    />
                </Flex>
                    <Flex
                    direction="column"
                    align="center"
                    >
                       <Link to={{ pathname: "https://selfregistration.cowin.gov.in/" }} target="_blank">
                            <Button
                            colorScheme="green"
                            variant="outline"
                            mb={4}
                            >
                                Book slot
                            </Button>
                        </Link>
                        <Link to={{ pathname: "https://dashboard.cowin.gov.in/" }} target="_blank">
                            <Button
                            colorScheme="green"
                            variant="outline"
                            mb={4}
                            >
                                Stats
                            </Button>
                        </Link>
                    </Flex>
            </Flex>
        </Flex>   
    )
}


export default Header;
