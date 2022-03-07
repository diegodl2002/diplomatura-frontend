import { Layout, Input} from 'antd';
const {Header, Footer, Sider, Content } = Layout;
const {Search } = Input;

const Main = ({ userName }) => {
    return(
        <Layout>
           <header>
               encabezado
            </header>
            <Content>
                {userName}
            </Content>
            <Footer>
                Pie
            </Footer>
        </Layout>
    );
}

export default Main;