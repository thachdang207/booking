import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Upload, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Button,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Row,
    Col
  } from 'antd';

const { RangePicker } = DatePicker;
const RoomEditForm = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [loadingState, setLoadingState] = useState(
        {
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [
              {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                uid: '-xxx',
                percent: 50,
                name: 'image.png',
                status: 'uploading',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                uid: '-5',
                name: 'image.png',
                status: 'error',
              },
            ],
          }
    );
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    const handleCancel = () => setLoadingState({ previewVisible: false });

    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      setLoadingState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
  
    const handleChange = ({ fileList }) => setLoadingState({ fileList });
    
      
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }


    const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    const { previewVisible, previewImage, fileList, previewTitle } = loadingState;
    return (
        <div className=" flex flex-col my-1 px-1 w-full md:w-full lg:my-4 lg:px-4 lg:w-full">
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 12,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                {/* <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item> */}
                <Form.Item label="Input">
                <Upload
                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    >
                    {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect
                    treeData={[
                        {
                        title: 'Light',
                        value: 'light',
                        children: [
                            {
                            title: 'Bamboo',
                            value: 'bamboo',
                            },
                        ],
                        },
                    ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                    options={[
                        {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                            {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                            },
                        ],
                        },
                    ]}
                    />
                </Form.Item>
                <Form.Item label="RangePicker">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Switch">
                    <Switch />
                </Form.Item>
                <Row>
                    <Col span={12} offset={12}>
                        <Form.Item >
                            <Button>Edit</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
      </div>
    );
};

export default RoomEditForm;