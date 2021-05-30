<template>
	<view class="box" :class="{'setheight':ispopup}">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" circular>
			<swiper-item v-for="(item,index) in detailData.imglist" :key="index">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="ifo_box">
			<view class="detail_name">
				{{detailData.name}}
			</view>
			<view class="price_box">
				<text class="new_price">￥{{detailData.newprice}}</text>
				<text class="old_price" v-if="detailData.oldprice">￥{{detailData.oldprice}}</text>
			</view>
			<view class="dian_name">
				{{detailData.shopname}}
			</view>
			<view class="shuju_ifo">
				<text>销量：{{detailData.paynum}}</text>
				<text>库存：{{detailData.stock}}</text>
			</view>
			<view class="juan">
				领取优惠券
			</view>
			<view class="paytype">
				<text>购买类型</text>
				<text class="show_type">白色</text>
				<text class="iconfont icofsz">&#xe604;</text>
			</view>
			<view class="activit">
				<text class="activit_title">促销活动</text>
				<text class="activit_num">
					<text v-for="(yitem,yindex) in detailData.youhui" :key="yindex">{{yitem}}</text>
				</text>
			</view>
			<view class="serve">
				<text class="serve_title">服务</text>
				<text class="serve_type">
					<text>7天无理由退换货 </text>
					<text>假一赔十</text>
				</text>
			</view>

		</view>
		<view class="kong">

		</view>

		<!-- 评价 -->
		<view class="estimate">
			<view class="es_title_box">
				<view class="es_left">
					<text>评价</text>
					<text>(86)</text>
				</view>
				<view class="es_right">
					<text>好评率</text>
					<text>99%</text>
					<text class="iconfont icofsz">&#xe604;</text>
				</view>
			</view>
			<view class="es_users_box">
				<view class="user_img">
					<image src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg"></image>
					<text class="user_name">LOVE YGM</text>
				</view>
				<view class="es_content">
					商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢

					商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢

				</view>
				<view class="zp-img">

					<scroll-view class="scroll-view_H" scroll-x="true">
						<image
							src="https://img.youpin.mi-img.com/comment/3b73a0866ca7c6aa85ead67abb2ec40a.jpg@base@tag=imgScale&h=339&w=339"
							lazy-load mode="widthFix"></image>
						<image
							src="https://img.youpin.mi-img.com/comment/3b73a0866ca7c6aa85ead67abb2ec40a.jpg@base@tag=imgScale&h=339&w=339"
							mode="widthFix"></image>
						<image
							src="https://img.youpin.mi-img.com/comment/3b73a0866ca7c6aa85ead67abb2ec40a.jpg@base@tag=imgScale&h=339&w=339"
							mode="widthFix"></image>
						<image
							src="https://img.youpin.mi-img.com/comment/3b73a0866ca7c6aa85ead67abb2ec40a.jpg@base@tag=imgScale&h=339&w=339"
							mode="widthFix"></image>
						<image
							src="https://img.youpin.mi-img.com/comment/3b73a0866ca7c6aa85ead67abb2ec40a.jpg@base@tag=imgScale&h=339&w=339"
							mode="widthFix"></image>
					</scroll-view>
				</view>
				<view class="chakan">
					查看全部评价
				</view>
			</view>
		</view>
		<view class="kong">

		</view>

		<!-- 图文详情 -->
		<view class="img_detail">
			<view class="img_detail_title">
				<text>———</text>
				<text>图文详情</text>
				<text>———</text>
			</view>
			<view class="img_detail_box">
				<image v-for="(ditem,dindex) in detailData.detailimg" :key="dindex" :src="ditem" mode="widthFix">
				</image>
			</view>
		</view>

		<!-- 详情底部的商品操作 -->
		<view class="detail_buttom">
			<navigator url="/pages/index/index" open-type="switchTab">
				<text class="iconfont buttom_ico">&#xe633;</text>
				<text class="buttom_title">首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab">
				<text class="iconfont buttom_ico">&#xe601;</text>
				<text class="buttom_title">购物车</text>
			</navigator>
			<view>
				<text class="iconfont buttom_ico">&#xe65c;</text>
				<text class="buttom_title">收藏</text>
			</view>
			<view class="buttom_gm">
				<button type="default">立即购买</button>
				<button type="default" @click="addCart">加入购物车</button>
			</view>

		</view>

		<!-- 弹窗 -->
		<uni-shade v-show="ispopup" @showShade="closeShade" :detailData= "detailData"></uni-shade>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailData: {},
				ispopup:false
			}
		},
		onLoad(option) {
			console.log(option)
			this.getData(option);
		},
		methods: {
		async	getData(option) {
			let res = await this.$myRequest({
					url: `/detail`,
					data: option,
					method: "POST",
					timeout: 7000
				})
				
				this.detailData = res.data[0];
			},

             // 加入购物车
			addCart() {
               this.ispopup = true;
			},
			
			// 关闭弹窗
			closeShade(){
				this.ispopup = false;
			}
		}
	}
</script>

<style>
	.icofsz {
		font-size: 38rpx !important;
	}

	.box {
		position: relative;

	}
	
	.setheight {
		height: 100vh;
		overflow: hidden;
	}

	.box swiper {
		width: 100%;
		height: 720rpx;
		background-color: rgba(0, 0, 0, 0.9);
	}

	.box swiper image {
		width: 100%;
		height: 100%;
	}

	.ifo_box {
		width: 100%;
		padding: 20rpx 20rpx 0rpx;
		box-sizing: border-box;
	}

	.detail_name {
		color: #303133;
	}

	.price_box {
		margin: 10rpx 0;
	}

	.new_price {
		color: #fa436a;
		font-size: 34rpx;
	}

	.old_price {
		color: #909399;
		font-size: 24rpx;
		text-decoration: line-through;
		margin: 0 16rpx;
	}

	.dian_name {
		color: #333;
		font-size: 28rpx;
		padding: 10rpx 0;

	}

	.shuju_ifo text {
		color: #909399;
		font-size: 24rpx;
		margin-right: 30rpx;

	}

	.juan {
		background-color: #fa436a;
		text-align: center;
		line-height: 54rpx;
		color: #fff;
		margin: 10rpx 0;
	}

	.paytype {
		border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
		color: #606266;
		font-size: 26rpx;
		display: flex;
		justify-content: space-between;
		padding: 15rpx 0;
	}

	.show_type {
		width: 200rpx;
		color: #303133;
	}

	.activit {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20rpx 0;
		border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
	}

	.activit_title {
		color: #303133;
		font-size: 26rpx;
		width: 160rpx;
	}

	.activit_num text {
		display: block;
		color: #303133;
		font-size: 26rpx;
		box-sizing: border-box;
		line-height: 48rpx;
	}

	.serve {
		color: #303133;
		font-size: 26rpx;
		padding: 20rpx 0;
	}

	.serve_title {
		width: 160rpx;
		display: inline-block;
	}

	.serve_type text {
		margin-right: 20rpx;
	}

	.kong {
		width: 100%;
		height: 20rpx;
		background-color: rgba(0, 0, 0, 0.1);
	}

	/* 评价 */
	.estimate {
		margin-top: 20rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.es_title_box {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}

	.es_left text:first-child {
		font-size: 30rpx;
		color: #303133;
	}

	.es_left text:last-child {
		font-size: 26rpx;
		color: #909399;
		margin-left: 6rpx;
	}

	.es_right {
		display: flex;
		align-items: center;
	}

	.es_right text {
		font-size: 26rpx;
		color: #909399;
		margin-left: 10rpx;
	}


	.es_users_box {}

	.user_img {
		height: 80rox;
		width: 100%;
		display: flex;
		align-items: center;
	}


	.user_img image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.user_name {
		font-size: 28rpx;
		color: #606266;
		margin-left: 20rpx;
	}

	.es_content {
		font-size: 28rpx;
		color: #303133;
		width: "100%";
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.scroll-view_H {
		width: 100%;
		white-space: nowrap;
		margin: 30rpx 0;
	}

	.scroll-view_H image {
		width: 200rpx;
		margin-right: 20rpx;
	}

	.chakan {
		width: 200rpx;
		font-size: 28rpx;
		color: #1e1f1f;
		text-align: center;
		border: 1px solid #ccc;
		border-radius: 30rpx;
		padding: 10rpx 30rpx;
		margin: 0 auto 20rpx;
	}

	/* 图文详情 */
	.img_detail {
		border-bottom: 100rpx;
	}

	.img_detail_title {
		display: flex;
		justify-content: center;
		color: #303133;
		padding: 20rpx 0;
	}

	.img_detail_title text:nth-child(2) {
		margin: 0 14rpx;
	}

	.img_detail_box {
		width: 100%;
	}

	.img_detail_box image {
		width: 100%;
	}

	/* 底部操作菜单 */
	.detail_buttom {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		box-shadow: 0 0 2rpx 5rpx #ccc;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
	}

	.buttom_gm {
		height: 80rpx;
		border-radius: 40rpx;
		overflow: hidden;
		box-shadow: 0 20upx 40upx -16upx #fa436a;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
		background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
		position: relative;
	}



	.buttom_gm button {
		height: 100%;
		line-height: 80rpx;
		display: inline-block;
		outline: none;
		background: transparent;
		color: #fff;
		font-size: 28rpx;
		padding: 0 20rpx;
	}

	.buttom_ico {
		display: block;
		text-align: center;
		font-size: 38rpx;
		color: #606266;
	}

	.buttom_title {
		font-size: 24rpx;
		color: #606266;
	}


	/* 遮罩弹框 */
	
</style>
