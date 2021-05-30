<template>
	<view class="box">
		<image class="bgimg" src="../../static/img/login.jpg"></image>
		<view class="frombox">
			<view class="loginshow">
				<text class="btnlogin" @click="loginclick" :class="{bgcolor:isshow}">登录</text>
				<text class="btnregister" @click="regclick" :class="{bgcolor: !isshow}">注册</text>
			</view>

			<!-- 登录 -->
			<view class="" v-if="isshow">
				<form>
					<view class="userbox boxactive">
						<text>账号：</text>
						<input type="text" v-model="lusername" placeholder="请输入手机号/用户名" />
					</view>

					<view class="pasbox boxactive">
						<text>密码：</text>
						<input type="password" v-model="lpsw" placeholder="请输入密码" />
					</view>

					<view class="tierror" v-if="Liserror">
						账号或密码错误
					</view>

					<view class="ispsw ">
						<label>
							<checkbox class="jizhu" :checked="loginchecked" @click="loginchecked = !loginchecked" />
							<text>记住密码</text>
						</label>
						<text class="wangji">忘记密码？</text>
					</view>

					<button class="loginbtn" @click="ringup">登录</button>
				</form>

			</view>

			<!-- 注册 -->
			<view class="" v-else>
				<form>
					<view class="userbox boxactive">
						<text>账号：</text>
						<input type="text" placeholder="请输入手机号"  v-model="rusername" @blur="userblur"/>
					</view>
					<view class="pasbox boxactive">
						<text>密码：</text>
						<input type="password" placeholder="不少于6位数"  v-model="ronepsw" @blur="oneblur" />
					</view>

					<view class="pasbox boxactive">
						<text>密码：</text>
						<input type="password" placeholder="再次输入密码"  v-model="rtwopsw" @blur="twoblur"/>
					</view>

					<view class="verify_box">
						<input type="text" class="input_verift" v-model="rtest"/>
						<text class="get_verift" @click="gettest">获取验证码</text>
					</view>

					<view class="tierror" v-if="Riserror">
						{{rtitext}}
					</view>



					<button class="loginbtn" @click="enroll">注册</button>

					<view class="xieyi">
						注册即表示同意用户协议
					</view>
				</form>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: true,                 //登录注册切换
				Liserror: false,
				lusername: "",                //登录用户名
				lpsw: "",                     //登录密码
				ltitext: "",
				loginchecked: false,          //是否记住密码
				Riserror: false,
				rtitext:"",
				rusername: "",                //注册用户名
				ronepsw:"",
				rtwopsw:"", 
				rtest: "" ,
				getma:""
        
			}
		},
		methods: {
			loginclick() {
				this.isshow = true;
			},
			regclick() {
				this.isshow = false;
			},
			//正则验证
			ltestreg(data) {
				let testdata = {
					username: data.username.trim(),
					psw: data.psw.trim()
				}
				if (testdata.username && testdata.psw) {

					return testdata;
				}
				this.ltitext = '账号和密码不能为空';

			},

			//记住密码
			setstrong(testifo) {
				// 当点击记住密码时,把用户信息存入本地存储
				console.log(testifo);
				if (this.loginchecked == true) {
					this.$store.commit('login', testifo);
				}
			},
			
			opinion(loginstr){
				if (loginstr.username) {				

					this.Liserror = false;
				
					//登录成功判断是否记住密码
					this.setstrong(loginstr);
					
					//登陆成功并跳转到首页
					uni.switchTab({
						url: '/pages/index/index'
					})
				} else {
					this.Liserror = true;
					console.log(loginstr);
				}
			},
			

			
			// 点击登录
		async ringup() {
				// 获取用户信息并进行验证
				const userifo = {
					username: this.lusername,
					psw: this.lpsw
				}				
				const testifo = this.ltestreg(userifo);
				
				if (testifo) {
					// uni.request({
					// 	url: 'http://192.168.1.101:3000/login',
					// 	data: testifo,
					// 	method: "POST",
					// 	timeout: 7000,
					// 	success: (res) => {
					// 		console.log(res.data);
	                         
					// 		 // 数据请求成功进行判断
     //                         this.opinion(res.data);
					// 	}
					// });
				 let res = await this.$myRequest({
							url: '/login',
							data: testifo,
							method: "POST"
					})
				    this.opinion(res.data);

				} else {
					console.log('账号密码不能为空', this.ltitext)
				}




			},
			
			// 手机号验证
			userblur(e){
				// console.log(e.target.value)
				let num = e.target.value.trim();
				let phoneRe = /^1(3|4|5|6|7|8|9)\d{9}$/;
				if(num){
					let s = phoneRe.test(num);
					if(s){
						this.Riserror = false;
					}else {
						this.rtitext ="手机号输入错误";
						this.Riserror = true;
					}
				}else {
					console.log('不能把为空');
					this.rtitext ="手机号不能为空";
					this.Riserror = true;
				}
			},
			// 第一次密码验证
			oneblur(e){
				let num = e.target.value.trim();
					let pswreg = /^[0-9A-Za-z]{6,}$/;
					if(num){
						let s = pswreg.test(num);
						if(s){
							this.Riserror = false;
						}else {
							this.rtitext ="密码不少于6位数";
							this.Riserror = true;
						}
					}else {
						console.log('不能把为空');
						this.rtitext ="密码不能为空";
						this.Riserror = true;
					}
				},
              
			  // 第二次验证
			twoblur(e){
				let num = e.target.value.trim();
					
					if(num){
						console.log(num,this.ronepsw)
						if(num == this.ronepsw){
							this.Riserror = false;
						}else {
							this.rtitext ="两次密码输入不相同";
							this.Riserror = true;
						}
					}else {
					
						this.rtitext ="密码不能为空";
						this.Riserror = true;
					}
				},
			

             // 点击注册
			async enroll() {
				const ruserifo = {
					username: this.rusername,
					onepsw: this.ronepsw,
					twopsw: this.rtwopsw,
					rtest: this.rtest
				};
  
				if(ruserifo.rtest == this.getma){
					this.Riserror = false;
				await uni.request({
						url:'http://localhost:3000/register',
						data:ruserifo,
						method:"POST",
						success: (res) => {
							console.log(res.data);
							if(res.data == 'success'){
								console.log(res.data);
								this.isshow = true;
				
							}else {
								this.rtitext ="账户已存在";                                this.Riserror = true;
							}
						}
					})
				}else {
					this.rtitext ="验证码错误";
					this.Riserror = true;
				}
			},
			
			
			// 获取验证码
			gettest() {
				var str ='';
                for(var i = 0; i<4; i++){
					str+= parseInt(Math.random() * 10);
				}
				console.log(str);
               this.getma = str;
			}
			
		}
	}
</script>

<style>
	.box {}

	.bgcolor {
		border-bottom: 1rpx solid #4CD964;
	}

	.bgimg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	.frombox {
		width: 70%;
		/* height: 500rpx; */
		padding: 20rpx;

		box-shadow: 0 0 5rpx 10rpx rgba(0, 0, 0, 0.2);
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* background: linear-gradient(#fff,#99FFFF,#66FFCC,#fff); */
	}

	.loginshow {
		width: 100%;
		height: 80rpx;
	}

	.loginshow text {
		display: inline-block;
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 80rpx;
	}

	.boxactive input {
		width: 400rpx;
		height: 60rpx;
		color: #999;
		font-size: 24rpx;
		border: 1rpx solid #ccc;
		padding-left: 10rpx;
	}

	.boxactive {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20rpx 0;
	}


	.tierror {
		color: #FF0000;
		padding-left: 96rpx;
		font-size: 24rpx;
		margin-bottom: 20rpx;
	}

	.jizhu {

		transform: scale(0.7)
	}

	.ispsw {
		padding-left: 96rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.ispsw label text {
		color: #999;
		font-size: 24rpx;
	}

	.wangji {
		color: #999;
		font-size: 24rpx;
		padding-left: 100rpx;
	}


	.loginbtn {
		height: 60rpx;
		font-size: 30rpx;
		line-height: 60rpx;
		background-color: #4CD964;
		color: #fff;
	}

	/* 注册 */
	.verify_box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 96rpx;
		margin-bottom: 20rpx;
	}

	.input_verift {
		flex-grow: 1;
		height: 58rpx;
		border: 1rpx solid #ccc;
	}

	.get_verift {
		width: 200rpx;
		font-size: 24rpx;
		color: #999;
		background-color: #4CD964;
		line-height: 60rpx;
		text-align: center;
	}

	.xieyi {
		color: #007AFF;
		font-size: 24rpx;
		margin-top: 20rpx;
		text-align: center;
	}
</style>
