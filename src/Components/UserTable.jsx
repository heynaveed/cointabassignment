import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
export default function UserTable({ users }) {
    console.log("inita", users)
    return (
        <TableContainer w={"60%"} m={"auto"} mt={"20px"}>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Gender</Th>
                        <Th isNumeric>Phone No.</Th>
                        <Th isNumeric>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        users.length > 0 && users.map((elem) => {
                            return <Tr>
                                <Td>{elem.name.first}</Td>
                                <Td>{elem.gender}</Td>
                                <Td isNumeric>{elem.phone}</Td>
                                <Td isNumeric> {elem.email}</Td>
                            </Tr>
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}