import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const Nav = useNavigate();
    const FetchUsers = () => {
        console.log("someone clicked me")
        axios.get("https://cointab-l5ao.onrender.com/fetchusers")
            .then((res) => {
                console.log(res.data)
                alert(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const DeleteUsers = () => {
        console.log("someone clicked me")
        axios.delete("https://cointab-l5ao.onrender.com/deleteusers")
            .then((res) => {
                console.log(res.data)
                alert(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const Userdetails = () => {
        Nav("/details");
    }
    return (
        <>
            <Text fontSize={'28px'} fontWeight={"500"}>
                COINTAB SOFTWARE PRIVATE LIMITED
            </Text>
            <Flex w={"60%"} m={'auto'} padding={"1rem"} justifyContent={"space-evenly"}>
                <Button onClick={FetchUsers} colorScheme='blue' border={"1px solid"} fontSize={"20px"} h={"100px"} w={"150px"}>Fetch Users</Button>
                <Button onClick={DeleteUsers} colorScheme='blue' border={"1px solid"} fontSize={"20px"} h={"100px"} w={"150px"}>Delete Users</Button>
                <Button onClick={Userdetails} colorScheme='blue' border={"1px solid"} fontSize={"20px"} h={"100px"} w={"150px"}>User Details</Button>
            </Flex>
        </>
    )
}