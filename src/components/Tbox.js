/* eslint-disable no-array-constructor */
import React ,{ useState } from 'react'
import PropTypes from 'prop-types'



export default function Tbox(props) {
    // useEffect(() => {
    //     document.title = "TxTrumble - Home";
    //   }, []);



    const [txt, setxt] = useState("");

    const Writer = () => {
        let txt = document.getElementById("txtbox").value;
        txt = txt.split(" ");
        txt = txt.join(" ");
        setxt(txt);
    }
    const UPCaseclick = () => {
        let UPtxt = document.getElementById("txtbox").value;
        UPtxt = UPtxt.toUpperCase();
        setxt(UPtxt);
        props.toggleAlert("success"," Text converted TO UPPER CASE ");
    }
    const locaseclick = () => {
        let lotxt = document.getElementById("txtbox").value;
        lotxt = lotxt.toLowerCase();
        setxt(lotxt);
        props.toggleAlert("success"," Text converted to lower case ");
    }
    const Secaseclick = () => {
        let Setxt = document.getElementById("txtbox").value;
        Setxt = Setxt.toLowerCase();
        Setxt = Setxt.charAt(0).toUpperCase() + Setxt.slice(1);
        setxt(Setxt);
        props.toggleAlert("success"," Text converted To sentence case ");

    }
    const Cacaseclick = () => {
        let Catxt = document.getElementById("txtbox").value;
        Catxt = Catxt.toLowerCase().split(' ');
        for (var i = 0; i < Catxt.length; i++) {
            Catxt[i] = Catxt[i].charAt(0).toUpperCase() + Catxt[i].slice(1);
        }
        Catxt = Catxt.join(' ');
        setxt(Catxt); 
        props.toggleAlert("success"," Text converted To Capitalize Case ");
    }
    const Alcaseclick = () => {
        let Altxt = document.getElementById("txtbox").value;
        var chars = Altxt.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
            Altxt = chars.join("");
        }
        setxt(Altxt);
        props.toggleAlert("success"," Text converted To AlTeRnAtE cAsE ");
    }
    const Rscaseclick = () => {
        let Rstxt = document.getElementById("txtbox").value;
        Rstxt = Rstxt.split(/[ ]+/);
        Rstxt = Rstxt.join(" ");
        setxt(Rstxt);
        props.toggleAlert("success"," Extra space removed from text ");
    }
    const Copyclick = () => {
        let Copytxt = document.getElementById("txtbox").value;
        navigator.clipboard.writeText(Copytxt);
        props.toggleAlert("success"," Text Copied ");
    }
    const Clearclick = () => {
        setxt("");
        props.toggleAlert("success"," Text Cleard ");
    }
    
      
        
    return (
      <div style={{color:props.mode === 'light' ? '#333333':'white'  }}>
          <h2 className="my-3">
              {props.heading}
          </h2>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor:props.mode === 'light' ? 'white':'rgb(19 29 38)',color:props.mode === 'light' ? '#333333':'white'  }} value= { txt } onChange= { Writer } id="txtbox" rows="8"></textarea>
          </div>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={UPCaseclick}>TO UPPER CASE</button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={locaseclick}>to lower case</button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={Secaseclick}>To sentence case</button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={Cacaseclick}>To Capitalize Case</button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={Alcaseclick}>To AlTeRnAtE cAsE</button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={Rscaseclick}>Remove extra space </button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={Copyclick}>Copy text</button>
          <button disabled={txt.length===0} className="btn btn-dark mx-1 my-1 " onClick={Clearclick}>Clear all</button>
          <div>
              <h2 className="my-3">
                  Text Summary
              </h2>
              <p className="my-2" onChange={Writer}>
                  {txt.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} Words and {txt.length} Characters <br/>
                  {0.008 * txt.split(" ").length} Minutes to read
              </p>
          </div>
          <div>
              <h2 className="my-3">
                  Text Preveiw
              </h2>
              <p className="my-2">
                  {txt.length>0?txt:'Enter some text in the above area to see the preveiw here...'}
              </p>
          </div>

      </div>
    )
}



Tbox.propTypes = {
    heading: PropTypes.string,
}

 