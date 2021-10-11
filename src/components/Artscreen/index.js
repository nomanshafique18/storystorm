import React, { useState } from "react";
import "./custom.css";
import { BsSearch } from "react-icons/bs";
import { FaShare, FaCommentDots } from "react-icons/fa";
import useImage from "use-image";
import { Stage, Layer, Star, Text, Image } from "react-konva";
// import Text from "react-editable-text"
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import ColorPicker from "material-ui-color-picker";
import { FormControl, FormLabel, Hidden, Slider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { pt } from "date-fns/locale";
// import { useNode } from "@craftjs/core";
import { HexColorPicker } from "react-colorful";
import ContentEditable from "react-contenteditable";

export default function Artscreen() {
  const text = React.useRef("Write");

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(text.current);
  };

  const [imageState, setImageState] = React.useState();
  const PicArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
  const [textArray, setTextArray] = React.useState([]);
const [clickImg,setClickImage]=React.useState(true)
const [clickImg2,setClickImage2]=React.useState(true)
const [clickImg3,setClickImage3]=React.useState(true)
const [clickImg4,setClickImage4]=React.useState(true)
const [clickImg5,setClickImage5]=React.useState(true)
const [clickImg6,setClickImage6]=React.useState(true)


  const imageUrl2 = "https://source.unsplash.com/random";
  const imageUrl3 = "https://source.unsplash.com/random";
  const[backgroundvisible,setBackgroundVisible] = useState(false)
  const [activeBackground, setActiveBackground] = React.useState(false);
// const[]
  const [visibility,setVisibility] = useState(true)
  const [background, setBackground] = useState("");

  return (
    <>
      <nav
        class="navbar mb-0 navbar-expand-md navbar-dark homeNavbar"
        aria-label="Fourth navbar example"
      >
        <div class="container-fluid bb-1">
          <div class="row w-100">
            <div class="col-sm-12 d-flex pb-2 d-b-m pr-n-m ml-15-m">
              <a class="navbar-brand" >
                <img src="./images/logo.png" height="50" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsCollapse"
                aria-controls="navbarsCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="collapse1 navbar-collapse w-100 topHead"
                id="navbarsCollapse"
              >
                <ul class="navbar-nav  mb-2 mb-md-0 d-n-m">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link mr-20  dropdown-toggle btn btn-default"

                      id="dropdown04"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      File
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="btn btn-default"

                      id="dropdown04"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Import
                    </a>
                  </li>
                </ul>
                <form>
                  <div class="input-group searchForm">
                    <span
                      class="input-group-text fa fa-search pt-2 bg-white br-0"
                      id="basic-addon1"
                    >
                      <BsSearch />
                    </span>
                    <input
                      type="text"
                      class="form-control bl-0 pl-0 ml--2"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </form>
                <div class="rightNavbar">
                  <div>
                    <a class="btn btn-primary mr-20" >
                      <i class="fa fa-external-link-alt"></i> Export
                    </a>
                  </div>
                  <div class="d-block mlr-20">
                    <img src="./images/share.png" height="20" />
                    <p class="mb-0">Share</p>
                  </div>
                  <div class="d-block mlr-20">
                    <img src="./images/save.png" height="20" />
                    <p class="mb-0">Save</p>
                  </div>
                  <div class="d-block mlr-20">
                    <img src="./images/preview.png" height="20" />
                    <p class="mb-0">Preview</p>
                  </div>
                  <div class="d-block ml-20">
                    <img
                      src="./images/dummy.png"
                      height="50"
                      width="50"
                      class="profileImg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row w-100">
            <div class="col-sm-12 pr-n-m">
              <div class="d-flex justify-content-between align-items-center pt-2">
                <div class="leftCont shareIcons w-65">
                  <img src="./images/share-iconl.png" height="22" />
                  <img src="./images/share-icon.png" height="22" />
                </div>
                {/* <div class="carCont d-flex justify-content-center align-items-center w-80">
                  <div class="w-28 d-flex align-items-center">
                    <input type="range" min="1" class="mr-2" />
                    <img src="./images/img-bw.jpg" class="rounded w-16 ml-2" />
                    <img
                      src="./images/img-wall.jpg"
                      class="rounded w-16 ml-2"
                    />
                    <img src="./images/img-bw.jpg" class="rounded w-16 ml-2" />
                  </div> 
                  <div class="w-28 alignmentImgs">
                    <img src="./images/1.png" class="w-7 ml-2" />
                    <img src="./images/2.png" class="w-7 ml-2" />
                    <img src="./images/3.png" class="w-7 ml-2" />
                    <img src="./images/4.png" class="w-7 ml-2" />
                    <img src="./images/5.png" class="w-7 ml-2" />
                    <img src="./images/6.png" class="w-7 ml-2" />
                  </div>
                </div>
                */}
                <div class="leftCont">
                  <FaCommentDots class="defaultColor fs-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="d-flex flex-row bg-light  ">
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center editMenu min-h-100">
          <li class="nav-item pt-11">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/cursor.png"
                class="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/brush.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/pen.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/crop.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/scissor.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              onClick={() => {
                console.log("df");

                setTextArray([...textArray, "buttons"]);
              }}
            >
              <img
                src="./images/text.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/fr-bg.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
                onClick={() => {
                  // setBackground(true)
                  setBackgroundVisible(true)
                  setActiveBackground(!activeBackground);
                  setVisibility(!visibility)
                
                }}
                // onClick={() => {
                //   setActiveBackground(!activeBackground);
                // }}
              />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"  
            >
                <img
                src="./images/img.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
                onClick={()=>{
                  setVisibility(!visibility)
                  setBackgroundVisible(false)
                }}
              />

            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/square.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            <a

              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <img
                src="./images/dot.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
          <li class="nav-item">
            {/* <label class="custom-file-upload"> */}
           <a
              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <label class="custom-file-upload">
                <img
                  src="./images/eraser.png"
                  class="bi"
                  width="30"
                  height="30"
                  role="img"
                  aria-label="Home"
                  // onClick={() => {
                  //   // setBackground(true)
                  //   setBackgroundVisible(true)
                  //   setActiveBackground(!activeBackground);
                  //   setVisibility(!visibility)
                  
                  // }}
                />
              </label>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              onClick={() => {
                setImageState(false);
                const t = [...textArray]
                t.pop()
                setTextArray(t)
              }}
            >
              <img
                src="./images/del.png"
                class="bi"
                width="30"
                height="30"
                role="img"
                aria-label="Home"
              />
            </a>
          </li>
        </ul>
      { visibility &&
        <div className="drawingArea w-25 ml-5 mt-4 d-flex justify-content-center">
          
            <div class="col-sm-12">
         <div class="imagesList">
          {!backgroundvisible && clickImg && 
                <>      
                    <img class="img-responsive"
              //  src="https://source.unsplash.com/random"
              src="./images/c1.jpeg" 
              onClick={()=>{
      
                 setClickImage2(false)
               }}/>
                     <img class="img-responsive"
              //  src="https://source.unsplash.com/random"
              src="./images/c2.jpeg" 
              onClick={()=>{
      
                 setClickImage3(false)
               }}/>
                     <img class="img-responsive"
              //  src="https://source.unsplash.com/random"
              src="./images/c3.jpeg" 
              onClick={()=>{
      
                 setClickImage4(false)
               }}/>
                  <img class="img-responsive"
              //  src="https://source.unsplash.com/random"
              src="./images/c4.jpeg" 
              onClick={()=>{
      
                 setClickImage5(false)
               }}/>
                  <img class="img-responsive"
              //  src="https://source.unsplash.com/random"
              src="./images/c5.jpeg" 
              onClick={()=>{
      
                 setClickImage6(false)
               }}/>
              
              
            <a
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <label class="custom-file-upload">
                <input
                  type="file"
                  className="btn btn-primary form-control"
                  // value={imageState}
                  onChange={(e) => {
                    console.log(e?.target?.files[0]);
                    console.log(URL.createObjectURL(e?.target?.files[0]));
                    setImageState(e?.target?.files[0]);
                  }}
                />
                Choose Image
                <input type="file" />
              </label>
              </a>
              </>
}
            </div>
            {backgroundvisible && (
              <HexColorPicker
                style={{ marginTop: "20rem" }}
                color={background}
                onChange={setBackground}
              />
            )}
          </div>
        </div>
}
        <div
          className="drawingArea ml-5 mt-4 mr-5"
          style={{ backgroundColor: background, overflow: "hidden" }}
        >
          <div>
            <div class="col-sm-12 pl-5 pr-5">
              <div class="d-flex flex-wrap">
                <p>
                  {textArray.map((item) => {
                    return (
                      <>
                        <Draggable >

                          <Resizable
                            defaultSize={{
                              width: 120,
                              height: 100,
                            }}
                            style={

                              {
                                // position:"absolute"
                              }}
                          >
 <button
                        className="btn"
                        onClick={() => {
                          const t = [...textArray]
                          t.pop()
                          setTextArray(t)
                        }}
                      >
                        x
                      </button>
                            <ContentEditable
                              html={text.current}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              style={{

                                fontSize: "20px",
                                width: "100%",
                                // position: "absolute",
                                padding: "0.5rem",
                                zIndex: 99999
                              }}
                            />
                          </Resizable>
                        </Draggable>
                      </>
                    );
                  })}
                </p>
                {!clickImg2 && (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 200,
                        height: 100,
                      }}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          setClickImage2(true);
                        
                        }}
                      >
                        x
                      </button>
                      <img
                        style={{ zIndex: 999,width: "100%", display: "inline-block" }}
                        src="./images/c1.jpeg" 
                        // src={'https://source.unsplash.com/random'}
                      />
                    </Resizable>
                  </Draggable>
                )}
                 {!clickImg3 && (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 200,
                        height: 100,
                      }}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          setClickImage3(true);
                        
                        }}
                      >
                        x
                      </button>
                      <img
                        style={{ zIndex: 999,width: "100%", display: "inline-block" }}
                        src="./images/c2.jpeg" 
                        // src={'https://source.unsplash.com/random'}
                      />
                    </Resizable>
                  </Draggable>
                )}
                 {!clickImg4 && (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 200,
                        height: 100,
                      }}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          setClickImage4(true);
                        
                        }}
                      >
                        x
                      </button>
                      <img
                        style={{ zIndex: 999,width: "100%", display: "inline-block" }}
                        src="./images/c3.jpeg" 
                        // src={'https://source.unsplash.com/random'}
                      />
                    </Resizable>
                  </Draggable>
                )}
                 {!clickImg5 && (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 200,
                        height: 100,
                      }}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          setClickImage5(true);
                        
                        }}
                      >
                        x
                      </button>
                      <img
                        style={{ zIndex: 999,width: "100%", display: "inline-block" }}
                        src="./images/c4.jpeg" 
                        // src={'https://source.unsplash.com/random'}
                      />
                    </Resizable>
                  </Draggable>
                )}
                 {!clickImg6 && (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 200,
                        height: 100,
                      }}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          setClickImage6(true);
                        
                        }}
                      >
                        x
                      </button>
                      <img
                        style={{ zIndex: 999,width: "100%", display: "inline-block" }}
                        src="./images/c5.jpeg" 
                        // src={'https://source.unsplash.com/random'}
                      />
                    </Resizable>
                  </Draggable>
                )}
                {imageState && (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 200,
                        height: 100,
                      }}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          setImageState(false);
                        }}
                      >
                        x
                      </button>
                      <img
                        style={{ zIndex: 999,width: "100%", display: "inline-block" }}
                        src={URL.createObjectURL(imageState)}
                      />
                    </Resizable>
                  </Draggable>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
