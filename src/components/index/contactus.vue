<template>
  <div class="m-contactus">
    <my-title :title="'联系我们'" :titleus="'CONTACT INFORMATION'" />
    <!-- <el-row class="moudle-title" type="flex" justify="center">
      <el-col :span="20">
        <div class="title-box">
          <div class="m-title">联系我们</div>
          <div class="m-titleus">CONTACT INFORMATION</div>
        </div>
      </el-col>
    </el-row> -->
    <el-row class="hidden-xs-only" type="flex" align="middle" justify="center">
      <el-col :span="20">
        <el-row class="m-content" type="flex">
          <div id="container"></div>
          <el-row class="map-box" type="flex" justify="end">
            <el-col class="companyInfo" :span="8">
              <div class="info-box">
                <p class="company">四川有生软件科技有限公司</p>
                <p class="address">
                  <i class="el-icon-location" style="color:red"></i>四川省绵阳市科创园区孵化大楼C305
                </p>
                <p class="email">
                  <i class="el-icon-message" style="color:#ea9518"></i>SCYS2015@QQ.COM
                </p>
                <p class="phone">
                  <i class="el-icon-phone" style="color:#0061b2"></i>0816-2111259
                </p>
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <div id="phonecontainer"></div>

  </div>
</template>
<script src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"></script>
<script>
export default {
  name: "tencentmap",
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
  methods: {
    initMap() {
      console.log(document.body.clientWidth)
      let domId = "";
      if(document.body.clientWidth >= 768){
        domId = "container";
      }else{
        domId = "phonecontainer";
      }
      console.log(domId)
      //定义地图中心点坐标
      var center = new TMap.LatLng(31.494117, 104.703024);
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      var map = new TMap.Map(document.getElementById(domId), {
        center: center, //设置地图中心点坐标
        zoom: 17.2, //设置地图缩放级别
        pitch: 30, //设置俯仰角
        rotation: 0 //设置地图旋转角度
      });
      var markerLayer = new TMap.MultiMarker({
        map: map, //指定地图容器
        //样式定义
        styles: {
          //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
          myStyle: new TMap.MarkerStyle({
            width: 25, // 点标记样式宽度（像素）
            height: 35, // 点标记样式高度（像素）
            // src: "../../asset/public/marker.png", //图片路径
            //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
            anchor: { x: 10, y: 55 }
          })
        },
        //点标记数据数组
        geometries: [
          {
            id: "1", //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            styleId: "myStyle", //指定样式id
            position: new TMap.LatLng(31.494117, 104.703024), //点标记坐标位置
            properties: {
              //自定义属性
              title: "marker1"
            }
          }
        ]
      });
    },
    loadScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://map.qq.com/api/gljs?v=1.exp&key=KEJBZ-X4UKD-6D34G-HHYX3-7ERQF-SJFLY&callback=init";
      script.onload = script.onreadystatechange = () => {
        if (
          !this.readyState ||
          this.readyState === "loaded" ||
          this.readyState === "complete"
        ) {
          this.initMap();
          script.onload = script.onreadystatechange = null;
        }
      };
      document.body.appendChild(script);
    }
  },
  mounted() {
    this.loadScript();
  }
};
</script>

<style lang="scss" scoped>
.moudle-title {
  background-color: #f7f7f7;
}
.m-contactus {
  padding-bottom: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  .m-content {
    background-image: url("https://ccdn.goodq.top/caches/e8c750c87f16bcba58f0d80d299d7485/aHR0cHM6Ly81NGNiNGUyY2UxNDI5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvOTlkZmUyY2U1OTUxOWQ1MTUxNDVmZDcyMTg1YjBiNzcuanBn.jpg");
    border-radius: 7px;
    #container {
      position: absolute;
      left: 50px;
      top: 50%;
      margin-top: -156px;
      z-index: 999;
      height: 311px;
      // width: 750px;
      width: 62%;
      @media screen and (max-width: 768px) {
        margin-bottom: 15px;
        width: 70%;
      }
    }
    .map-box {
      width: 100%;
      border-radius: 7px;
      opacity: 0.6;
      display: flex;
      align-items: center;
      background-color: #000;
      .companyInfo {
        float: right;
        opacity: 0.5;
        display: table; /*重点*/
        text-align: center;
        .info-box {
          padding: 120px 50px;
          display: table-cell;
          vertical-align: middle;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 0.5px;
          line-height: 2.5em;
          color: #fff;
          .company {
            color: #fff;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          i {
            margin-right: 20px;
            font-size: 22px;
            transform: translate(0px, 3px);
          }
        }
      }
    }
  }
}
</style>
