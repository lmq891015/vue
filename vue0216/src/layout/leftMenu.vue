<template>         
  <div class="menu_left cflex" :style="{width:sidebar.width+'px'}">
    <div class="menu_page_top rflex">
        <img :class='["logo",{"closeLogo":!sidebar.opened}]' :src="logo" alt="小爱admin" >
        <span class='title' v-show="sidebar.opened"><i>Admin</i></span>
    </div>
     <div class="menu_page_bottom is-scroll-left">
      <el-menu
        :show-timeout="200"
        :default-active="$router.path"
        :collapse="isCollapse"
        :background-color="menuObj.bgColor"
        :text-color="menuObj.textColor"
        :active-text-color="menuObj.activeTextColor"
        :style="{width:sidebar.width+'px'}"
        theme="dark"
        >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import logoImg from "@/assets/images/logo.png";

  export default {
    name: 'left-menu',
    data(){
			return {
        logo:logoImg,
        menuObj:{
         bgColor:'#0089d2',
         textColor:'#fff',
         activeTextColor:'#ff6428',
       },
			}
    },
    computed:{
      ...mapGetters(['sidebar','isCollapse']),
    },
    mounted(){
      console.log(this.userInfo);
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/css/mixin';
   $left-bgColor:#fff;  // 左侧菜单背景颜色;
    $icon-link:#FF6C60;
    .menu_left{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
    }
    .menu_page_top{
        width:100%;
        height: 60px;
        align-items: center;
        justify-content: space-around;
        text-transform: uppercase;
        box-sizing: border-box;
        box-shadow:0px 2px 5px 0px rgba(230,224,224,0.5);
        .logo {
            height: 36px;
            width: 36px;
            vertical-align: middle;
            display: inline-block;
        }
        .closeLogo{
            width:30px;
            height:30px;
        }
        .title{
            font-size: 22px;
            i{
                color:#FF6C60;
            }
        }
    }
  .menu_page_bottom {
      width:100%;
      overflow-y: scroll;
      overflow-x: hidden;
      flex:1;
      margin-top:3px;
      z-index: 10;
      box-shadow: 0 0 10px 0 rgba(230, 224, 224, 0.5)
  }
  .el-menu li i,.el-submenu__title i {
    color: #ffffff;
  }
</style>
 
