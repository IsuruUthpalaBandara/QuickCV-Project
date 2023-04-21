import { Layout, Space ,Button} from 'antd';
import DataForm from './DataForm';



const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: "white",
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'black',

};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  height:4000,
  color: 'black',
  backgroundColor: 'white',
  

};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'darkGrey',
};
const footerStyle = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'black',
  height:10,
  lineHeight:'1px',
  margin:0,
  paddingInline:0
  
};

const buttonStyle={
  backgroundColor:"grey",
  color:'white',
  
}








const Home = () => {


  
  return(
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
  
    
    <Layout>
      <Header style={headerStyle}>Quick CV</Header>
      <Layout>
      <Sider style={siderStyle}>

        <Button style={buttonStyle} >Template</Button>










      </Sider>
        <Content 

        style={contentStyle}>


          <DataForm/>






        </Content>
        
      </Layout>
      <Footer style={footerStyle}>Designed by Isuru Uthpala Bandara</Footer>
    </Layout>

  </Space>
)};
export default Home;