<template>
    <div class="navbar clearfix">
        <div class="logo fl">
            CMDB
        </div>
        <div class="collapse fl" @click="toggleCollapse" :class="{'collapse-rotate': isCollapse}">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="user-info fr">
            <div class="user-li navbar-item-hover" >
                <el-dropdown trigger="click" >
                      <div class="el-dropdown-link">
                        <a href="javascript:void(0)">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            <span class="user-name">admin</span>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </a>
                      </div>
                      <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item>
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            <span>换肤</span>
                        </el-dropdown-item>
                        <el-dropdown-item >
                            <i class="fa fa-sign-out" aria-hidden="true"></i> 
                            <span>退出</span>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
    
<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'Navbar',

        data() {
            return {
               isCollapse: false,
            }
        },
        created() {

        },
        methods: {
            toggleCollapse () {
                let left = document.getElementById("left");
                if(left){
                    this.isCollapse = !this.isCollapse;
                    if (this.isCollapse) {
                        left.style.flex = '0 0 64px';
                        this.setCollapse(this.isCollapse);
                    } else {
                        left.style.flex = '0 0 160px';
                        this.setCollapse(this.isCollapse);
                    }
                }
            },

            ...mapMutations({
                setCollapse : 'SET_COLLAPSE',
              })
        },
    }
</script>

<style type="text/css" lang="scss">
  .navbar {
    .el-dropdown {
        color: #fff;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .navbar {
       @include relative;
       padding: 0 15px;
       color: #fff;
       .collapse {
            font-size: 18px;
            transition: all .28s ease-out;
            cursor: pointer;
       }
       .collapse-rotate {
            transform: rotate(90deg);
            transition: all .28s ease-out;
       }
       .logo {
            display: block;
            width: 100px;
            height: 100%;
            cursor: pointer;
            text-align: center;
       }
       .user-info {
            height: 100%;
            .user-li {
                position: relative;
                padding: 0 15px;
                a {
                    display: block;
                    height: 100%;
                    height: 100%;
                }
                .user-name {
                    margin: 0 6px;
                }
               
            }
       }
    }
    
</style>
