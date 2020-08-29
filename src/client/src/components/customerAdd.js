import React from "react"
import { post } from "axios"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import TextFiled from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"


const styles = theme => ({
    hidden: {
        display: 'none'
    }

})

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null, //byte형태의 데이터로 이루어진 진짜 file
            name: "",
            birth: "",
            gender: "",
            location: "",
            job: "",
            fileName: "", //파일명
            open: false
        }
    }

    //  submit = () => {
    //     confirmAlert({
    //       title: '추가 확인',
    //       message: '정말 추가 하시겠습니까?',
    //       buttons: [
    //         {
    //           label: '예',
    //           onClick: () => {
    //             this.handleFormSubmit()
    //             alert('추가 되었습니다.')}
    //         },
    //         {
    //           label: '아니요',
    //           onClick: () => alert('취소 되었습니다')
    //         }
    //       ]
    //     });
    //   };

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClickClose = () => {
        this.setState({
           
            file: null, //byte형태의 데이터로 이루어진 진짜 file
            name: "",
            birth: "",
            gender: "",
            location: "",
            job: "",
            fileName: "", //파일명
            open:false
        
        })
        
    }

    handleFormSubmit = (e) => {
        e.preventDefault() //데이터가 서버가 전달됨에 있어서 오류가 발생하지 않도록
        this.addCustomer()
        .then((res) => {
            this.props.stateRefresh();
        })
        this.setState({
           
                file: null, //byte형태의 데이터로 이루어진 진짜 file
                name: "",
                birth: "",
                gender: "",
                location: "",
                job: "",
                fileName: "" //파일명
            
        })
        
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0], //한개의 파일만 업로드 하기 위해서
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value
        this.setState(nextState);

    }

    addCustomer = () => {
        const url = '/api/customers';
        const fomrData = new FormData();
        fomrData.append('image', this.state.file)
        fomrData.append('name', this.state.name)
        fomrData.append('birth', this.state.birth)
        fomrData.append('gender', this.state.gender)
        fomrData.append('location', this.state.location)
        fomrData.append('job', this.state.job)

        const config = {
            headers: {
                //전달하고자 하는 데이터에 파일이 포함되어있을 때
                'content-type' : 'multipart/form-data'
            }
        }
        console.log(fomrData)
        //axios의 post 라이브러리
        return post(url, fomrData, config);
    }
    

    render(){
        const { classes } = this.props;
        return (

            <div>
                <Button variant = "contained"  color="primary" onClick={this.handleClickOpen}>
                    고객 추가하기
                </Button>
                <Dialog open={this.state.open} onClose ={this.handleClickClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        프로필 이미지 : <input 
                                                type = "file" 
                                                accept="image/*" 
                                                name= "file"
                                                file = {this.state.file} 
                                                value = {this.state.fileName} 
                                                onChange = {this.handleFileChange}/>
                                                

                        <br></br>
                        이름 : <input type = "text" name="name" value = {this.state.name} onChange = {this.handleValueChange}></input>
                        <br></br>
                        생년월일 : <input type = "date" name="birth" value = {this.state.birth} onChange = {this.handleValueChange}></input>
                        <br></br>
                        성별 : <select name ="gender" value = {this.state.gender} onChange = {this.handleValueChange}>
                            <option value="" selected disabled hidden >선택</option>
                            <option value = "남성">남성</option>
                            <option value = "여성">여성</option>
                        </select>
                        <br></br>
                        지역 : <select type = "text" name="location" value = {this.state.location} onChange = {this.handleValueChange}>
                            <option value="" selected disabled hidden >선택</option>
                            <option value = "서울">서울</option>
                            <option value = "경기">경기</option>
                            <option value = "강원">강원</option>
                            <option value = "충북">충북</option>
                            <option value = "충남">충남</option>
                            <option value = "전북">전북</option>
                            <option value = "전남">전남</option>
                            <option value = "경북">경북</option>
                            <option value = "경남">경남</option>
                        </select>
                        <br></br>
                        직업 : <input type = "text" name="job" value = {this.state.job} onChange = {this.handleValueChange}></input>
                        <br></br>

                    </DialogContent>
                    <DialogActions>
                        <Button variant = "contained"  color="primary" onClick={this.handleFormSubmit}>등록</Button>
                        <Button variant = "contained"  color="primary" onClick={this.handleClickClose}>취소</Button>
                    </DialogActions>

                </Dialog>
            </div>
            // <form onSubmit = {this.handleFormSubmit}>
            //     <h1>고객추가</h1> 
            //     프로필 이미지 : <input type = "file" name="file" accept="image/*" file = {this.state.file} value = {this.state.fileName} onChange = {this.handleFileChange}></input>
            //     이름 : <input type = "text" name="name" value = {this.state.name} onChange = {this.handleValueChange}></input>
            //     생년월일 : <input type = "date" name="birth" value = {this.state.birth} onChange = {this.handleValueChange}></input>
            //     성별 : <select name ="gender" value = {this.state.gender} onChange = {this.handleValueChange}>
            //         <option value="" selected disabled hidden >선택</option>
            //         <option value = "남성">남성</option>
            //         <option value = "여성">여성</option>
            //     </select>
            //     지역 : <select type = "text" name="location" value = {this.state.location} onChange = {this.handleValueChange}>
            //         <option value="" selected disabled hidden >선택</option>
            //         <option value = "서울">서울</option>
            //         <option value = "경기">경기</option>
            //         <option value = "강원">강원</option>
            //         <option value = "충북">충북</option>
            //         <option value = "충남">충남</option>
            //         <option value = "전북">전북</option>
            //         <option value = "전남">전남</option>
            //         <option value = "경북">경북</option>
            //         <option value = "경남">경남</option>
            //     </select>
            //     직업 : <input type = "text" name="job" value = {this.state.job} onChange = {this.handleValueChange}></input>
            //     <button type = "submit">등록</button>
            // </form>
        )
        
    }

}


export default withStyles(styles)(CustomerAdd)