
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Loader from "../components/Loader";
import InventoryCard from "../components/InventoryCard";

const { XMLParser } = require("fast-xml-parser");
const parser = new XMLParser();


function Inventory() {
    // AFTER complete revamp of the useEffect

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState("");


    const [products, setProducts] = useState([]);

    const URL = "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1";

    useEffect(() => {


        // check if Products useState is set or not only then call the api if necessary

        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                const xmlData = response.data;
                const jsonData = parser.parse(xmlData);
                const productData = Array.isArray(jsonData.Inventory.Vehicle)
                    ? jsonData.Inventory.Vehicle
                    : [jsonData.Inventory.Vehicle];
                productData.sort((a, b) => a.Make.localeCompare(b.Make));
                setProducts(productData);
                setLoading(false);
                localStorage.setItem("inventoryData", JSON.stringify(productData)); // save data to local storage
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();

    }, []);

    const Vehicles = searchQuery
        ? products.filter((vehicle) =>
            vehicle.Model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.Make.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.Year.toString().includes(searchQuery) ||
            vehicle.VIN.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.StockNum.toString().includes(searchQuery)
        )
        : products;

    // apply sorting based on the selected sort order
    const filterProductsByPriceRange = (products) => {
        switch (priceRange) {
            case "under-10000":
                return products.filter((product) => product.ShowroomPrice < 10000);
            case "10000-15000":
                return products.filter(
                    (product) => product.ShowroomPrice >= 10000 && product.ShowroomPrice <= 15000
                );
            case "15001-20000":
                return products.filter(
                    (product) => product.ShowroomPrice >= 15001 && product.ShowroomPrice <= 20000
                );
            case "above-20000":
                return products.filter((product) => product.ShowroomPrice > 20000);
            default:
                return products;
        }
    };

    const ITEMS_PER_PAGE = 30; // number of items to display per page

    // calculate the index of the first and last item to display
    const lastIndex = currentPage * ITEMS_PER_PAGE;
    const firstIndex = lastIndex - ITEMS_PER_PAGE;
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    // slice the Vehicles array to get only the items to display on the current page
    let currentVehicles = Vehicles.slice(firstIndex, lastIndex);
    currentVehicles = filterProductsByPriceRange(
        Vehicles.slice(firstIndex, lastIndex)
    );

    // event handler for page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // event handler for search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // reset current page to 1 when the search query changes
    };



    return (
        <>
            {loading ? (
                <Container>
                    <Loader />
                </Container>
            )

                : <Container >
                    <input
                        type="text"
                        placeholder="Search by model name..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        style={{ marginTop: "90px" }}
                    />
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="">Select price range</option>
                        <option value="under-10000">Under C$10,000</option>
                        <option value="10000-15000">C$10,000 - C$15,000</option>
                        <option value="15001-20000">C$15,001 - C$20,000</option>
                        <option value="above-20000">Above C$20,000</option>
                    </select>
                    <div className="inventory-wrapper">

                        {currentVehicles.map((cars) =>
                        (
                            <InventoryCard key={cars.StockNum} {...cars} />
                        ))
                        }
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-center m-3">
                        <Pagination className="flex-wrap text-center">
                            <Pagination.First
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(1)}
                            />
                            <Pagination.Prev
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index}
                                    active={index + 1 === currentPage}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            />
                            <Pagination.Last
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(totalPages)}
                            />
                        </Pagination>
                    </div>

                </Container >
            }
        </>
    )
}

export default Inventory

