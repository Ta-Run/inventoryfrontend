import React, { useState } from "react";
import { Container, Row, Col, Card, Navbar, Nav, Button, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import TableWithPagination from "./TableRecord";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);




const Sidebar = () => {
    const [filters, setFilters] = useState({
        ford: true,
        cadillac: true,
        jeep: true,
        lastMonth: true,
        thisMonth: true,
        last3Months: true,
        last6Months: true,
        thisYear: true,
        lastYear: true,
    });

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div className="bg-white text-white p-3" style={{ height: "100vh", width: "450px" }}>
            <h4 className="mb-4">Dashboard</h4>

            {/* <Nav className="flex-column mb-4">
                <Nav.Link href="#" className="text-white">Home</Nav.Link>
                <Nav.Link href="#" className="text-white">Reports</Nav.Link>
                <Nav.Link href="#" className="text-white">Analytics</Nav.Link>
            </Nav> */}

            <h5 className="mb-3 text-black">Filter Data By</h5>

            {/* Make Filter */}
            <h6 className="text-black">Make </h6>
            <Form>
                {["ford", "cadillac", "jeep"].map((make) => (
                    <Form.Check
                        key={make}
                        type="checkbox"
                        label={make.charAt(0).toUpperCase() + make.slice(1)}
                        name={make}
                        checked={filters[make]}
                        onChange={handleFilterChange}
                        className="mb-2 text-black"
                    />
                ))}
            </Form>


            {/* Duration Filter */}
            <h6 className="mt-3">Duration</h6>
            <Form>
                {["lastMonth", "thisMonth", "last3Months", "last6Months", "thisYear", "lastYear"].map((duration) => (
                    <Form.Check
                        key={duration}
                        type="checkbox"
                        label={duration.replace(/([A-Z])/g, " $1").trim()}
                        name={duration}
                        checked={filters[duration]}
                        onChange={handleFilterChange}
                        className="mb-2 text-black"
                    />
                ))}
            </Form>

            {/* Buttons */}
            <div className="mt-4 d-flex gap-2">
                <Button variant="warning" className="w-50">Apply Filter</Button>
                <Button variant="outline-light" className="w-50 text-black">Remove All Filters</Button>
            </div>
        </div>
    );
};




const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Inventory Count",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            backgroundColor: "orange",
        },
    ],
};

const Dashboard = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <Container fluid>
                <Navbar bg="light" className="mb-4 px-3 d-flex justify-content-between">
                    <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
                    <Form.Select style={{ width: "250px" }}>
                        <option>Select Dealer</option>
                        <option>AAA Mitsubishi Dealer</option>
                        <option>BBB Ford Dealer</option>
                    </Form.Select>
                    <Button variant="outline-dark">Filter Data By</Button>
                </Navbar>

                {/* Recent Gathered Data Section */}
                <Row className="mb-4">
                    {[
                        { title: "# New Units", value: "379" },
                        { title: "New MSRP", value: "$13,023,46" },
                        { title: "New Avg. MSRP", value: "$52,882" },
                        { title: "# Used Units", value: "67" },
                        { title: "Used MSRP", value: "$1,576,456" },
                        { title: "Used Avg. MSRP", value: "$23,351" },
                        { title: "# CPO Units", value: "1" },
                        { title: "CPO MSRP", value: "$31,200" },
                    ].map((item, index) => (
                        <Col key={index} md={3} className="mb-3">
                            <Card className="p-3 text-center">
                                <h6 className="text-muted">{item.title}</h6>
                                <h4>{item.value}</h4>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Inventory Chart */}
                <Row>
                    <Col md={12}>
                        <Card className="p-3 mb-4">
                            <Card.Title>Inventory Count</Card.Title>
                            <Bar data={barChartData} />
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Card className="p-3 mb-4">
                            <Card.Title>Average MSRP in USD</Card.Title>
                            <Bar data={barChartData} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card className="p-3 mb-4">
                            <Card.Title>History Logs</Card.Title>
                            {/* <Bar data={barChartData} /> */}
                            <TableWithPagination />
                        </Card>
                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default Dashboard;
