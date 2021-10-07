import React, { useState } from 'react'
import "./custom.css"
import { BsSearch } from "react-icons/bs"
import { FaShare, FaCommentDots } from "react-icons/fa"
import useImage from "use-image"
import { Stage, Layer, Star, Text, Image } from "react-konva"
// import Text from "react-editable-text"
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import ColorPicker from 'material-ui-color-picker'
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { pt } from 'date-fns/locale'
// import { useNode } from "@craftjs/core";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

export default function Artscreen() {


  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  const PicArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12]

  const imageUrl2 = "https://source.unsplash.com/random";
  const imageUrl3 = "https://source.unsplash.com/random";
  const [stars, setStars] = React.useState(INITIAL_STATE);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  const URLImage = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      //  <Draggable>
      <Image
        image={img}
        x={image.x}
        y={image.y}
        // I will use offset to set origin to the center of the image
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
      />
      // </Draggable>
    );
  };

  const [background, setBackground] = useState('');
  // const [activeSlideIndex,setActiveSlideIndex]=useState(0)

  // const [persistColor,setPersistColor]=React.useState()
  // const { background, padding, actions: {setProp} } = useNode(node => ({
  //   background: node.data.props.background,
  //   padding: node.data.props.padding
  // }));
  // let texts = { id: "unique-1" };
  // const textRef = React.useRef();

  return (
    <>
      <nav class="navbar mb-0 navbar-expand-md navbar-dark homeNavbar" aria-label="Fourth navbar example">
        <div class="container-fluid bb-1">
          <div class="row w-100">
            <div class="col-sm-12 d-flex pb-2 d-b-m pr-n-m ml-15-m">
              <a class="navbar-brand" href="#"><img src="./images/logo.png" height="50" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsCollapse" aria-controls="navbarsCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse1 navbar-collapse w-100 topHead" id="navbarsCollapse">
                <ul class="navbar-nav  mb-2 mb-md-0 d-n-m">
                  <li class="nav-item dropdown">
                    <a class="nav-link mr-20  dropdown-toggle btn btn-default" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">File</a>
                  </li>
                  <li class="nav-item">
                    <a class="btn btn-default" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Import</a>
                  </li>

                </ul>
                <form>
                  <div class="input-group searchForm">
                    <span class="input-group-text fa fa-search pt-2 bg-white br-0" id="basic-addon1">
                      <BsSearch /></span>
                    <input type="text" class="form-control bl-0 pl-0 ml--2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                  </div>
                </form>
                <div class="rightNavbar">
                  <div>
                    <a class="btn btn-primary mr-20" href="#">
                      <i class="fa fa-external-link-alt"></i> Export</a>
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
                    <img src="./images/dummy.png" height="50" width="50" class="profileImg" />
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
                    <input
                      type="range"
                      min="1"
                      class="mr-2"
                    />
                    <img src="./images/img-bw.jpg" class="rounded w-16 ml-2" />
                    <img src="./images/img-wall.jpg" class="rounded w-16 ml-2" />
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
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center editMenu min-h-100" >

          <li class="nav-item pt-11">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/cursor.png" class="bi" width="24" height="24" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/brush.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/pen.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/crop.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/scissor.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/text.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/fr-bg.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/img.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/square.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/dot.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/eraser.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src="./images/del.png" class="bi" width="30" height="30" role="img" aria-label="Home" />
            </a>
          </li>


        </ul>
        <div className="drawingArea w-25 ml-5 mt-4 ">
          <div>
            <div class="col-sm-12">
                <ColorPicker
                  name='color'
                  defaultValue={'Choose Color'}
                  value={background}
                  onChange={color => setBackground(color)}

                />
                <p>

                Try to drag and image into the stage:
                </p>
                {
                  PicArray.map(() => {

                    return <Draggable>
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
                  })

                }


            </div>
          </div>
        </div>


        <div className="drawingArea ml-5 mt-4 mr-5" style={{ backgroundColor: background }} >
          <div style={{ border: '1px solid #eee' }}>
            <div class="col-sm-12 pl-5 pr-5">
              <div>
                <p></p>
                <br />

              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}