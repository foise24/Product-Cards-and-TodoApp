import React from 'react';
import './next.css';


var row=1;
class Addtodo extends React.Component {
    handleClick(){
        
        var input=document.getElementById("input").value;
        // alert(input);
        var disp=document.getElementById("table");
        var newRow= disp.insertRow(row);
        var cell1= newRow.insertCell(0);
        var cell2=newRow.insertCell(1);
        cell1.innerHTML = input;
        cell2.innerHTML = "<button onClick={console.log('hi')}> Delete</button>"
        console.log(row)
        row++;
    }
  render(){
  return (
    <div className="addtodo" key="addtodo">
        <h1>Add to Do List</h1>
        <label>Type Here</label>
        <input type="text" id="input"/>
        <button
          onClick={() => this.handleClick()}> STORE </button>
        <table id="table">
            <tbody>
            <tr>
                <th>Data List</th>
                <th>Operations</th>
            </tr>
            </tbody>
        </table>     
    </div>
  )
}
}

export default Addtodo;