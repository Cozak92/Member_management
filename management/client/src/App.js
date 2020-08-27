import React, { Component} from 'react';
import './App.css';
import Customer from './components/customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper'; //외부를 감싸기 위한 컴포넌트
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overFlowX : 'auto' //X축으로 오버플로우
  },
  table: {
    minWidth: 1080
  }
});


// state = 변환 가능한 데이터, props = 변환 불가능한 데이터
class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  callApi = async () =>{
    const res = await fetch('/api/customers')
    const body = await res.json();
    return body;
  }
  
  render() {
    const { classes } = this.props;
    return (
      <Paper ClassName = {classes.root}>
      
        <Table ClassName = {classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>지역</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>

          <TableBody>
            {this.state.customers ? this.state.customers.map(member => { // 맵을 이용해서 다수의 정보를 출력할때는 key를 사용해야함
                return (
                  <Customer 
                    key = {member.id}
                    id = {member.id}
                    avatar = {member.avatar}
                    name = {member.name}
                    birthday = {member.birthday}
                    gender = {member.gender}
                    location = {member.loaction}
                    job = {member.job}
                  />
                )
            }) : ""}
          </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
