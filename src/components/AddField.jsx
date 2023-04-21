import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const onFinish = (values) => {
  console.log('Received values of form:', values);
};
const AddField = (reqState,PlaceHolder) => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    autoComplete="off"
  >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'detail']}
                rules={[
                  {
                    required: reqState,
                    message: 'Missing Details',
                  },
                ]}
              >
                <Input placeholder={{PlaceHolder}} />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              {PlaceHolder}
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    </Form>

);
export default AddField;