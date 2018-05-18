<template>
    <div class="login">
        <div class="login-container">
            <div class="login-form-card">
                <div class="login-title">
                    open
                </div>
                <div class="login-form">
                    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" >
                        <el-form-item  prop="username" class="login-form-item">
                            <div class="item-icon">
                                <i class="fa fa-user" aria-hidden="true" ></i>
                            </div>
                            <el-input v-model="ruleForm.username" type="text" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item  prop="password" class="login-form-item">
                            <div class="item-icon">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </div>
                            <el-input v-model="ruleForm.password" type="password" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" class="submit" @click="login('ruleForm')">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { loginByUsername } from '@/api/login.js';
    export default {
        name: 'login',
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ], 

                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                }
            }
        },
        created() {

        },
        methods: {
            login (formName) {
                let self = this;
                let obj = {
                    username: self.ruleForm.username,
                    password: self.ruleForm.password,
                };
                self.$refs[formName].validate( (valid) => {
                    if (valid) {
                        loginByUsername(obj).then(res => {
                            if (res.status == 200) {
                                self.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                                self.$router.push({path: '/model'})
                            }
                        },err => {
                            console.log('error',err);
                        })
                    } else {
                        self.$message({
                            message: '用户名或密码有误',
                            type: 'error'
                        });
                        return false
                    }
                })
            },
        },
    }
</script>

<!-- 覆盖element的样式 -->
<style type="text/css" lang="scss">
   .login {
     .login-form-item {
            input {
              padding-left: 40px;
              border: none;
              -webkit-box-shadow: 0 0 0 40px #fff inset;
            }
        }
   }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .login {
        @include relative;
        background: linear-gradient(to bottom right,#4a69d8,#52b3c6);
        .login-container {
            height: 100%;
            background-image: url('../../../src/assets/home_images/home-bg.png');
            background-repeat: no-repeat;
            background-position: 50% 50px;
        }
        .login-form-card {
            width: 500px;
            background: rgba(225,243,255,.2);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            padding: 20px 40px;
            .login-form {
                width: 80%;
                margin: 0 auto;
            }
            .login-title {
                text-align: center;
                font-size: 28px;
                color: #fff;
                margin-bottom: 20px;
            }
            .login-form-item {
                position: relative;
                
            }
            .submit {
                width: 100%;
            }
        }
        .item-icon {
            position: absolute;
            left: 12px;
            top: 0px;
            font-size: 20px;
            color: #6791CE;
            z-index: 100;
        }
    }

</style>
