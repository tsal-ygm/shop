<!-- 加入购物车时出现的弹窗 -->
<template>
	<view class="show_box">
		<view class="show_shoptype">
			<view class="firstbox flex align-start">
				<image :src="detailData.img" mode="widthFix"></image>
				<view class="firstbox_right flex1">
					<view class="iconfont text_right" @click="showPopup">
						&#xe616;
					</view>
					<view class="show_price">
						￥{{detailData.newprice}}
					</view>
					<view class="selected_type">
						已选：{{detailData.title.content[0]}}{{detailData.type.content[0]}}
					</view>
				</view>
			</view>
			<scroll-view scroll-y="true" class="scoll_box">

				<view class="type_box">
					<view class="type_title">
						{{detailData.title.value}}
					</view>
					<view class="type_list">
						<text v-for="(tyitem,tyindex) in detailData.title.content" :key="tyindex">
							{{tyitem}}
						</text>
					</view>
				</view>

				<view class="type_box">
					<view class="type_title">
						{{detailData.type.value}}
					</view>
					<view class="type_list">
						<text v-for="(tyitem,tyindex) in detailData.type.content" :key="tyindex">
							{{tyitem}}
						</text>
					</view>
				</view>
				
				

				<view class="buy_num">
					<input type="text" value="1" />
				</view>
			</scroll-view>
			<view class="last_box">
				<view class="affirmbtn" @click="comfirmBtn">
					确认
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			detailData: {
				type: Object
			}
		},
		methods: {
			
			// 点击关闭
			showPopup() {
				this.$emit('showShade')
			},
			
			// 点击确定
			comfirmBtn() {
				this.showPopup();
				uni.showToast({
					title:'加入购物车成功',
					duration:2500,
					success() {
						console.log('ddd')
					}
				})
			}
		}
	}
</script>

<style>
	.show_box {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 100;
	}

	.show_shoptype {
		height: 80%;
		width: 100%;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		border-radius: 50rpx 50rpx 0 0;
		padding: 30rpx 30rpx 20rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.firstbox image {
		width: 200rpx;
		height: 200rpx;
		margin-right: 40rpx;
	}

	.text_right {
		text-align: right;
	}

	.show_price {
		font-size: 38rpx;
		color: #FF0000;
		margin-bottom: 20rpx;
	}

	.scoll_box {
		overflow: auto;
		height: 614rpx;
	}

	.type_box {
		padding: 20rpx 0;
	}

	.selected_type {
		font-size: 24rpx;
		color: #333;
	}

	.type_title {
		font-size: 26rpx;
		color: #262626;
		font-weight: 600;
		margin-bottom: 20rpx;
	}

	.type_list text {
		display: inline-block;
		font-size: 24rpx;
		padding: 10rpx 20rpx;
		color: #262626;
		background-color: #f2f2f2;
		border-radius: 30rpx;
		margin-right: 20rpx;
	}

	.last_box {
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		height: 100rpx;
		width: 100%;
		padding: 12rpx 20rpx;
		box-sizing: border-box;
	}

	.affirmbtn {
		height: 76rpx;
		border-radius: 50rpx;
		background-color: #FF0000;
		text-align: center;
		line-height: 76rpx;
		color: #fff;
	}
</style>
