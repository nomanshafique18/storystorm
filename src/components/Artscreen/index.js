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

  const imageUrl2 = "https://source.unsplash.com/random";
  const imageUrl3 = "https://source.unsplash.com/random";
  const [activeBackground, setActiveBackground] = React.useState(false);


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
                <div class="carCont d-flex justify-content-center align-items-center w-80">
                  <div class="w-28 d-flex align-items-center">
                    <input type="range" min="1" class="mr-2" />
                    <img src="./images/img-bw.jpg" class="rounded w-16 ml-2" />
                    <img
                      src="./images/img-wall.jpg"
                      class="rounded w-16 ml-2"
                    />
                    <img src="./images/img-bw.jpg" class="rounded w-16 ml-2" />
                  </div>
                  <div class="w-28">
                    <img src="./images/icons/1.png" class="w-7 ml-2" />
                    <img src="./images/icons/2.png" class="w-7 ml-2" />
                    <img src="./images/icons/3.png" class="w-7 ml-2" />
                    <img src="./images/icons/4.png" class="w-7 ml-2" />
                    <img src="./images/icons/5.png" class="w-7 ml-2" />
                    <img src="./images/icons/6.png" class="w-7 ml-2" />
                  </div>
                </div>
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
                  setActiveBackground(!activeBackground);
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
              <label class="custom-file-upload">
                <input
                  type="file"
                  className="form-control"
                  // value={imageState}
                  onChange={(e) => {
                    console.log(e?.target?.files[0]);
                    console.log(URL.createObjectURL(e?.target?.files[0]));
                    setImageState(e?.target?.files[0]);
                  }}
                />
                <input type="file" />
                <img
                  src="./images/img.png"
                  class="bi"
                  width="30"
                  height="30"
                  role="img"
                  aria-label="Home"
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
                  onClick={() => {
                    setActiveBackground(!activeBackground);
                  }}
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
                const t=[...textArray]
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
        <div className="drawingArea w-25 ml-5 mt-4 ">
          <div>
            <div class="col-sm-12">
              {/* <ColorPicker
                name="color"
                defaultValue={"Choose Color"}
                value={background}
                onChange={(color) => setBackground(color)}
              /> */}

              <p>Try to drag and image into the stage:</p>
              {PicArray.map(() => {
                return (
                  <Draggable>
                    <Resizable
                      defaultSize={{
                        width: 100,
                        height: 160,
                      }}
                      style={{
                        position: "absolute",
                        // top: "60px",
                        // left: "70px",
                        // margin: "45px",
                        background: `url(${imageUrl3})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                      lockAspectRatio={true}
                    ></Resizable>
                  </Draggable>
                );
              })}
            </div>
            {activeBackground && (
              <HexColorPicker
                style={{ marginTop: "20rem" }}
                color={background}
                onChange={setBackground}
              />
            )}
          </div>
        </div>

        <div
          className="drawingArea ml-5 mt-4 mr-5"
          style={{ backgroundColor: background, overflow: "hidden" }}
        >
          <div>
            <div class="col-sm-12 pl-5 pr-5">
              <div>
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
                            
                            <ContentEditable
                              html={text.current}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              style={{
                               
                                fontSize: "20px",
                                width: "100%",
                                // position: "absolute",
                                padding: "0.5rem",
                               
                              }}
                            />
                          </Resizable>
                        </Draggable>
                      </>
                    );
                  })}
                </p>

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
                        style={{ width: "100%", display: "inline-block" }}
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
