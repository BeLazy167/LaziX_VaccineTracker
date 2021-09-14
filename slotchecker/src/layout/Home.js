import React,{useState,useEffect} from "react";
import {
    Flex,
    useColorModeValue,
    InputGroup,
    Input,
    InputRightElement,
    IconButton,
    useToast,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Text,
    Stack,
    Divider,
    FormControl,
    Select
} from '@chakra-ui/react';

import Axios from "axios";
import {SearchIcon,ChevronDownIcon} from '@chakra-ui/icons';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from "@chakra-ui/react"


const Home = () =>{
    const [query, setQuery] = useState('');

    const toast = useToast();

    const FormBackground = useColorModeValue("gray.100","gray.700")

    const [ display, changeDisplay] = useState("flex");

    const [vaccineData , setVaccineData] = useState(null);

    const [state, setState] = useState([]);

    const [stateCode, setStateCode] = useState("States");

    const [districts, setDistricts] = useState([]);
    
    const [districtCode, setDistrictCode] = useState(
        "PLEASE SELECT A STATE FIRST"
    );

    // const [alignment, changeAlignment] = useState("center");
    const fetchDetails = async () =>{
        try{
            const {data} = await Axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${query}&date=14-09-2021`)
            setVaccineData(data);
            console.log(data)
        }catch (error){
            toast({
                title: "Error",
                description: `${error.message}`
            })
        }
    }

    useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then((res) => res.json())
        .then((data) => {
        setState(data.states);
        });
    // eslint-disable-next-line
    }, []);

    const onStateChange = async (e) => {
        const stateCode = e.target.value;
        setDistricts([]);
        setVaccineData([]);
    
        const url =
          stateCode === "States"
            ? null
            : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateCode}`;
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setStateCode(stateCode);
            setDistricts(data.districts);
            console.log(data);
        });
    };

    const findByDistrict = async (e) => {
        const districtCode = e.target.value;
    
        const url =
          districtCode === "PLEASE SELECT A STATE FIRST"
            ? null
            : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtCode}&date=14-09-2021`;
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setDistrictCode(districtCode);
            setVaccineData(data.sessions);
        });
    };

    return (
        <>
        <Flex
        alignItems="center"
        justifyContent="center"
        >
        <Stack>
            <Text fontSize="4xl" p={20}>
                Your one shot 💉 to get Vaccine Availability
            </Text>
            <Tabs align="center" variant="soft-rounded" colorScheme="green">
            <TabList>
                <Tab>Search by Pincode</Tab>
                <Tab>Search by District</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Flex 
                    w="100%" 
                    alignItems="center" 
                    justifyContent="center"
                    pt={5}
                    >
                        <Flex 
                        direction="column" 
                        rounded={100}
                        display={ display }
                        >
                            <InputGroup>
                            <Input
                            placeholder="github"
                            variant="filled"
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Enter Pincode"
                            />
                            <InputRightElement>
                            <IconButton 
                                size="lg"
                                background={FormBackground}
                                onClick={fetchDetails}
                                icon={
                                    <SearchIcon />
                                }
                                />
                            </InputRightElement>
                            </InputGroup>
                        </Flex>
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <Stack direction={["column", "row"]} alignItems="center" justifyContent="center">
                        <Flex 
                        pt={5}
                        >
                            <FormControl placeholder="Select option">
                                <Select
                                variant="outlined"
                                value={stateCode}
                                onChange={onStateChange}
                                >
                                    <option>
                                        Select State
                                    </option>
                                {state?.map((stateData) => (
                                    <option value={stateData?.state_id}>
                                    {stateData?.state_name}
                                    </option>
                                ))}
                                </Select>
                            </FormControl>
                        </Flex>
                        <Flex
                        alignItems="center" justifyContent="center">
                            <Flex 
                            direction="column" 
                            rounded={100}
                            pt={5}
                            display={ display }
                            >
                                <FormControl className="form-control">
                                    {districts?.length !== 0 ? (
                                    <>
                                        <Select
                                        variant="outlined"
                                        value={districtCode}
                                        onChange={findByDistrict}
                                        placeholder="Select distict"
                                        >
                                        {districts?.map((districtData) => (
                                            <option value={districtData?.district_id}>
                                            {districtData?.district_name}
                                            </option>
                                        ))}
                                        </Select>
                                    </>
                                    ) : (
                                    <>
                                        <Select
                                        variant="outlined"
                                        value={districtCode}
                                        onChange={findByDistrict}
                                        placeholder="select a State First"
                                        >
                                        <option disabled={true}>Select a State First</option>
                                        </Select>
                                    </>
                                    )}
                                </FormControl>
                            </Flex>
                        </Flex>
                    </Stack>
                </TabPanel>
            </TabPanels>
        </Tabs>
        {/* <Flex>
            { vaccineData ? 
            (
                <>
                <Text>
                    {vaccineData.sessions[0]?.name}
                </Text>
                <Text>
                    {vaccineData.sessions[0]?.address}
                </Text>
                <Text>
                    {vaccineData.sessions[0]?.state_name}
                </Text>
                <Text>
                    {vaccineData.sessions[0]?.district_name}
                </Text>
                <Text>
                    {vaccineData.sessions[0]?.block_name}
                </Text>
                <Text>
                    total Availabe Capacity{vaccineData.sessions[0]?.available_capacity}
                </Text>
                <Text>
                    Availabe Capacity of dose 1{vaccineData.sessions[0]?.available_capacity_dose1}
                </Text>
                <Text>
                    Availabe Capacity of dose 2{vaccineData.sessions[0]?.available_capacity_dose2}
                </Text>
                <Text>
                    Vaccine: {vaccineData.sessions[0]?.vaccine}
                </Text>
                <Text>
                    Slots: {vaccineData.sessions[0]?.slots}
                </Text>
                </>
            )
            : (
                <></>
            ) }
        </Flex> */}
        </Stack>
        </Flex>
        </>
    )
}

{/* <Flex p="5">
        <Spacer />
        <Box p="2">
        <Heading size="xl" pl="70">Productiv 🧹</Heading>
        </Box>
        <Spacer />
        <Box>
        <Drawerlist></Drawerlist>
        </Box>
    </Flex> */}

export default Home;