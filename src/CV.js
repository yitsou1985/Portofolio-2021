import React, { Component } from 'react'
import {Button} from 'reactstrap';
import jsPDF from "jspdf";
import  'reactstrap';
import logo from '../src/components/image/CV.png';

export default class CV extends Component {

    pdfGenerate=()=>{
      var doc = new jsPDF("portrait", "px", "a4", "false");
      doc.addImage(logo, "PNG", 60, 60);

      // doc.text(60,60,'Name')
      doc.save("CV.pdf");
    }

  render() {
    return (
      <div style={{textAlign:'center'}} ><br/>
        <h1 style={{cursor: "grab"}} onClick={this.pdfGenerate} >Download Pdf</h1>
      </div>
    )
  }
}
