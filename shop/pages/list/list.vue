<template>
	<view>
		<view class="xuanxian">
			<view class="sort" :class="{actice: isOk == 1}" @click="btnclick(1)">
				综合排序
			</view>
			<view class="sort" :class="{actice: isOk == 2}" @click="btnclick(2)">
				销量优先
			</view>
			<view class="price_sort sort" :class="{actice: isOk == 3}" @click="btnclick(3)">
				<view class="">
					价格
				</view>
				<view class="price_icon">
					<view class="iconfont">
						&#xe63c;
					</view>
					<view class="iconfont">
						&#xe60c;
					</view>
				</view>
			</view>
		</view>


		<view class="as">

			<view class="shop_ifobox" v-for="(item,index) in shopdata" :key="index" @click="toDetail(item._id)">
				<image :src="item.img"></image>
				<view class="ifo_right">
					<view class="shop_name">
						{{item.name}}
					</view>
					<view class="shop_price">
						<text class="new_money">￥{{item.newprice}}</text>
						<text class="old_money" v-if="item.oldprice">￥{{item.oldprice}}</text>
					</view>
					<view class="youhui">
						满200减10
					</view>
					<view class="shop_end">
						<text class="storename">
							{{item.shopname}}
						</text>
						<text class="paynum">
							{{item.paynum}}人已付款
						</text>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopdata: "",
				isOk: 1,
			}
		},
		onLoad(option) {
			console.log(option);
			this.getData(option);
		},
		methods: {
			btnclick(num) {
				this.isOk = num;
			},

			toDetail(value) {
				uni.navigateTo({
					url: `/pages/detail/detail?key=${value}`
				})
			},
		async getData(option) {
				let res = await this.$myRequest({
					url: `/list`,
					data: option,
					method: "POST",
					timeout: 7000
				})
				this.shopdata = res.data;
			}
		}
	}
</script>

<style>
	.actice {
		border-bottom: 1rpx solid #FF0000;
		color: #FF0000;
	}

	.xuanxian {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 3rpx 3rpx #ccc;
		position: fixed;
		/*#ifndef MP-WEIXIN */
		top: 88rpx;
		/*#endif*/
		z-index: 10;
	}

	.sort {

		height: 100%;
		line-height: 100rpx;
	}

	.price_sort {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.price_icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.iconfont {
		line-height: 20rpx;
	}

	.as {
		padding-top: 100rpx;
	}

	.shop_ifobox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 30rpx 0;
		padding: 0 20rpx;
	}

	.shop_ifobox image {
		width: 240rpx;
		height: 240rpx;

	}

	.ifo_right {
		width: 470rpx;
		height: 100%;
		padding: 0 0 20rpx 15rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
	}

	.shop_name {
		width: 100%;
		line-height: 40rpx;
		font-size: 28rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.shop_price {
		margin-top: 10rpx;
	}

	.new_money {
		font-weight: 700;
		font-size: 32rpx;
		color: #F0AD4E;
		margin-right: 30rpx;
	}

	.old_money {
		font-weight: 700;
		text-decoration: line-through;
		color: #808080;
	}

	.youhui {
		border: 1rpx solid #FF0000;
		text-align: center;
		padding: 6rpx;
		display: inline-block;
		color: #FF0000;
		font-size: 24rpx;
		margin-top: 10rpx;
	}

	.shop_end {
		margin-top: 10rpx;
	}

	.paynum {
		font-size: 24rpx;
		color: #999999;
	}

	.storename {
		font-size: 24rpx;
		margin-right: 30rpx;
	}
</style>
