import React, { useState } from "react";
import { Table, Pagination, Container } from "react-bootstrap";

const TableWithPagination = () => {
    const data = [
        { date: "Mar 10, 24", newInventory: 241, newTotalMSRP: "$9,109,873", newAverageMSRP: "$37,800", usedInventory: 83, usedTotalMSRP: "$2,274,985", usedAverageMSRP: "$25,735" },
        { date: "Mar 01, 24", newInventory: 241, newTotalMSRP: "$9,109,873", newAverageMSRP: "$37,800", usedInventory: 83, usedTotalMSRP: "$2,274,985", usedAverageMSRP: "$25,735" },
        { date: "Feb 29, 24", newInventory: 241, newTotalMSRP: "$9,109,873", newAverageMSRP: "$37,800", usedInventory: 83, usedTotalMSRP: "$2,274,985", usedAverageMSRP: "$25,735" },
        { date: "Feb 28, 24", newInventory: 241, newTotalMSRP: "$9,109,873", newAverageMSRP: "$37,800", usedInventory: 83, usedTotalMSRP: "$2,274,985", usedAverageMSRP: "$25,735" },
        { date: "Feb 10, 24", newInventory: 241, newTotalMSRP: "$9,109,873", newAverageMSRP: "$37,800", usedInventory: 83, usedTotalMSRP: "$2,274,985", usedAverageMSRP: "$25,735" },
        { date: "Feb 01, 24", newInventory: 241, newTotalMSRP: "$9,109,873", newAverageMSRP: "$37,800", usedInventory: 83, usedTotalMSRP: "$2,274,985", usedAverageMSRP: "$25,735" },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Container className="mt-4">
            <h4>History Log</h4>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>New Inventory</th>
                        <th>New Total MSRP</th>
                        <th>New Average MSRP</th>
                        <th>Used Inventory</th>
                        <th>Used Total MSRP</th>
                        <th>Used Average MSRP</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.date}</td>
                            <td>{row.newInventory}</td>
                            <td>{row.newTotalMSRP}</td>
                            <td>{row.newAverageMSRP}</td>
                            <td>{row.usedInventory}</td>
                            <td>{row.usedTotalMSRP}</td>
                            <td>{row.usedAverageMSRP}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <Pagination className="justify-content-center">
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => handlePageChange(idx + 1)}>
                        {idx + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </Container>
    );
};

export default TableWithPagination;
