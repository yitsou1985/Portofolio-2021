import React, { Component } from 'react'
import {Button} from 'reactstrap';
import jsPDF from "jspdf";
import  'reactstrap';
import logo from '../src/components/image/CVPhoto.png';
// le fichier est en PNG et ensuite converti en pdf
export default class CVPhoto extends Component {

    pdfGenerate=()=>{
        var doc= new jsPDF('portrait','px','a4','false');
        doc.addImage(logo,'PNG',60,60)
        
        // doc.text(60,60,'Name')
        doc.save('CVPhoto.pdf')
       
    }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <h1 style={{ cursor: "grab" }} onClick={this.pdfGenerate}>
          Download Pdf With a photo
        </h1>
      </div>
    );
  }
}
