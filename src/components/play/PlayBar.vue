<template>
  <div class="PlayBar">
    <div class="wrop-plybar">
      <div class="r_s_wrop">
        <a href="" class="lock"></a>
      </div>
      <el-row>
        <el-col :offset="2" :span="20">
          <div class="contain">
            <div class="left-p">
              <!-- 上一首 -->
              <div class="left-p-l"></div>
              <!-- 播放 -->
              <div class="left-p-m"></div>
              <!-- 下一首 -->
              <div class="left-p-r"></div>
            </div>
            <div class="mid-p">
              <img src="" alt="" />
              <div class="m_wr">
                <!-- 歌名 -->
                <p>
                  <span class="m_wr_s_s"></span
                  ><i class="iconfont icon-chakanMV m_wr_mv"></i>
                  <!-- 歌手 -->
                  <span class="m_wr_s_i">
                    <span> <i></i><i></i> </span>
                  </span>
                </p>
                <div class="playbar-wrop">
                  <i class="loadingAn"></i>
                  <!-- 播放滑块 -->
                  <el-slider></el-slider>
                  <p class="m_time">
                    <i></i>
                    <i></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="right-p-l">
              <a title="画中画歌词"></a>
              <a title="收藏"></a>
              <a title="分享"></a>
            </div>
            <div>
              <a href="">
                <!-- 声音滑块 -->
                <el-slider class="audio-slider"> </el-slider>
              </a>
              <a class="loopStatus"></a>
              <a href=""><i></i></a>
            </div>
            <!-- 播放列表 -->
            <!-- 音频 -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.r_s_wrop {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 52px;
  height: 67px;
  background: url("../../assets/playbar.png") no-repeat;
  background-position: 0 -380px;
}
.lock {
  position: absolute;
  top: 6px;
  left: 17px;
  width: 18px;
  height: 18px;
  text-decoration: none;
  background: url("../../assets/playbar.png") no-repeat;
  background-position: -80px -380px;
  &:hover {
    background-position: -100px -400px;
  }
}
.wrop-plybar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 1510px;
  height: 53px;
  background: url("../../assets/playbar.png") repeat-x;
  transition: all 0.5s;
  .contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    transform: translateY(6px);
  }
  .left-p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 137px;
    .left-p-l {
      width: 28px;
      height: 28px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: 0 -130px;
      &:hover {
        background-position: -30px -130px;
        cursor: pointer;
      }
    }
    .left-p-m {
      width: 36px;
      height: 36px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: 0 -204px;
      &:hover {
        background-position: -40px -204px;
        cursor: pointer;
      }
    }
    .left-p-r {
      width: 28px;
      height: 28px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -80px -130px;
      &:hover {
        background-position: -110px -130px;
        cursor: pointer;
      }
    }
  }
  .mid-p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    height: 47px;
    font-size: 14px;
    img {
      width: 34px;
      height: 35px;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      margin-bottom: 5px;
    }
    p span:first-child {
      color: #d3d3d3;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    p span:last-child i {
      color: #959595;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .m_wr {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 581px;
      height: 47px;
      margin-right: 15px;

      p .m_wr_mv {
        color: #959595;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
      .m_wr_s_s {
        margin-left: 20px;
      }
      .m_wr_s_i {
        color: #959595;
        i:first-child:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .el-slider {
        width: 500px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .m_time i:first-child {
          color: #d3d3d3;
          margin-left: 20px;
        }
        .m_time i:last-child {
          color: #959595;
          margin-left: 10px;
        }
      }
    }
  }
  .right-p-l {
    width: 87px;
    a {
      display: inline-block;
      width: 25px;
      height: 25px;
      margin: 0 2px;
    }
    a:first-child {
      background: url("../../assets/DL.png") no-repeat;
      &:hover {
        background-position-y: -25px;
        cursor: pointer;
      }
    }
    a:nth-child(2) {
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
        cursor: pointer;
      }
    }
    a:last-child {
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
        cursor: pointer;
      }
    }
  }
  .right-p-r {
    width: 126px;
    a {
      margin: 0 2px;
    }

    a:first-child {
      position: relative;
      display: inline-block;
      width: 25px;
      height: 25px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -2px -248px;
      .audio-slider {
        position: absolute;
        top: -110px;
        left: -6px;
      }
      &:hover {
        background-position: -31px -248px;
        cursor: pointer;
      }
    }
    a:nth-child(2) {
      display: inline-block;
      width: 25px;
      height: 25px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -3px -344px;
      &:hover {
        background-position: -33px -344px;
        cursor: pointer;
      }
    }
    a:last-child {
      position: relative;
      display: inline-block;
      width: 59px;
      height: 25px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
        cursor: pointer;
      }
      i {
        position: absolute;
        left: 30px;
        top: 5px;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        font-size: 14px;
        user-select: none;
      }
    }
  }
  .right-p-r {
    width: 126px;
    a {
      margin: 0 2px;
    }

    a:first-child {
      position: relative;
      display: inline-block;
      width: 25px;
      height: 25px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -2px -248px;
      .audio-slider {
        position: absolute;
        top: -110px;
        left: -6px;
      }
      &:hover {
        background-position: -31px -248px;
        cursor: pointer;
      }
    }
    a:nth-child(2) {
      display: inline-block;
      width: 25px;
      height: 25px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -3px -344px;
      &:hover {
        background-position: -33px -344px;
        cursor: pointer;
      }
    }
    a:last-child {
      position: relative;
      display: inline-block;
      width: 59px;
      height: 25px;
      background: url("../../assets/playbar.png") no-repeat;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
        cursor: pointer;
      }
      i {
        position: absolute;
        left: 30px;
        top: 5px;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        font-size: 14px;
        user-select: none;
      }
    }
  }
}
</style>
