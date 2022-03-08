import { Layout, Input, Row, Col} from 'antd';
const {Header, Footer, Sider, Content } = Layout;
const {Search } = Input;

const Main = ({ userName }) => {
    return(
        <Layout>
           <header className='header'>
               <Row>
               <Col xs={{ span: 5}} lg= {{ span: 3}}>Logo</Col>
               <Col xs={{ span: 19}} lg= {{ span: 16}}>
                   <div className='header-search'>
                    <Search
                    placeholder='¿Que estas buscando?'
                    onSearch={value => console.log(value)}
                    enterButton
                    />
                   </div>
                   </Col>
               <Col xs={{ span: 0}} lg= {{ span: 5}}>Bienvenido {userName}</Col>
               </Row>
            </header>
            <Content className='content'>
                {userName}
            </Content>
            <Footer className='footer'>
                Pie
            </Footer>
        </Layout>
    );
}

export default Main;