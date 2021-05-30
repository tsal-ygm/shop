<template>
	<view class="box">
	<view class="box_header">
		<view class="userifo">
			<image src="../../static/img/fuzuan.png" mode="aspectFill"></image>
			<view class="username">
				<text>LOVE</text>
				<text>5219积分</text>
			</view>
			<text class="iconfont shezhi" @click="setting">&#xe67a;</text>
		</view>
	</view>
	<view class="indent_box">
		<view class="option_box">
			<text class="iconfont iconfse">&#xe626;</text>
			<text>待付款</text>
			<view class="mesgalert">11</view>
		</view>
		<view class="option_box">
			<text class="iconfont iconfse">&#xe538;</text>
			<text>待发货</text>
				<view class="mesgalert">11</view>
		</view>
		<view class="option_box">
			<text class="iconfont iconfse">&#xe630;</text>
			<text>待收货</text>
				<view class="mesgalert">11</view>
		</view>
		<view class="option_box">
			<text class="iconfont iconfse">&#xe621;</text>
			<text>待评价</text>
				<view class="mesgalert">11</view>
		</view>
		<view class="option_box">
			<text class="iconfont iconfse">&#xe614;</text>
			<text>退换货</text>
				<view class="mesgalert">11</view>
		</view>
	</view>
		
	<view class="card_box">
		<view class="collect" @click="newsBtn">
			<view class="" >
				<text class="iconfont collect_ico">&#xe622;</text>
				<text class="collect_title">我的消息</text>
			</view>
			<text class="iconfont collect_ico">&#xe604;</text>
		</view>
		<view class="collect">
			<view class="">
				<text class="iconfont collect_ico">&#xe665;</text>
				<text class="collect_title">我的钱包</text>
			</view>
			<text class="iconfont collect_ico">&#xe604;</text>
		</view>
		<view class="collect">
			<view class="">
				<text class="iconfont collect_ico">&#xe641;</text>
				<text class="collect_title">我的收藏</text>
			</view>
			<text class="iconfont collect_ico">&#xe604;</text>
		</view>
		<view class="collect">
			<view class="">
				<text class="iconfont collect_ico">&#xe609;</text>
				<text class="collect_title">我的收货地址</text>
			</view>
			<text class="iconfont collect_ico">&#xe604;</text>
		</view>
		<view class="collect">
			<view class="">
				<text class="iconfont collect_ico">&#xe65c;</text>
				<text class="collect_title">我的关注</text>
			</view>
			<text class="iconfont collect_ico">&#xe604;</text>
		</view>
		<view class="collect">
			<view class="">
				<text class="iconfont collect_ico">&#xe60d;</text>
				<text class="collect_title">客服</text>
			</view>
			<text class="iconfont collect_ico">&#xe604;</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default {

		methods:{
			setting(){
				uni.navigateTo({
					url:'/pages/set/set'
				})
			},
			newsBtn(){
				uni.navigateTo({
					url:"/pages/news/news"
				})
			}
		}
	}
</script>

<style>
	.box_header {
		width: 100%;
		height: 300rpx;
		border-radius:0 0  150rpx 150rpx;
		background-color: #FF0000;
		position: relative;
		top: 0;
	}
	
	.userifo {
		width: 90%;
		position: absolute;
		left: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.userifo image {
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
	}
	
	.username text{
		display: block;
		margin-right: 300rpx;
		color: #fff;
	}
	
	.username text:last-child {
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	
	.shezhi {
		font-size: 40rpx;
		color: #fff;
	}
	
	.indent_box {
		width: 90%;
		height: 200rpx;
		background-color: #fff;
		border-radius: 50rpx;
		position: absolute;
		top: 150rpx;
		left: 50%;
		transform: translate(-50%,0);
		box-shadow: 0 0 5rpx 5rpx #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 15rpx;
	}
	
	.option_box {
		position: relative;
	}
	
	.option_box text {
		display: block;
	}
	
	.option_box text:nth-child(2){
		font-size: 28rpx;
		color: #333;
		padding-top: 20rpx;
	}
	
	.iconfse {
		font-size: 50rpx;
		text-align: center;
		color: #FA436A;
	}
	
	.mesgalert {
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		top: -16rpx;
		left: 52rpx;
		background-color: #FF0000;
		text-align: center;
		line-height: 30rpx;
		border-radius: 50%;
		font-size: 24rpx;
		color: #fff;
	}
	
	.card_box {
		width: 100%;
		padding: 100rpx 20rpx 10rpx;
		box-sizing: border-box;
		
	}
	
	.collect {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		border-bottom: 1rpx solid #ccc;
		margin-bottom: 20rpx;
	}
	
	.collect_ico {
		font-size: 45rpx;
		color: #FF3300;
	}
	
	.collect_title {
		color: #999;
		font-size: 30rpx;
		margin-left: 20rpx;
	}
</style>
