<template>
  <div class="content">
    <img src="data:image/png;base64,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gAABAgQIECBAgAABAnkUSG8c+N6/0mbz3aSWNnsVGELvF/Yt/PFicnyj137bCBAgQIAAAQIECBCorkD7xTqT137z3onXf/fe16uroPO8C2y9uNVX7p7/Yqte/25Wa229h6/Qm/flUx8BAgQIECBAgACB2QmE0HvmrQvP1FrZ10IVjST580s/eu7D2VVkZgK9BR6+lUrY9fcDy//svPIr9PYGs5UAAQIECORJIPzSmX1wbin769nFPNWlFgIEyi/QHXpDx5tZ9owrv+Vf+yJ2uHXFNxYfrvxuNupHv/ToI39ye3NUMRIgQIAAgfwJhF861y+tLNXT9IlQXWOueS355ulb+atURQQIlFHgl29dOJw0W9/u1dtcPf3DT3747J1e+2wjMAuBzwXfWRRhTgIECBAgQGA0ge7QG58t/EYJIwECkxZo/xxKX/vt+8tJ2vzMHSetVmP15ZMnrkx6fucnMIrA1q3OozzJsQQIECBAgMCMBf52bjFe6e2sZHO9vpRdfGVf5zaPCRAgMAmBJElaP3vxxPmsVd+600TonYS0c45DQPAdh6JzECBAgACBaQsc/vAfrXrz393Ttt+g8KPk+M/Xurf7mgABApMQ6Ay/Qu8khJ1zXAJudR6XpPMQIECAAIEpC2TZL9KND756NG3WD4apH4beb/30oymXYToCBAjUwp9ftD8yFATyKiD45nVl1EWAAAECBIYQiOH3kbS+lgi9Q4g5hAABAgQIECBAgAABAgQKJxCutBSuaAUTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGJC2RZll67dm354sWLhyY+mQkqIZBWoktNEiBAgAABAgQIECBQCIEQeldXV5dbrdaX0zQVfguxavkvMsl/iSokQIDA7gTCP6DhDEmStHZ3Js8mQIAAAQIEJikQQ2878C7GeTY3N7N2CD5//Pjxm3GbkcCoAoLvqGKOJ0CgUALhH9C3L90+Fop+4anHLwu/hVo+xRIgQIBAhQR6hd7YvvAbJYw7FRB8dyrneQQI5F4ght72dd7HQrHt6753hN/cL5sCCRAgQKCCAoNCb+QQfqOEcScCgu9O1DyHAIHcC3SH3liw8BsljAQIECBAIB8Cw4TeWKnwGyWMowp4catRxRxPgEDuBfqF3lB4uPobbn0Ox+S+EQUSIECAAIEKCFy9enVP+9/lfcO02mg0kvn5+QPDHOsYAp0CfvHr1PCYAAECBAgQIECAAIGpChw5cmR9bm7unWaz+Z/tJm4fs7q0tLS63XH2E+gWcKtzt4ivCRAohUC/q75udS7F8mqCAAECBEoocP369fn19fXn6/X6Qq/2Qug9duzYlV77bCOwnYDgu52Q/QQIFFagO/wKvYVdSoUTIECAQEUE+oVfobci3wATbFPwnSCuUxMgMHuBGH5DJV7RefbroQICBAgQILCdQHf4FXq3E7N/GAHBdxglxxAgUGiBEH5DA97Dt9DLqHgCBAgQqJBADL/tlm+4vblCC69VAgQIECBAgAABAgQIVEmg/R/XjSr1q1cCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECuxPIsizZ3Rk8mwABAvkTSPNXkooIECBAgAABAgRmIdAOvel/V1a+c/fVlaOzmN+cBAgQmJSA/9GblKzzEiBAgAABAgQKJPBp6F3ONmuLoexmK1k98PKpKwVqQakECBDoKyD49qWxgwABAgQIECBQDYHu0Bu7Fn6jhJEAgaILuNW56CuofgIECBAgQIDALgT6hd5wynqaPXl3xW3Pu+D1VAIEciLgim9OFkIZBAgQIECAAIFpCwwKvZ21NPe0b3s+5bbnThOPCRAoloArvsVaL9USIECAAAECBMYm8MkbbzwX/6Z30EnrD7In7585tzToGPsIECCQZwHBN8+rozYCBAgQIECAwAQFsvvpx82slW03RZYk63MH997a7jj7CRAgkFcBtzrndWXURYAAAQIECBCYgsDaK7861EofLNeTtOfvhSH0Lhzc/05y8uTaFMoxBQECBCYi0PMH3ERmclICBAgQIECAAIFcCvQLv0JvLpdLUQQI7EBA8N0BmqcQIECAAAECBMom0B1+hd6yrbB+CFRbQPCt9vrrngABAgQIECCwJRDDb5rWN9zevMXiAQECBAgQIECAAAECBAiUSWDt7NnF7M0395WpJ70QIEDgf01Qh63gZYluAAAAAElFTkSuQmCC" alt="Element Stars" class="stars">
    <div class="inner-content">
      <h1 class="logo">
        <img src="/assets/images/logo.svg" alt="Element UI" width="320" />
      </h1>
      <p class="lead">🍭 <span>A minimalistic project for demonstrating components of Element UI</span></p>
      <my-button>View Demo</my-button>
    </div>
    <a href="https://github.com/alexandesigner/element-play"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"></a>
  </div>
</template>

<script>
  import MyButton from './components/MyButton';
  export default {
    name: 'app',
    components: {
      MyButton
    }
  };
</script>

<style lang="scss">
html {
  font-family:sans-serif;
  background-image:linear-gradient(180deg,#0d1a44 13%,#3c4f91 56%,#5fc1e4);
  min-height:100%;
  height:100%;
  color:#fff;
  margin:0;
  padding:0;
}
body {
  height:100%;
  margin:0;
  padding:0;
}
.stars {
  position: absolute;
  left: 0;
  top: 20px;
  width: 100%;
}
.star-github {
  position: absolute;
  right: -120px;
  top: 28px;
}
.logo {
  position:relative;
  display:table;
  margin: 0 auto;
}
.lead {
  margin-bottom:20px;
  span {
    margin-left:5px;
  }
}
.content {
  display:table;
  width:100%;
  height:100%;
  text-align:center;
  .inner-content {
    display:table-cell;
    vertical-align:middle;
    margin: 0 auto;
  }
}
</style>
