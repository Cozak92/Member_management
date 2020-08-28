import React, { Component} from 'react';
import './App.css';
import Customer from './components/customer';
import CustomerAdd from './components/customerAdd';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper'; //외부를 감싸기 위한 컴포넌트
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress"
import TableRow from '@material-ui/core/TableRow'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overFlowX : 'auto' //X축으로 오버플로우
  },
  table: {
    minWidth: 1080
  },
  progress : {
    margin: theme.spacing.unit * 2
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
});

/*

  1.React Life Cycle

  consturctor()

  componentWillMount()

  redner()

  componentDidMount()

  when props or state changed => shouldComponentUpdate()

 */


// state = 변환 가능한 데이터, props = 변환 불가능한 데이터
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed: 0
    })
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  callApi = async () =>{
    const res = await fetch('/api/customers');
    const body = await res.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div ClassName = {classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            고객관리 시스템
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="검색하기"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
        <Paper>
          <Table ClassName = {classes.table}>
            <TableHead>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>지역</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>설정</TableCell>
            </TableHead>

            <TableBody>
              {this.state.customers ? this.state.customers.map(member => { // 맵을 이용해서 다수의 정보를 출력할때는 key를 사용해야함
                  return (
                    <Customer 
                      stateRefresh = {this.stateRefresh}
                      key = {member.id}
                      id = {member.id}
                      image = {member.image}
                      name = {member.name}
                      birthday = {member.birth}
                      gender = {member.gender}
                      location = {member.location}
                      job = {member.job}
                    />
                  )
              }) :  // colSpan - 6개의 열을 다 차지할수 있또록함
              <TableRow>
                <TableCell colSpan = "6" align= "center" > 
                  <CircularProgress className = {classes.progress} variant = "determinate" value= {this.state.completed} />
                </TableCell>
              </TableRow>}
            </TableBody>
          </Table>
          
        </Paper>
        <CustomerAdd stateRefresh = {this.stateRefresh} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
