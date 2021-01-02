import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import '../CSS/pagination.css'
import {Dlist } from '../DATA/Datatable'
import {Hlist} from  '../DATA/Datatable'

export default class Master extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       datanew: Dlist[0]
    }
  }
  





  handelclick = (e)=>{
    console.log(e.target.innerText)
    const pagenumber = e.target.innerText
    const pagenumbernew  = pagenumber  -1
    const datapage =  Dlist[pagenumbernew]
    this.setState({datanew:datapage})
  }



  render() {
    return (
      <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="right">Calories</TableCell> .....>head */}
            {Hlist.map((item)=>{return(<TableCell  align="center">{item}</TableCell>)})}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.datanew.map((data,index) => (
            <TableRow key={index}>
              
              <TableCell align="right">{data.firstname}</TableCell>
              <TableCell align="right">{data.lastname}</TableCell>
              <TableCell align="right">{data.color}</TableCell>
              <TableCell align="right">{data.age}</TableCell>
            </TableRow>))}
    
        </TableBody>
      </Table>
      <Pagination count={4} className='pagin'  onClick={this.handelclick}/>
    </TableContainer>
  );

    
  }
}
