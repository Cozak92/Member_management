import React from 'react';


class Customer extends React.Component {
    render() { //props 컴포넌트를 계층적으로 구성 // JSX를 사용해서 반환
        return (
        <div>
            <CustomerProfile
                name = {this.props.name}
                id = {this.props.id}
                avatar = {this.props.avatar}
            />
            <CustomerInfo 
                birthday = {this.props.birthday}
                loaction ={this.props.loaction}
                gender ={this.props.gender}
                job = {this.props.job}
            />
        </div>
        )

    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src = {this.props.avatar} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>

        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.loaction}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}


export default Customer;
