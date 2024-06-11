export const styleTemplate = [
  {
    style: `
      figure,header,nav,main,section {
        display: block
      }

      ul,li {
          margin: 0;
          padding: 0;
          list-style: none
      }

      html {
          font-family: sans-serif;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%
      }

      body {
          margin: 0
      }

      a:focus {
          outline: thin dotted
      }

      a:active,a:hover {
          outline: 0
      }

      .h1 {
          font-size: 2em
      }

      img {
          border: 0
      }

      svg:not(:root) {
          overflow: hidden
      }

      figure {
          margin: 0
      }

      /*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */

      @font-face {
          font-family: 'Canela Web';
          src: url("../fonts/Canela-Thin-Web-f8f815bf.woff2") format("woff2"),url("../fonts/Canela-Thin-Web-fddfec25.woff") format("woff");
          font-weight: 100;
          font-style: normal;
          font-stretch: normal
      }

      @font-face {
          font-family: 'calibre';
          src: url("../fonts/CalibreWeb-Regular-01679dc9.woff2") format("woff2"),url("../fonts/CalibreWeb-Regular-357a34ec.woff") format("woff"),url("../fonts/CalibreWeb-Regular-895d3b48.eot") format("eot");
          font-weight: normal;
          font-style: normal
      }

      @font-face {
          font-family: 'calibre';
          src: url("../fonts/CalibreWeb-Bold-1f35efb1.woff") format("woff"),url("../fonts/CalibreWeb-Bold-b4160afa.eot") format("eot");
          font-weight: bold;
          font-style: normal
      }

      @font-face {
          font-family: 'calibre';
          src: url("../fonts/CalibreWeb-Light-2ff84cb7.woff") format("woff"),url("../fonts/CalibreWeb-Light-e84c5319.eot") format("eot");
          font-weight: 300;
          font-style: normal
      }

      @-ms-viewport {
          width: device-width
      }

      html {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -ms-overflow-style: scrollbar
      }

      *,*::before,*::after {
          -webkit-box-sizing: inherit;
          box-sizing: inherit
      }

      .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto
      }

      @media (min-width: 576px) {
          .container {
              max-width:540px
          }
      }

      @media (min-width: 768px) {
          .container {
              max-width:720px
          }
      }

      @media (min-width: 992px) {
          .container {
              max-width:960px
          }
      }

      @media (min-width: 1200px) {
          .container {
              max-width:1140px
          }
      }

      .row {
          display: -ms-flexbox;
          display: -webkit-box;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px
      }

      .col-2,.col-12,.col,.col-md-1,.col-md-3,.col-md-8,.col-md-9,.col-md-10 {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px
      }

      .col {
          -ms-flex-preferred-size: 0;
          flex-basis: 0;
          -ms-flex-positive: 1;
          -webkit-box-flex: 1;
          flex-grow: 1;
          max-width: 100%
      }

      .col-2 {
          -ms-flex: 0 0 16.666667%;
          -webkit-box-flex: 0;
          flex: 0 0 16.666667%;
          max-width: 16.666667%
      }

      .col-12 {
          -ms-flex: 0 0 100%;
          -webkit-box-flex: 0;
          flex: 0 0 100%;
          max-width: 100%
      }

      @media (min-width: 768px) {

          .col-md-1 {
              -ms-flex: 0 0 8.333333%;
              -webkit-box-flex: 0;
              flex: 0 0 8.333333%;
              max-width: 8.333333%
          }

          .col-md-3 {
              -ms-flex: 0 0 25%;
              -webkit-box-flex: 0;
              flex: 0 0 25%;
              max-width: 25%
          }

          .col-md-8 {
              -ms-flex: 0 0 66.666667%;
              -webkit-box-flex: 0;
              flex: 0 0 66.666667%;
              max-width: 66.666667%
          }

          .col-md-9 {
              -ms-flex: 0 0 75%;
              -webkit-box-flex: 0;
              flex: 0 0 75%;
              max-width: 75%
          }

          .col-md-10 {
              -ms-flex: 0 0 83.333333%;
              -webkit-box-flex: 0;
              flex: 0 0 83.333333%;
              max-width: 83.333333%
          }
      }

      @media (min-width: 768px) {

          .justify-content-md-center {
              -ms-flex-pack: center !important;
              -webkit-box-pack: center !important;
              justify-content: center !important
          }
      }

      .mt-3 {
          margin-top: 1rem !important
      }

      .h1 {
          font-size: 80px;
          font-family: "Canela Web", serif
      }

      @media only screen and (min-width: 770px) {
          .h1 {
              font-size:120px
          }
      }

      .h2 {
          font-size: 2em;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-top: 0.5em
      }

      @media only screen and (min-width: 770px) {
          .h2 {
              font-size:48px;
              margin-top: 0.75em
          }
      }

      .h3 {
          font-size: 1.5em;
          margin-top: 2em
      }

      .h5 {
          font-size: .75em;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase
      }

      @media only screen and (min-width: 770px) {
          .h5 {
              font-size:1.25em
          }
      }

      .h6 {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase
      }

      p.large {
          font-size: 24px;
          font-family: "Canela Web", serif;
          line-height: 1.6
      }

      @media only screen and (min-width: 770px) {
          p.large {
              font-size:32px
          }
      }

      html,body {
          position: relative;
          margin: 0;
          padding: 0;
          font-family: "calibre", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
          font-weight: 400;
          background: #FEF1EC;
          color: #11223F;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 16px;
          overflow-x: clip
      }

      @media only screen and (min-width: 770px) and (max-height: 700px) {
          body {
              zoom:0.85
          }
      }

      ::-moz-selection {
          color: #fff;
          background: #11223F
      }

      ::selection {
          color: #fff;
          background: #11223F
      }

      ::-moz-selection {
          color: #fff;
          background: #11223F
      }

      .main {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: 100%
      }

      img {
          max-width: 100%;
          vertical-align: middle
      }

      a {
          text-decoration: none;
          color: #11223F
      }

      a:active,a:focus {
          outline: none
      }

      ::-webkit-input-placeholder {
          color: #BAC2CF
      }

      ::-moz-placeholder {
          color: #BAC2CF
      }

      :-ms-input-placeholder {
          color: #BAC2CF
      }

      :-moz-placeholder {
          color: #BAC2CF
      }

      .button-map {
          display: inline-block;
          border: 1px solid #11223F;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 1em 8em
      }

      .text-center {
          text-align: center
      }

      .nav {
          position: fixed;
          width: 100%;
          height: 48px;
          background: #FEF1EC;
          border-bottom: 1px solid #11223F;
          font-family: "Canela Web", serif;
          font-weight: 100;
          font-size: 28px;
          text-align: center;
          -webkit-overflow-scrolling: touch;
          z-index: 10
      }

      .nav-list {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          overflow-x: hidden;
          overflow-y: hidden;
          height: 48px
      }

      @media only screen and (min-width: 641px) {
          .nav-list {
              -webkit-box-pack:center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center
          }
      }

      .nav-list li a {
          display: block;
          white-space: nowrap;
          margin: 0 8px
      }

      @media only screen and (min-width: 770px) {
          .nav-list li a {
              min-width:160px;
              margin: 0
          }
      }

      .index-header {
          position: relative;
          text-align: center;
          padding: 15em 0 12em
      }

      @media only screen and (min-width: 770px) {
          .index-header {
              padding:15em 0 26em
          }
      }

      .index-header__subtitle {
          height: 30px;
          overflow: hidden;
          font-size: 14px
      }

      .index-header__subtitle .h5 {
          -webkit-animation: slideDown 1100ms cubic-bezier(0.52, 0.12, 0.46, 1.1);
          animation: slideDown 1100ms cubic-bezier(0.52, 0.12, 0.46, 1.1)
      }

      @media only screen and (min-width: 770px) {
          .index-header__subtitle {
              font-size:16px
          }
      }

      @-webkit-keyframes slideDown {
          0% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%)
          }

          60% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }

      @keyframes slideDown {
          0% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%)
          }

          60% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }

      .index-header__title {
          position: relative;
          margin-top: 20px;
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          -webkit-transform-origin: top center;
          transform-origin: top center
      }

      @media only screen and (min-width: 770px) {
          .index-header__title {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      .index-header__title .h1 {
          position: relative;
          z-index: 8
      }

      .index-header__title-text {
          height: 100px;
          overflow: hidden
      }

      @media only screen and (min-width: 770px) {
          .index-header__title-text {
              height:130px
          }
      }

      .index-header__title-text-1 {
          display: block;
          -webkit-animation: sliderUp 1600ms cubic-bezier(0.52, 0.12, 0.46, 1.1);
          animation: sliderUp 1600ms cubic-bezier(0.52, 0.12, 0.46, 1.1)
      }

      @-webkit-keyframes sliderUp {
          0% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          20% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }

      @keyframes sliderUp {
          0% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          20% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }

      .index-header__title-text-2 {
          display: block;
          -webkit-animation: sliderUp2 1800ms cubic-bezier(0.52, 0.12, 0.46, 1.1);
          animation: sliderUp2 1800ms cubic-bezier(0.52, 0.12, 0.46, 1.1)
      }

      @-webkit-keyframes sliderUp2 {
          0% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          30% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }

      @keyframes sliderUp2 {
          0% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          30% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }

      .index-header__cross {
          position: absolute;
          top: 44%;
          left: 50%;
          -webkit-transform: translateX(-50%) rotate(45deg);
          transform: translateX(-50%) rotate(45deg);
          -webkit-animation: fadeCross 3000ms ease-out;
          animation: fadeCross 3000ms ease-out
      }

      @media only screen and (min-width: 770px) {
          .index-header__cross {
              top:50%
          }
      }

      @-webkit-keyframes fadeCross {
          0% {
              opacity: 0;
              -webkit-transform: translateX(-50%) rotate(45deg) scale(0.95);
              transform: translateX(-50%) rotate(45deg) scale(0.95)
          }

          80% {
              opacity: 0;
              -webkit-transform: translateX(-50%) rotate(45deg) scale(0.95);
              transform: translateX(-50%) rotate(45deg) scale(0.95)
          }

          100% {
              opacity: 1;
              -webkit-transform: translateX(-50%) rotate(45deg) scale(1);
              transform: translateX(-50%) rotate(45deg) scale(1)
          }
      }

      @keyframes fadeCross {
          0% {
              opacity: 0;
              -webkit-transform: translateX(-50%) rotate(45deg) scale(0.95);
              transform: translateX(-50%) rotate(45deg) scale(0.95)
          }

          80% {
              opacity: 0;
              -webkit-transform: translateX(-50%) rotate(45deg) scale(0.95);
              transform: translateX(-50%) rotate(45deg) scale(0.95)
          }

          100% {
              opacity: 1;
              -webkit-transform: translateX(-50%) rotate(45deg) scale(1);
              transform: translateX(-50%) rotate(45deg) scale(1)
          }
      }

      .index-header__cross-1 {
          position: absolute;
          width: 16px;
          height: 16px;
          background: #F7BCA5;
          -webkit-transform: scaleX(10) scaleY(0.15);
          transform: scaleX(10) scaleY(0.15)
      }

      @media only screen and (min-width: 770px) {
          .index-header__cross-1 {
              -webkit-transform:scaleX(12) scaleY(0.2);
              transform: scaleX(12) scaleY(0.2)
          }
      }

      .index-header__cross-2 {
          position: absolute;
          width: 16px;
          height: 16px;
          background: #F7BCA5;
          -webkit-transform: scaleX(0.15) scaleY(10) rotateZ(90deg);
          transform: scaleX(0.15) scaleY(10) rotateZ(90deg)
      }

      @media only screen and (min-width: 770px) {
          .index-header__cross-2 {
              -webkit-transform:scaleX(0.2) scaleY(12);
              transform: scaleX(0.2) scaleY(12)
          }
      }

      .index-bg-left {
          position: absolute;
          top: 0;
          left: 70px;
          width: 50%;
          height: 1150px;
          zoom:0.6}

      @media only screen and (min-width: 641px) {
          .index-bg-left {
              left:-40px;
              width: auto
          }
      }

      @media only screen and (min-width: 770px) {
          .index-bg-left {
              left:0;
              width: 50%;
              height: 950px;
              zoom:1}
      }

      .index-bg-left div {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          opacity: 0
      }

      .index-bg-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 30%;
          height: 1150px;
          zoom:0.6}

      @media only screen and (min-width: 770px) {
          .index-bg-right {
              height:950px;
              zoom:1}
      }

      .index-bg-right div {
          position: absolute;
          top: 0;
          left: auto;
          right: 0;
          width: 100%;
          opacity: 0
      }

      div.index-bl-green-outline {
          top: 0%;
          left: -119%;
          -webkit-transform-origin: -100% -100%;
          transform-origin: -100% -100%
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-green-outline {
              top:-5%;
              left: -9%;
              opacity: 0
          }
      }

      div.index-bl-yellow-flower {
          top: 11%;
          left: 21%;
          z-index: 3
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-yellow-flower {
              top:7%;
              left: 45%;
              opacity: 0
          }
      }

      div.index-bl-yellow-flower svg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8)
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-yellow-flower svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-bl-cactus {
          top: 2%;
          left: -74%;
          -webkit-transform-origin: -50% 100%;
          transform-origin: -50% 100%
      }

      @media only screen and (min-width: 376px) {
          div.index-bl-cactus {
              left:-65%
          }
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-cactus {
              top:9%;
              left: -8%;
              opacity: 0
          }
      }

      div.index-bl-red-flower {
          top: 39%;
          left: -33%;
          z-index: 3
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-red-flower {
              top:50%;
              left: 4%;
              opacity: 0
          }
      }

      div.index-bl-moss-outline {
          top: auto;
          bottom: -2%;
          left: -180%;
          z-index: 1;
          -webkit-transform-origin: 50% 80%;
          transform-origin: 50% 80%
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-moss-outline {
              bottom:-2%;
              left: -26%;
              opacity: 0
          }
      }

      div.index-bl-pink-md {
          top: auto;
          bottom: 2%;
          left: -33%;
          z-index: 3;
          -webkit-transform-origin: 30% 100%;
          transform-origin: 30% 100%
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-pink-md {
              bottom:2%;
              left: 2%;
              opacity: 0
          }
      }

      div.index-bl-yellow-md {
          top: auto;
          bottom: 0%;
          left: 25%;
          z-index: 0;
          -webkit-transform-origin: 50% 90%;
          transform-origin: 50% 90%
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-yellow-md {
              bottom:4%;
              left: 54%;
              opacity: 0
          }
      }

      div.index-bl-yellow-md svg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8)
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-yellow-md svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-bl-green-dots {
          top: auto;
          bottom: 5%;
          left: 5%;
          z-index: 4
      }

      @media only screen and (min-width: 770px) {
          div.index-bl-green-dots {
              bottom:13.5%;
              left: 50%;
              opacity: 0
          }
      }

      div.index-br-pink {
          top: 3%;
          right: 12%;
          z-index: 4;
          -webkit-transform-origin: 50% -10%;
          transform-origin: 50% -10%
      }

      @media only screen and (min-width: 770px) {
          div.index-br-pink {
              top:1%;
              right: -15%;
              opacity: 0
          }
      }

      div.index-br-pink svg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8)
      }

      @media only screen and (min-width: 770px) {
          div.index-br-pink svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-br-red-dots {
          top: 5%;
          right: -20%;
          z-index: 5
      }

      @media only screen and (min-width: 770px) {
          div.index-br-red-dots {
              top:8%;
              right: -15%;
              opacity: 0
          }
      }

      div.index-br-red-dots svg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8)
      }

      @media only screen and (min-width: 770px) {
          div.index-br-red-dots svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-br-green-outline {
          top: 4%;
          right: -60%
      }

      @media only screen and (min-width: 770px) {
          div.index-br-green-outline {
              top:4%;
              right: -45%;
              opacity: 0
          }
      }

      div.index-br-green-big {
          top: 30%;
          right: -53%;
          z-index: 2;
          -webkit-transform-origin: 120% 50%;
          transform-origin: 120% 50%
      }

      @media only screen and (min-width: 770px) {
          div.index-br-green-big {
              top:22%;
              right: -42%;
              opacity: 0
          }
      }

      div.index-br-red-outline {
          top: 43%;
          right: -48%;
          z-index: 3;
          -webkit-transform-origin: 120% 50%;
          transform-origin: 120% 50%
      }

      @media only screen and (min-width: 770px) {
          div.index-br-red-outline {
              top:39%;
              right: -46%;
              opacity: 0
          }
      }

      div.index-br-red-outline svg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9)
      }

      @media only screen and (min-width: 770px) {
          div.index-br-red-outline svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-br-dark-outline {
          top: auto;
          bottom: -3%;
          right: -13%;
          -webkit-transform-origin: 50% 90%;
          transform-origin: 50% 90%
      }

      @media only screen and (min-width: 770px) {
          div.index-br-dark-outline {
              bottom:3%;
              right: -14%;
              opacity: 0
          }
      }

      div.index-br-dark-outline svg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8)
      }

      @media only screen and (min-width: 770px) {
          div.index-br-dark-outline svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-br-green-leaf {
          top: auto;
          bottom: -1%;
          right: -23%;
          z-index: 3;
          -webkit-transform-origin: 150% 50%;
          transform-origin: 150% 50%
      }

      @media only screen and (min-width: 770px) {
          div.index-br-green-leaf {
              bottom:8%;
              right: -44%;
              opacity: 0
          }
      }

      div.index-br-green-leaf svg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8)
      }

      @media only screen and (min-width: 770px) {
          div.index-br-green-leaf svg {
              -webkit-transform:scale(1);
              transform: scale(1)
          }
      }

      div.index-br-green-dots {
          top: auto;
          bottom: 13%;
          right: -15%;
          z-index: 3
      }

      @media only screen and (min-width: 770px) {
          div.index-br-green-dots {
              bottom:23%;
              right: -6%;
              opacity: 0
          }
      }

      .index-story {
          padding-top: 5em
      }

      @media only screen and (min-width: 770px) {
          .index-story {
              margin-top:6em;
              margin-bottom: 4em
          }
      }

      .index-facts {
          padding-top: 4em
      }

      .index-facts__wrapper {
          margin: 5px;
          border: 1px solid #FF5734
      }

      @media only screen and (min-width: 770px) {
          .index-facts__wrapper {
              margin:0 40px
          }
      }

      @media only screen and (min-width: 1025px) {
          .index-facts__wrapper {
              padding:20px
          }
      }

      .index-facts__list {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin: 10px 0
      }

      @media only screen and (min-width: 770px) {
          .index-facts__list {
              margin:40px
          }
      }

      .index-fact {
          -webkit-box-flex: 0;
          -ms-flex: 0 46%;
          flex: 0 46%;
          min-width: 46%;
          min-height: 240px;
          margin: 4px;
          -webkit-perspective: 1000px;
          perspective: 1000px
      }

      @media only screen and (min-width: 770px) {
          .index-fact {
              -webkit-box-flex:0;
              -ms-flex: 0 24%;
              flex: 0 24%;
              min-width: 24%;
              min-height: 360px
          }
      }

      .index-fact__inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          -webkit-transition: -webkit-transform 0.5s;
          transition: -webkit-transform 0.5s;
          transition: transform 0.5s;
          transition: transform 0.5s, -webkit-transform 0.5s;
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          font-weight: 300;
          font-size: 24px
      }

      @media only screen and (min-width: 770px) {
          .index-fact__inner {
              -webkit-transition:-webkit-transform 0.75s;
              transition: -webkit-transform 0.75s;
              transition: transform 0.75s;
              transition: transform 0.75s, -webkit-transform 0.75s
          }
      }

      @media only screen and (min-width: 770px) {
          .index-fact:hover .index-fact__inner {
              -webkit-transform:rotateY(180deg);
              transform: rotateY(180deg)
          }
      }

      .index-fact__inner-front,.index-fact__inner-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          font-size: 20px;
          padding: 12px
      }

      @media only screen and (min-width: 770px) {
          .index-fact__inner-front,.index-fact__inner-back {
              padding:32px;
              font-size: 24px
          }
      }

      .index-fact__inner-front {
          background-color: #fff
      }

      .index-fact__inner-front-icon {
          height: 135px;
          text-align: center
      }

      .index-fact__inner-front-icon img {
          height: 135px
      }

      @media only screen and (min-width: 770px) {
          .index-fact__inner-front-icon {
              height:200px
          }

          .index-fact__inner-front-icon img {
              height: 200px
          }
      }

      .index-fact__inner-back {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          background-color: #FF5734;
          color: white;
          -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg)
      }

      .index-fact__intro {
          padding: 0px 4px 0 4px;
          background: transparent;
          margin-bottom: 20px
      }

      @media only screen and (min-width: 770px) {
          .index-fact__intro {
              -webkit-box-flex:0;
              -ms-flex: 0 24%;
              flex: 0 24%;
              min-width: 24%;
              padding: 0
          }
      }

      .index-fact__intro .h5 {
          font-size: 16px;
          margin-top: 2em
      }

      .index-fact__intro .h3 {
          font-size: 28px;
          line-height: 1.3;
          font-family: "Canela Web", serif;
          margin-top: 0.5em
      }

      @media only screen and (min-width: 770px) {
          .index-fact__intro .h3 {
              font-size:48px;
              line-height: 1
          }
      }

      .index-events {
          margin: 20px;
          padding-top: 4em
      }

      @media only screen and (min-width: 770px) {
          .index-events {
              margin:40px
          }
      }

      .index-events .banger-top {
          left: -60px
      }

      @media only screen and (min-width: 770px) {
          .index-events .banger-top {
              left:-200px
          }
      }

      .index-events .banger-1 {
          left: 0px
      }

      @media only screen and (min-width: 770px) {
          .index-events .banger-1 {
              left:90px
          }
      }

      .index-events .banger-2 {
          left: 130px
      }

      @media only screen and (min-width: 770px) {
          .index-events .banger-2 {
              left:340px
          }
      }

      .index-events header {
          position: relative;
          border-bottom: 1px solid #FF5734;
          padding-bottom: 16px;
          z-index: 2
      }

      .index-events__day {
          margin-top: 64px
      }

      @media only screen and (max-width: 769px) {
          .index-events__day .col-2 {
              -webkit-box-flex:0;
              -ms-flex: 0 0 20%;
              flex: 0 0 20%;
              max-width: 20%
          }
      }

      .index-event {
          position: relative;
          margin-top: 56px
      }

      .index-event .h3 {
          margin-top: 0;
          font-size: 48px;
          font-family: "Canela Web", serif
      }

      .index-event .h4 {
          margin-top: 40px;
          font-weight: 300;
          font-size: 36px
      }

      @media only screen and (min-width: 770px) {
          .index-event .h4 {
              margin-top:11px
          }
      }

      .index-event p {
          margin-top: 0;
          font-size: 20px;
          font-family: "Canela Web", serif;
          line-height: 1.4
      }

      @media only screen and (min-width: 770px) {
          .index-event p {
              font-size:24px
          }
      }

      .index-event__num {
          position: relative;
          top: 36px
      }

      .index-event__detail {
          margin-top: 8px
      }

      @media only screen and (min-width: 770px) {
          .index-event__detail {
              margin-top:24px
          }
      }

      .index-event__detail .h6 {
          position: relative;
          top: 12px;
          font-size: 10px
      }

      @media only screen and (min-width: 770px) {
          .index-event__detail .h6 {
              top:15px;
              font-size: 12px
          }
      }

      .index-event__detail p.sans {
          font-family: "calibre", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
          font-weight: 300
      }

      .index-event__detail.detail-sans .h6 {
          top: 8px
      }

      @media only screen and (min-width: 770px) {
          .index-event__detail.detail-sans .h6 {
              top:13px
          }
      }

      .index-event__detail .button-map {
          margin-bottom: 2em;
          -webkit-transition: background 275ms cubic-bezier(0.52, 0.12, 0.46, 1.1),color 275ms cubic-bezier(0.52, 0.12, 0.46, 1.1),border-color 275ms cubic-bezier(0.52, 0.12, 0.46, 1.1);
          transition: background 275ms cubic-bezier(0.52, 0.12, 0.46, 1.1),color 275ms cubic-bezier(0.52, 0.12, 0.46, 1.1),border-color 275ms cubic-bezier(0.52, 0.12, 0.46, 1.1)
      }

      .index-event__detail .button-map:hover {
          background: #FF5734;
          color: #fff;
          border-color: #FF5734
      }

      .index-event__graphic {
          position: relative;
          top: -70px;
          right: -45%;
          opacity: 0.4;
          margin-bottom: -140px
      }

      @media only screen and (min-width: 770px) {
          .index-event__graphic {
              position:absolute;
              top: -100px;
              right: 0;
              margin: 0;
              opacity: 1
          }
      }

      .index-event__image {
          width: 300px;
          height: 300px;
          border-radius: 200px;
          overflow: hidden
      }

      @media only screen and (min-width: 770px) {
          .index-event__image {
              width:360px;
              height: 360px;
              border-radius: 200px;
              overflow: hidden
          }
      }

      .index-event__thursday {
          position: absolute;
          top: 290px;
          left: auto;
          right: -100px;
          zoom:0.5;-webkit-transform: scale(-1);
          transform: scale(-1);
          z-index: 4
      }

      @media only screen and (min-width: 770px) {
          .index-event__thursday {
              top:160px;
              left: -80px;
              right: auto;
              -webkit-transform: none;
              transform: none;
              zoom:1}
      }

      .index-event__saturday {
          position: absolute;
          top: 0px;
          right: -90px;
          z-index: 1;
          zoom:0.6}

      @media only screen and (min-width: 770px) {
          .index-event__saturday {
              zoom:1
          }
      }

      .index-la {
          margin-top: 200px;
          margin-bottom: 100px
      }

      .index-la .banger-top {
          left: 0px
      }

      @media only screen and (min-width: 770px) {
          .index-la .banger-top {
              left:50px
          }
      }

      .index-la .banger-1 {
          left: 0px;
          line-height: 1.3
      }

      @media only screen and (min-width: 770px) {
          .index-la .banger-1 {
              left:-240px
          }
      }

      .index-la__map {
          position: relative;
          margin: -20px 0 0
      }

      @media only screen and (min-width: 770px) {
          .index-la__map {
              margin:-80px 0 0
          }
      }

      .index-la__map-mark {
          position: absolute;
          top: 27%;
          left: 42%;
          -webkit-transform: scale(0.5);
          transform: scale(0.5)
      }

      @media only screen and (min-width: 770px) {
          .index-la__map-mark {
              top:40%;
              left: 50%;
              -webkit-transform: none;
              transform: none
          }
      }

      .index-la__map-mark:before {
          content: '';
          display: block;
          position: absolute;
          top: 48px;
          left: 31px;
          width: 30px;
          height: 3px;
          background: #FF5734;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg)
      }

      .index-la__map-mark:after {
          content: '';
          display: block;
          position: absolute;
          top: 48px;
          left: 31px;
          width: 30px;
          height: 3px;
          background: #FF5734;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg)
      }

      .index-la__cards {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          position: relative;
          margin: -20px 0 10px;
          padding: 0 10px;
          z-index: 3
      }

      @media only screen and (min-width: 1025px) {
          .index-la__cards {
              margin:-60px 40px 0
          }
      }

      .index-la__card {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          background: #fff;
          padding: 0 10px 40px 20px;
          margin-bottom: 20px
      }

      @media only screen and (min-width: 770px) {
          .index-la__card {
              -webkit-box-flex:0;
              -ms-flex: 0 0 33%;
              flex: 0 0 33%;
              padding: 0 20px 40px 40px
          }
      }

      .index-la__card .h4 {
          font-size: 32px;
          font-family: "Canela Web", serif;
          margin-bottom: 20px
      }

      @media only screen and (min-width: 770px) {
          .index-la__card .h4 {
              font-size:48px
          }
      }

      @media only screen and (min-width: 770px) {
          .index-la__card {
              margin-bottom:0
          }
      }

      .intro-banger {
          display: block;
          position: relative;
          z-index: 1
      }

      .intro-banger .h5 {
          position: relative;
          margin-bottom: 20px
      }

      .intro-banger .h5:after {
          content: '';
          position: absolute;
          top: 8px;
          height: 1px;
          width: 300px;
          margin-left: 10px;
          background: #11223F
      }

      .intro-banger .h3 {
          font-size: 65px;
          font-family: "Canela Web", serif;
          margin: 0;
          line-height: 0.85
      }

      .intro-banger .h3 span {
          display: block;
          position: relative
      }

      @media only screen and (min-width: 770px) {
          .intro-banger .h3 {
              font-size:120px
          }
      }

      @keyframes slideDown {
          0% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%)
          }

          20% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%)
          }

          100% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%)
          }
      }
    `,
  },
]
