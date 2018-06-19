import React, { Fragment } from 'react'
import styled from 'styled-components'

import { setBgColor } from '../../utility/colorHandler'

import './iphone.scss'

const Background = styled.div`
  position: relative;
  background: #eee;
  height: 640px;
  width: 316px;
  border-radius: 30px;
  transform: scale(1.3);

  &::after {
    content: '';
    position: absolute;
    background: ${({ bgColor }) => setBgColor(bgColor)};
    height: 500px;
    width: 290px;
    border-radius: 5px;
    margin: 70px 0 0 13px;
  }
`

const IPhone = ({ bgColor }) => (
  <Fragment>
    <div className="absolute">
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="316px"
        height="640px"
        viewBox="0 0 316 640"
        enableBackground="new 0 0 316 640"
      >
        <g>
          <defs>
            <path
              id="SVGID_1_"
              d="M0,29.997C0,13.43,13.427,0,29.996,0h256.009C302.57,0,316,13.441,316,29.997v580.006
            C316,626.57,302.573,640,286.004,640H29.996C13.429,640,0,626.559,0,610.003V29.997z"
            />
          </defs>
          <clipPath id="SVGID_2_">
            <use overflow="visible" />
          </clipPath>
          <path
            clipPath="url(#SVGID_2_)"
            fill="none"
            className="outline-one"
            stroke="#dddddd"
            strokeWidth="8"
            strokeMiterlimit="10"
            d="M0,29.997
        C0,13.43,13.427,0,29.996,0h256.009C302.57,0,316,13.441,316,29.997v580.006C316,626.57,302.573,640,286.004,640H29.996
        C13.429,640,0,626.559,0,610.003V29.997z"
          />
        </g>
        <g>
          <defs>
            <path
              id="SVGID_3_"
              d="M13,74.01c0-2.767,2.229-5.01,5.003-5.01h279.994c2.763,0,5.003,2.229,5.003,5.01v489.981
c0,2.767-2.229,5.009-5.003,5.009H18.003C15.24,569,13,566.771,13,563.991V74.01z"
            />
          </defs>
          <clipPath id="SVGID_4_">
            <use overflow="visible" />
          </clipPath>
          <path
            clipPath="url(#SVGID_4_)"
            fill="none"
            className="outline-two"
            stroke="#dddddd"
            strokeWidth="8"
            strokeMiterlimit="10"
            d="M13,74.009
C13,71.243,15.229,69,18.003,69h279.994c2.763,0,5.003,2.229,5.003,5.009V563.99c0,2.767-2.229,5.01-5.003,5.01H18.003
C15.24,569,13,566.771,13,563.99V74.009z"
          />
        </g>
      </svg>
    </div>
    <Background bgColor={bgColor}>
      <div className="extra" />
    </Background>
  </Fragment>
)

export default IPhone
