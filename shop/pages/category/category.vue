<template>
	<view class="content">
		<scroll-view scroll-y="true">
			<view class="left_bar">
				<text v-for="(oitem,oindex) in onedata" :key="oindex" :class="{active: oindex == isShow}"
					@click="gaibian(oindex)">{{oitem.name}}</text>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="show_content">
			<view class="list_box" v-for="(titem,tindex) in twodata" :key="tindex">
				<view class="list_title">
					{{titem.name}}
				</view>
				<view class="ifo_box">
					<view v-for="(num,item) in titem.goods" :key="item" @click="toList(titem.pid,num.tid)"
						class="ifo_conttent">
						<image :src="num.img"></image>
						<view class="shops_name">
							{{num.name}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: 0,
				onedata: [],
				twodata: []
			}
		},
		//监听返回按钮
		onNavigationBarButtonTap(e) {

			uni.switchTab({
				url: `/pages/index/index`
			})

		},
		onLoad() {
			this.getdata();
		},
		methods: {
			gaibian(index) {
				this.isShow = index;
			},

			toList(key, value) {
				uni.navigateTo({
					url: `/pages/list/list?key1=${key}&key2=${value}`
				})
			},

		async getdata() {
				let testifo = {
					name: '333',
					psw: '333'
				}
				let res = await this.$myRequest({
					url: '/category',
					data: testifo,
					method: "POST",
					timeout: 7000
				})
				this.manageData(res.data);
			},

			manageData(data) {
				console.log(data);
				data.forEach(item => {
					if (item.pid) {
						this.twodata.push(item);
					} else {
						this.onedata.push(item);
					}

				})
				console.log(this.twodata);
			}


		}
	}
</script>

<style>
	.active {
		color: #FF0000;
		display: block;
		border-left: 2rpx solid #FF0000;
		background-color: #fff;
	}


	.content {
		width: 100%;

	}

	.left_bar {
		width: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: rgba(0, 0, 0, 0.1);
		position: fixed;
		left: 0;
		top: 0;
		/* #ifndef MP-WEIXIN*/
		top: 88rpx;
		/* #endif*/

		bottom: 0;
		box-sizing: 100;
	}

	.left_bar text {
		width: 100%;
		padding: 20rpx 0 20rpx 10rpx;
		box-sizing: border-box;
	}

	.show_content {
		width: 100%;
		height: 100%;
		/* background-color: #007AFF; */
		padding: 0 20rpx 0 200rpx;
		box-sizing: border-box;
	}

	.list_box {
		padding: 20rpx 0 10rpx 10rpx;
	}

	.list_title {
		padding: 10rpx 0 20rpx;
	}

	.ifo_box {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.ifo_conttent {
		width: 170rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.ifo_conttent image {
		width: 140rpx;
		height: 140rpx;
	}

	.shops_name {
		font-size: 28rpx;
	}
</style>
