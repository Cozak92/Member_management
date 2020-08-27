import React, { Component} from 'react';
import './App.css';
import Customer from './components/customer'

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
    return (
      customers.map(member => { // 맵을 이용해서 다수의 정보를 출력할때는 key를 사용해야함
        return (
          <Customer 
            key = {member.id}
            id = {member.id}
            avatar = {member.avatar}
            name = {member.name}
            birthday = {member.birthday}
            gender = {member.gender}
            loaction = {member.loaction}
            job = {member.job}
        />
        )
      })
    );
  }
}

export default App;
