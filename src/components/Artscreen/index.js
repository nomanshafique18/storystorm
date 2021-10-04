import React, { useState } from 'react'
import "./custom.css"
import {BsSearch} from "react-icons/bs"
import {FaShare, FaCommentDots} from "react-icons/fa"


export default function Artscreen() {
const [activeSlideIndex,setActiveSlideIndex]=useState(0)
  return(
    
  <>

    <nav class="navbar mb-0 navbar-expand-md navbar-dark homeNavbar" aria-label="Fourth navbar example">
      <div class="container-fluid bb-1">
        <div class="row w-100">
          <div class="col-sm-12 d-flex pb-2 d-b-m pr-n-m ml-15-m">
            <a class="navbar-brand" href="#"><img src="./images/logo.png" height="50"/></a>
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
                  <BsSearch/></span>
                  <input type="text" class="form-control bl-0 pl-0 ml--2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                </div>
              </form>
              <div class="rightNavbar">
                  <div>
                    <a class="btn btn-primary mr-20" href="#">
                    <i class="fa fa-external-link-alt"></i> Export</a>
                  </div>
                  <div class="d-block mlr-20">
                    <img src="./images/share.png" height="20"/>
                    <p class="mb-0">Share</p>
                  </div>
                  <div class="d-block mlr-20">
                    <img src="./images/save.png" height="20"/>
                    <p class="mb-0">Save</p>
                  </div>
                  <div class="d-block mlr-20">
                    <img src="./images/preview.png" height="20"/>
                    <p class="mb-0">Preview</p>
                  </div>
                  <div class="d-block ml-20">
                    <img src="./images/dummy.png" height="50" width="50" class="profileImg"/>
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
                    <div class="leftCont shareIcons">
                      <img src="./images/share-iconl.png" height="22"  />
                      <img src="./images/share-icon.png" height="22"  />
                    </div>
                    <div class="carCont">
                        <div class="d-flex justify-content-center align-items-center">
                        <input
                              type="range"
                              min="1"
                            />
                            <img src="./images/align.png" class="w-25 ml-3"/>
                        
                          
                        </div>
                        
                    
                    </div>
                    <div class="leftCont">
                      <FaCommentDots class="defaultColor fs-30"/>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </nav>
    <div class="d-flex flex-column flex-shrink-0 bg-light w-4 min-h-100 editMenu">
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        
        <li class="nav-item pt-11">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/cursor.png" class="bi" width="24" height="24" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/brush.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/pen.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/crop.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/scissor.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/text.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/fr-bg.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/img.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/square.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/dot.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/eraser.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="./images/del.png" class="bi" width="30" height="30" role="img" aria-label="Home"/>
          </a>
        </li>

      
      </ul>
    </div>
    </>
    )
}