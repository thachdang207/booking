import React from 'react'
import {
    Form,
    Select,
    Button,
    Switch,
    Row,
    Col
} from 'antd';
import { ROOM_TYPE_OPTIONS, GUEST_OPTIONS } from '../../../../constants/global'

const RoomEditForm = () => {
    return (
        <div className=" flex flex-col my-1 px-1 w-full md:w-full lg:my-4 lg:px-4 lg:w-full">
                <Form.Item label="Room type">
                    <Select options={ROOM_TYPE_OPTIONS}>
                    </Select>
                </Form.Item>
                <Form.Item label="Guests">
                    <Select options={GUEST_OPTIONS}>
                    </Select>
                </Form.Item>
                <Form.Item label="Status">
                    <Switch />
                </Form.Item>
                <Row>
                    <Col span={12} offset={12}>
                        <Form.Item >
                            <Button>Edit</Button>
                        </Form.Item>
                    </Col>
                </Row>
        </div>
    );
};

export default RoomEditForm;
