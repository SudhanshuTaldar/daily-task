import React from 'react'
import * as FaIcons from "react-icons/fa";
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg " style={{ backgroundColor: 'rgb(139 ,189 ,202)', height: 80 + 'px' }}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={{ color: "black" }}></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    helo<span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-4 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" style={{ color: "black" }}><FaIcons.FaSchool /></a>
                        </li>
                    </ul>
                    <ul class="navbar-nav me-auto mb-4 mb-lg-0">
                        <li class="nav-item">
                            <a><FaIcons.FaChrome /> &nbsp; {props.title}</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex justify-content-end">
                        <li class="nav-item">
                            <a href='form'> form</a>
                        </li>
                        &nbsp;&nbsp;
                        <li class="nav-item">
                            <a href='#'> pqr</a>
                        </li>
                        &nbsp;&nbsp;
                        <li class="nav-item">
                            <a href='#'> xyz</a>
                        </li>
                        &nbsp;&nbsp;
                        <li class="nav-item">
                            <a href='#'> str</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title : "Defualt"
}

Header.prototype = {
    title:PropTypes.string
}
