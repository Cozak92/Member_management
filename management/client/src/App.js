import React, { Component} from 'react';
import './App.css';
import Customer from './components/customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper'; //외부를 감싸기 위한 컴포넌트
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
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
})

const customers = [
  {
  'id' : 1,
  'avatar' : "https://placeimg.com/64/64/any",
  'name' : '신승혁',
  'birthday' : '920323',
  'gender' : '남자',
  'loaction' : ' 서울',
  'job' : "취업 준비생"
  },
  {
    'id' : 2,
    'avatar' : "https://placeimg.com/64/64/any",
    'name' : '신승혁',
    'birthday' : '920323',
    'gender' : '남자',
    'loaction' : ' 서울',
    'job' : "취업 준비생"
    },
    {
      'id' : 3,
      'avatar' : "https://placeimg.com/64/64/any",
      'name' : '신승혁',
      'birthday' : '920323',
      'gender' : '남자',
      'loaction' : ' 서울',
      'job' : "취업 준비생"
      }
]

class App extends Component {
  
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
            {customers.map(member => { // 맵을 이용해서 다수의 정보를 출력할때는 key를 사용해야함
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
            })}
          </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
