import axios from 'axios';
import React, {useState, useEffect} from 'react'
import TabHeaderCell from '../components/table/TabHeaderCell';
import Table from '../components/table/Table';
import TableBody from '../components/table/TableBody';
import TableData from '../components/table/TableData';
import TableHead from '../components/table/TableHead';
import TableLayout from '../components/table/TableLayout';
import Layout from '../layout/Layout';

const Ranking = () => {
    const [rankings, setRankings] = useState([]);

useEffect(() => {
    (
        async () => {
            const {data} = await axios.get("/rankings");
            setRankings(data);
        }
    )();
}, [])

    return (
        <Layout>
            <TableLayout>
                <Table>
                    <TableHead>
                        <tr>
                            <TabHeaderCell name={"#"} />
                            <TabHeaderCell name={"Name"} />
                            <TabHeaderCell name={"Revenue"} />
                        </tr>
                    </TableHead>
                    <TableBody>
                        {Object.keys(rankings).map((key: any, index: number) => {
                            return (
                                    <tr key={key}>
                                        <TableData>{index+1}</TableData>
                                        <TableData>{key}</TableData>
                                        <TableData>{rankings[key]}</TableData> 
                                    </tr>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableLayout>
        </Layout>
    )
}

export default Ranking;
