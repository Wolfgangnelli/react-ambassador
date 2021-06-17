import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Layout from '../layout/Layout';
import TableLayout from '../components/table/TableLayout';
import Table from '../components/table/Table';
import TableHead from '../components/table/TableHead';
import TabHeaderCell from '../components/table/TabHeaderCell';
import TableBody from '../components/table/TableBody';
import TableData from '../components/table/TableData';
import { formatCurrency } from '../helpers';

const Stats = () => {
    const [stats, setStats] = useState([]);
    
    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get("/stats");
                setStats(data);
            }
        )();
    }, []);


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
                       {stats.map((s: {code: string, revenue: number}, idx: number) => {
                           return (
                               <tr key={idx}>
                                   <TableData>{`http//localhost:8000/${s.code}`}</TableData>
                                   <TableData>{s.code}</TableData>
                                   <TableData>{formatCurrency(+s.revenue)}</TableData>
                               </tr>
                           )
                       })}
                    </TableBody>
                </Table>
            </TableLayout>
        </Layout>
    )
}

export default Stats;
