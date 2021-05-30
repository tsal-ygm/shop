<template>
	<view class="box">
		<view class="users_box">
			<image :src="img" @click="updataImg" mode=""></image>
			<view class="zhanghao">
				<text class="username">LOVE</text>
				<text class="iconfont">&#xe613;</text>
			</view>
		</view>
		<view class="tab_box">
			<view class="content_box clearfix" >
				<text class="fl">我的收获地址</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
			<view class="content_box clearfix" >
				<text class="fl">账号与安全</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
		</view>
		<view class="tab_box">
			<view class="content_box clearfix" >
				<text class="fl">消息通知</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
			<view class="content_box clearfix" >
				<text class="fl">隐私</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
			<view class="content_box clearfix" >
				<text class="fl">通用</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
			
		</view>
		<view class="tab_box">
			<view class="content_box clearfix" >
				<text class="fl">帮助与反馈</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
			<view class="content_box clearfix" >
				<text class="fl">关于应用</text>
				<text class="iconfont fr">&#xe604;</text>
			</view>
		</view>
		
            <view class="logout" @click="quitBtn">
            	退出登录
            </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:'../../static/img/jiadian.png'
			}
		},
		methods: {
			updataImg(){
				uni.chooseImage({
					count:1,
					    success:  (res) => {
					        console.log(res.tempFilePaths[0]);
							let imgurl = res.tempFilePaths[0];
							console.log(imgurl);
							this.img = imgurl;
					    }
				})
			},
			quitBtn(){
				this.$store.commit('logout');
			}
		}
	}
</script>

<style>
	.box {
		width: 100%;
		background-color: #ccc;
	}
	
	.users_box {	
		display: flex;
		justify-content: flex-start;
		border-bottom: 1rpx solid #ccc;
		background-color: #fff;
		padding: 20rpx;
	}
	
	.users_box image{
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
	}

    .users_box text {
		display: inline-block;
		line-height: 130rpx;
		margin-left: 20rpx;
	}
	
	.tab_box {
		margin: 10rpx 0;
		padding: 0 20rpx;
		background-color: #fff;
	}
	
	.content_box {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #ccc;
	}
	
 .clearfix::after {
	    clear: both;
	    content: ".";
	    display: block;
	    height: 0;
	    visibility: hidden;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.logout {
		background-color: #FF0000;
		text-align: center;
		color: #fff;
		line-height: 60rpx;
	}
</style>
