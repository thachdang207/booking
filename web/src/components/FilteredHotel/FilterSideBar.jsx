import React, { useState, useEffect } from "react";
import { Radio, Space } from 'antd';
import { priceFilterOptions, scoreFilterOptions } from './FilterOptions';
import { CITY_OPTIONS } from "../../constants/global";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"


function FilterSideBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialFilterValues = {
        price: {
            from: 0,
            to: 1000000,
        },
        score: {
            from: 0,
            to: 5,
        },
        locationType: null,
        cityId: null,
        isFeatured: false,
        // nearBeach: false,
    }

    const [filter, setFilter] = useState(initialFilterValues);

    useEffect(() => {
            
    }, [filter])

    return (
        <div className="block xl:w-3/12 w-full bg-gray-100 p-6 rounded-md">
            <h4 className="p-2">Filter by:</h4>
            <div className="p-4 bg-gray-200 rounded-xl">
                <div className="border-t border-gray-300 mt-3 px-3">
                    <h5 className="font-semibold py-2">Price:</h5>
                    <Radio.Group
                        onChange={(e) => {
                            setFilter({
                                ...filter,
                                price: e.target.value
                            })
                        }}
                        value={filter.price}
                        buttonStyle="solid"
                    >
                        {priceFilterOptions.map((price, key) =>
                            <Radio.Button key={key} value={price.value} className="my-2 w-full text-center">{price.label}</Radio.Button>
                        )}
                    </Radio.Group>
                </div>
                <div className="border-t border-gray-300 mt-3 px-3">
                    <h5 className="p-2">Score: </h5>
                    <Radio.Group
                        onChange={(e) => {
                            setFilter({
                                ...filter,
                                score: e.target.value
                            })
                        }}
                        value={filter.score}
                        buttonStyle="solid"
                        size="large"
                        style={{
                            width: "100%",
                        }}
                    >
                        <Space direction="vertical">
                            {scoreFilterOptions.map((score, key) =>
                                <Radio key={key} value={score.value} className="my-2 w-full text-center">{score.label}</Radio>
                            )}
                        </Space>
                    </Radio.Group>
                </div>
                <div className="border-t border-gray-300 mt-3 px-3">
                    <h5 className="font-semibold py-2">Location type:</h5>
                    <Radio.Group
                        onChange={(e) => {
                            setFilter({
                                ...filter,
                                locationType: e.target.value
                            })
                        }}
                        value={filter.locationType}
                        buttonStyle="solid"
                    >
                        <Space direction="horizontal">
                            <Radio.Button value="Homestay" className="my-2 w-full text-center">Homestay</Radio.Button>
                            <Radio.Button value="Hotel" className="my-2 w-full text-center">Hotel</Radio.Button>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="border-t border-gray-300 mt-3 px-3">
                    <h5 className="font-semibold py-2">Featured</h5>
                    <Radio.Group
                        onChange={() => {
                            setFilter({
                                ...filter,
                                isFeatured: !filter.isFeatured,
                            })
                        }}
                        value={filter.isFeatured}
                        size="large"
                    >
                        <Radio value={true} className="my-2 w-full text-center">Featured</Radio>
                    </Radio.Group>
                </div>
                <div className="border-t border-gray-300 mt-3 px-3">
                    <h5 className="font-semibold py-2">City</h5>
                    <Radio.Group
                        onChange={(e) => {
                            setFilter({
                                ...filter,
                                cityId: e.target.value,
                            })
                        }}
                        value={filter.cityId}
                        size="large"
                    >
                        {CITY_OPTIONS.map((city, key) => (
                            <Radio key={key} value={city.value} className="my-2 w-full text-center">{city.label}</Radio>
                        ))}
                    </Radio.Group>
                </div>
            </div>
        </div>
    );
}

export default FilterSideBar;
