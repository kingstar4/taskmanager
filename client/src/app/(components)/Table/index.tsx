import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../ui/Button';
import { useAppSelector } from '@/app/redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const head= ['Title','Description', 'Status', 'Tags', 'Priority', 'StartDate', 'DueDate'];

export default function CustomizedTables() {
    const taskStatuses = useAppSelector((state)=> state.global.tasks) || [];
  return (
    <div className="p-5">
        <div className="flex justify-between pb-10"> 
            <span className='font-bold text-lg text-black dark:text-white'>Table</span>
            <Button text='Add Task'/>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {head.map((top,index)=>(
                    <StyledTableCell sx={{fontWeight: '600', textAlign:'center'}} key={index} className='dark:text-white text-sm'>{top}</StyledTableCell>
                ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {taskStatuses.length>0? taskStatuses.map((item, id)=>(
                <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row" align='center' >
                    {item.tasklabel}
                </StyledTableCell>
                <StyledTableCell align="right" sx={{textAlign:'center'}}>{item.description}</StyledTableCell>
                <StyledTableCell align="right" sx={{textAlign:'center'}}>{item.status}</StyledTableCell>
                <StyledTableCell align="right" sx={{textAlign:'center'}}>{item.tasklabel2}</StyledTableCell>
                <StyledTableCell align="right" sx={{textAlign:'center'}}>{item.priority}</StyledTableCell>
                <StyledTableCell align="right" sx={{textAlign:'center'}}>{item.startDate}</StyledTableCell>
                <StyledTableCell align="right" sx={{textAlign:'center'}}>{item.endDate}</StyledTableCell>
                {/* <StyledTableCell align="right" >{item.assignedTo}</StyledTableCell> */}
                </StyledTableRow>
            )) : null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
