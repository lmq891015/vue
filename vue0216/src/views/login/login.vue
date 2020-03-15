<template>         
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>lmq后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
      </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
  import login from '@/common/api';
  import { removeStore } from '@/common/tools';
  import { mapActions,mapGetters } from 'vuex';

  var vm = {
    name: 'Login',
    data(){
      const validateUsername = (rule, value, callback) => {
        if (value == '') {
          return callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
			return {
				loginForm: {
					username: 'dbadmin',
					password: 'zq147258',
				},
				rules: {
					username: [
			      {validator: validateUsername,trigger: 'blur' },
			    ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
    },
    mounted(){
			this.showLogin = true;
    },
    computed:{
      ...mapGetters(['userInfo']),
    },
    methods: {
        ...mapActions(['setUserInfo','getUserInfo']),
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              login({username:this.loginForm.username,password:this.loginForm.password,type:1}).then(res => {
              if (res.status == 200) {

                this.$message({
                    type: 'success',
                    message: '登录成功'
                });
                console.log(res);
                this.setUserInfo(res.data);
                console.log(1234);
                console.log(this.userInfo);
                this.$router.push('manage');
              }else{
                this.$message({
                    type: 'error',
                    message: res.msg
                });
              }
            });
            }
          });
        }
    },
    
  }
  export default vm;
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
  .login_page{
		background-color: #324057;
	}
	.manage_tip {
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p {
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
    @include wh(320px, 210px);
    @include ctp(320px, 210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(-0px, -50px, 0);
	  	opacity: 0;
	}

</style>
