<template>
    <scroll-bar>
        <div class="sidebar">
            <el-menu default-active="/model" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
              <el-menu-item index="/model">
                <i class="el-icon-menu"></i>
                <span slot="title">模型管理</span>
              </el-menu-item>
              <el-menu-item index="/resource">
                <i class="el-icon-document"></i>
                <span slot="title">资源管理</span>
              </el-menu-item>
              <el-menu-item index="/view">
                <i class="el-icon-location"></i>
                <span slot="title">视图管理</span>
              </el-menu-item>
            </el-menu>
        </div>
    </scroll-bar>
</template>

<script>
    import ScrollBar from '@/components/ScrollBar'
    import {mapMutations,mapGetters} from 'vuex'

    export default {
        name: 'Sidebar',
        components: { 
            ScrollBar 
        },
        computed: {
            ...mapGetters([
                'isCollapse'
            ])
        },
        data() {
            return {
               // isCollapse: false
            }
        },
        created() {

        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>

<style type="text/css" lang="scss">
    .sidebar {
        .el-menu {
            border-right: 0 none;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    // @import "src/styles/mixin.scss";
    
</style>
