import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap"

function FilterSideBar() {
    return (
        <div className="md:block w-full md:w-3/12 xl:w-2/1 bg-gray-200 p-6 rounded-md">
            <h4 className="p-2">Filter by:</h4>
            <div className="border-t border-gray-900 mt-3">
                <h5 className="p-2">Price: </h5>
                <Form className="flex flex-col px-5">
                    <Label check>
                        <Input type="checkbox" />{'  < 1.000.000 VND'}
                    </Label>
                    <Label>
                        <Input type="checkbox" />{'  > 1.000.000 VND'}
                    </Label>
                    <Label>
                        <Input type="checkbox" />{'  > 5.000.000 VND'}
                    </Label>
                </Form>
            </div>
            <div className="border-t border-gray-900 mt-3">
                <h5 className="p-2">Score: </h5>
                <Form className="flex flex-col px-5">
                    <Label check>
                        <Input type="checkbox" />{'  1-5'}
                    </Label>
                    <Label>
                        <Input type="checkbox" />{'  6-10'}
                    </Label>
                </Form>
            </div>
        </div>
    );
}

export default FilterSideBar;
