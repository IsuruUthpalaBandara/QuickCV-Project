import { Button, 
         Form,
         Input,
         Space, 
         DatePicker, 
         InputNumber,
         Upload,
         Select } from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



const {TextArea}=Input


const DataForm = () => {

  const navigate=useNavigate()


  
const onFinish = (values) => {
 
  
  console.log('Success:', JSON.stringify(values));
  localStorage.setItem("values",JSON.stringify(values))
  navigate('template')
  
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  

   

    const { Option } = Select

  return(

    <Form
    
    
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,marginLeft:"0px", marginTop:"30px"
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      
      label="First Name"
      name="firstName"
      rules={[
        {
          required: true,
          message: 'Please input your first name here',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Last Name"
      name="lastName"
      rules={[
        {
          required: true,
          message: 'Please input your last name here',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email Address"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email address here',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Contact No"
      name="contactNo"
      rules={[
        {
          required: true,
          message: 'Please input your contact number here',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          //onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>


    <Form.Item label="Date of Birth" name="DOB"
    style={{textAlign:"left"}}>
        <DatePicker />
    </Form.Item>

    <Form.Item name="age" label="Age"
    style={{textAlign:"left"}}>
          <InputNumber />Years
        </Form.Item>




     
        <Form.Item
    name="dynamic_form_nest_item"
    style={{
      maxWidth: 600,textAlign:"left", marginLeft:200
    }}
    autoComplete="off"
  >
    <Form.List name="education">
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
              style={{width:400}}
                {...restField}
                name={[name]}
                rules={[
                  {
                    required: true,
                    message: 'Missing Education',
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Add Education" />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add New Education
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    </Form.Item>


    <Form.Item
    name="dynamic_form_nest_item"
    style={{
      maxWidth: 600,textAlign:"left", marginLeft:200
    }}
    autoComplete="off"
  >
    <Form.List name="experience">
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
              style={{width:400}}
                {...restField}
                name={[name]}
                rules={[
                  {
                    required: true,
                    message: 'Missing Experiences',
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Add Professional Experience" />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Professional Experience
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    </Form.Item>

    <Form.Item
    name="dynamic_form_nest_item"
    style={{
      maxWidth: 600,textAlign:"left", marginLeft:200
    }}
    autoComplete="off"
  >
    <Form.List name="memberships">
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
              style={{width:400}}
                {...restField}
                name={[name]}
                rules={[
                  {
                    required: false,
                    
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Add Professional Membership" />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Professional Membership
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    </Form.Item>

    <Form.Item
    name="dynamic_form_nest_item"
    style={{
      maxWidth: 600,textAlign:"left", marginLeft:200
    }}
    autoComplete="off"
  >
    <Form.List name="internships">
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
              style={{width:400}}
                {...restField}
                name={[name]}
                rules={[
                  {
                    required: false
                    
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Add Internship" />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Internship
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </Form.Item>


    <Form.Item
    name="dynamic_form_nest_item"
    style={{
      maxWidth: 600,textAlign:"left", marginLeft:200
    }}
    autoComplete="off"
  >
    <Form.List name="SoftSkills">
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
              style={{width:400}}
                {...restField}
                name={[name]}
                rules={[
                  {
                    required: false
                    
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Add Soft Skills" />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Soft Skills
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </Form.Item>










    <Form.Item
    name="dynamic_form_nest_item"
    style={{
      maxWidth: 600,textAlign:"left", marginLeft:200
    }}
    autoComplete="off"
  >
    <Form.List name="ComputerSkills">
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
              style={{width:400}}
                {...restField}
                name={[name]}
                rules={[
                  {
                    required: false
                    
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Add Computer Skills" />
              </Form.Item>
              
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Computer Skills
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>














    </Form.Item>

     <Form.Item
      label="Introduction"
      name="intro"
      rules={[
        {
          required: true,
          message: 'Add a brief introduction about you',
        },
      ]}
    >
      <TextArea rows={4} placeholder='Add a brief introduction about you' />
    </Form.Item>



    <Form.Item
      label="ID no"
      name="IDno"
      rules={[
        {
          required: false,
          message: 'Add any kind of your ID no',
        },
      ]}
    >
      <Input placeholder='Enter your ID no' />
    </Form.Item>

    <Form.Item
      label="Address"
      name="address"
      rules={[
        {
          required: true,
          message: 'Add your address',
        },
      ]}
    >
      <TextArea rows={4} placeholder='Enter your address' />
    </Form.Item>



    <Form.Item
      label="Referee 1"
      name="ref1"
      rules={[
        {
          required: false,
          
        },
      ]}
    >
      <TextArea rows={4} placeholder='Enter your first reference' />
    </Form.Item>



    <Form.Item
      label="Referee 2"
      name="ref2"
      rules={[
        {
          required: false,
          
        },
      ]}
    >
      <TextArea rows={4} placeholder='Enter your second reference' />
    </Form.Item>



    <Form.Item label="Upload Photo" valuePropName="fileList" style={{textAlign:"left"}} name='profilePic' >
          <Upload action="/upload.do" listType="picture-card" >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8
                }}
              >
                Upload your Photo
              </div>
            </div>
          </Upload>
        </Form.Item>





    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)};
export default DataForm

