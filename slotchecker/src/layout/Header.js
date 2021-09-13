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

import { Link } from "react-router-dom";

// import {UserContext} from "../context/UserContext";


const Header = () =>{
    const { colorMode, toggleColorMode } = useColorMode()

    const isDark = colorMode === "dark";

    // const context = useContext(UserContext);

    return (
        <Flex>
            <Box p="6">
                <Heading size="md"><Link to="/">Slot Checker</Link></Heading>
            </Box>
            <Flex
            pos="fixed"
            top="1rem"
            right="1rem"
            align="center"
            >
                <Switch
                isChecked={isDark}
                onChange={toggleColorMode}
               />
            </Flex>
        </Flex>   
    )
}
            

export default Header;
