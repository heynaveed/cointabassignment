import { Button, Flex, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../Components/UserTable";
import { GetUserFailure, GetUserRequest, GetUserSuccess } from "../Redux/Actions";

export default function UserDetails() {
    const Dispatch = useDispatch();
    const Loding = useSelector(state => state.isLoading)
    const UsersData = useSelector(state => state.allusers)
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(10);
    const [gender, setGender] = useState("");


    const FetchUsers = (page, limit, gender) => {
        Dispatch(GetUserRequest)
        axios.get(`https://cointab-l5ao.onrender.com/userdetails?gender=${gender}&page=${page}&limit=${limit}`)
            .then((res) => {
                console.log(res.data)
                Dispatch(GetUserSuccess(res.data));
            })
            .catch((err) => {
                Dispatch(GetUserFailure());
            })
    }

    useEffect(() => {
        FetchUsers(page, limit, gender)
    }, [page, gender]);

    console.log("USeeerrrrrnadkflsdf", Loding)
    return (
        <>
            <Text fontSize={'28px'} fontWeight={"500"}>
                COINTAB SOFTWARE PRIVATE LIMITED
            </Text>
            <br />
            <Select w={"20%"} marginLeft={"10%"} placeholder='Select Gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value='male'>Male</option>
                <option value='female'>Female </option>
            </Select>
            <br />
            {Loding && <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />}
            <UserTable users={UsersData} />
            <br />
            <Flex width={"60%"} m={"auto"} justifyContent={"center"}>
                <Button disabled={page == 1} onClick={() => setpage(page - 1)}>Prev</Button>
                <Button>{page}</Button>
                <Button disabled={page == (UsersData.length / limit)} onClick={() => setpage(page + 1)}>Next</Button>
            </Flex>
        </>
    )
}