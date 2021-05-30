<template>
	<view class="box">
		<view class="" v-if="haslogin">
			<view class="" v-if="isnum">
				<!-- 商品展示 -->
				<view class="cart_box">
					<view class="redact" @click="showdel = !showdel">
						编辑
					</view>
					<view class="two_box" v-for="(item,index) in cartshop" :key="index">
						<view class="shop_name">

							<checkbox-group class="check">
								<checkbox class="check_active" value="item" :checked="item.selected"
									@click="storeChoose(index)"></checkbox>
							</checkbox-group>
							<text>{{item.title}}</text>
							<text class="iconfont">&#xe604;</text>
						</view>
						<view class="shopifo_box" v-for="(sitem,tindex) in item.goods" :key="tindex">
							<view class="shopifo_box_left">
								<checkbox-group class="check">
									<checkbox class="check_active" value="item" :checked="sitem.selected"
										@click="choose(index,tindex)">
									</checkbox>
								</checkbox-group>
								<image :src="sitem.img" mode=""></image>
							</view>
							<view class="shopifo_box_right">
								<view class="trade_name">
									{{sitem.name}}
								</view>
								<view class="trade_type">
									{{sitem.spec_key}}
								</view>
								<view class="trade_right_b">
									<text class="trade_money">￥{{sitem.price}}</text>
									<view class="trade_number">
										<text class="iconfont subnumber"
											@click="countnum(false,index,tindex)">&#xe620;</text>
										<input type="text" :value="sitem.num" class="buynumber" />
										<text class="iconfont addnumber"
											@click="countnum(true,index,tindex)">&#xe632;</text>
									</view>
								</view>
							</view>
						</view>
					</view>

					<view class="cart_buttom">
						<view class="cart_b_left">
							<checkbox-group class="check">
								<checkbox class="check_active" value="item" :checked="ischeckAll" @click="checkAll">
								</checkbox>
							</checkbox-group>
							<text class="quanxuan">全选</text>
						</view>
						<view class="cart_b_right" v-if="showdel">
							<text class="heji">合计</text>
							<text class="count_money">￥{{sonprice}}</text>
							<text class="clearing">结算</text>
						</view>
						<view class="delbox" v-else @click="delshop">
							<text class="iconfont">&#xe617;</text>
							<text>删除</text>
						</view>
					</view>
				</view>


			</view>
			<view class="showimg" v-else>
				<image src="../../static/img/cart_wu.png" mode="widthFix"></image>
				<view class="btnclick_box">
					随便逛逛
				</view>
			</view>
		</view>
		<view class="showimg" v-else>
			<image src="../../static/img/cart_wu.png" mode="widthFix"></image>
			<view class="btnclick_box" @click="btnlogin">
				点击登录
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				isnum: true,
				cartshop: [],
				sonprice: 0, //总价格
				showdel: true,
				ischeckAll: false
			}
		},
		onLoad() {
			this.getcarone();
		},
		computed: {
			...mapState(['haslogin'])
		},

		methods: {
			btnlogin() {
				uni.redirectTo({
					url: "/pages/login/login"
				})
			},

			//监听返回按钮
			onNavigationBarButtonTap(e) {
				uni.switchTab({
					url: `/pages/category/category`
				})

			},

			// async getcarone() {
			// 	let data = uni.getStorageSync('usersifo');
			// 	uni.request({
			// 		url: "http://192.168.1.101:3000/cart",
			// 		data: data,
			// 		method: "POST",
			// 		success: (res) => {
			// 			this.cartshop = res.data;
			// 			this.isnum = true;
			// 			console.log(this.cartshop);
			// 		}

			// 	})
			// },
			
			async getcarone() {
				let data = uni.getStorageSync('usersifo');
				console.log(data);
			let res = await	this.$myRequest({
					url: "/cart",
					data: data,
					method: "POST"
			
				})
				this.cartshop = res.data;
				console.log(res.data);
				
			},

			// 求总价格
			Totalprice() {
				let price = 0;
				let cartshop = this.cartshop;
				for (var i = 0; i < cartshop.length; i++) {
					for (var j = 0; j < cartshop[i].goods.length; j++) {
						if (cartshop[i].goods[j].selected == true) {
							price += cartshop[i].goods[j].num * cartshop[i].goods[j].price;
						}
					}
				}

				this.sonprice = price.toFixed(2);
			},

			//反选
			rsCheckAll() {
				let cartshop = this.cartshop;
				let checkAllNum = 0;
				console.log(cartshop);
				for (var item of cartshop) {
					if (item.selected == true) {
						checkAllNum++;
					}
				}

				if (checkAllNum == cartshop.length) {
					this.ischeckAll = true;
				} else {
					this.ischeckAll = false;
				}

				this.Totalprice();
			},

			// 点击更改数量
			countnum(isbol, index, tindex) {
				let shopindex = this.cartshop[index].goods[tindex];
				if (isbol) {
					shopindex.num++;
				} else {
					if (shopindex.num <= 1) {
						return
					}
					shopindex.num--;
				}

				this.Totalprice();
			},

			//选择商品
			choose(index, tindex) {
				let shopindex = this.cartshop[index];
				shopindex.goods[tindex].selected = !shopindex.goods[tindex].selected;
				let goodsNum = 0;
				for (var item of shopindex.goods) {
					if (item.selected) {
						goodsNum++;
					}
				}
				if (goodsNum == shopindex.goods.length) {
					shopindex.selected = true;
				} else {
					shopindex.selected = false;
				}

				this.rsCheckAll();
				this.Totalprice();
			},

			//商店的选择
			storeChoose(index) {
				let shopindex = this.cartshop[index];
				shopindex.selected = !shopindex.selected;
				for (var i of shopindex.goods) {
					console.log(i);
					i.selected = shopindex.selected;
				}

				this.rsCheckAll();
				this.Totalprice();
			},

			// 全选
			checkAll() {
				let cartshop = this.cartshop;
				this.ischeckAll = !this.ischeckAll;
				for (var i = 0; i < cartshop.length; i++) {
					cartshop[i].selected = this.ischeckAll;
					for (var j = 0; j < cartshop[i].goods.length; j++) {
						cartshop[i].goods[j].selected = this.ischeckAll;
					}
				}

				this.Totalprice();
			},

			//删除
			delshop() {
				let shopindex = this.cartshop;
				let delNum = 0;
				for (var i = 0; i < shopindex.length; i++) {
					for (var j = 0; j < shopindex[i].goods.length; j++) {
						if (shopindex[i].goods[j].selected == true) {
							delNum++;
							console.log(shopindex[i].goods[j]);
						}
					}
				}
				console.log(shopindex, '44444');
				this.showBezel(delNum)

			},

			//弹窗提示
			showBezel(delNum) {
				uni.showModal({
					content: `确认将这${delNum}宝贝删除吗?`,
					cancelText: '我在想想',
					success: (res) => {
						if (res.confirm) {
							this.delStore();
						}
					}
				})
			},


			//弹窗确认获取要删除的商品删除
			delStore() {
				let that = this;

				if (this.ischeckAll) {
					this.cartshop = [];
					this.ischeckAll = false;
					this.sonprice = 0;
					return;
				} else {
					for (let i = 0; i < that.cartshop.length; i++) {
						if (that.cartshop[i].selected) {
							that.cartshop.splice(i, 1);
						} else {
							for (let j = 0; j < that.cartshop[i].goods.length; j++) {
								if (that.cartshop[i].goods[j].selected) {
									that.cartshop[i].goods.splice(j, 1);
								}
							}
						}
					}
				}

				this.Totalprice();

			}


		}
	}
</script>

<style>
	.box {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		background-color: rgba(190, 190, 190, 0.1);
	}

	.showimg image {
		width: 100%;
	}

	.btnclick_box {
		width: 300rpx;
		line-height: 60rpx;
		border: 1rpx solid #ccc;
		border-radius: 20rpx;
		text-align: center;
		margin: 0 auto;
		color: #303133;
	}

	.check {
		color: #FF0000;
	}

	.check_active {
		color: #FF0000;
		transform: scale(0.7)
	}

	/* 购物车有商品时的样式 */
	.cart_box {
		width: 100%;
		height: 100%;
		padding-top: 70rpx;
		padding-bottom: 92rpx;
		/* position: relative;
		top: 0; */
	}

	.redact {
		height: 60rpx;
		width: 100%;
		display: block;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #FF0000;
		text-align: right;
		line-height: 60rpx;
		z-index: 100;
		font-size: 24rpx;
		padding: 0 50rpx;
		box-sizing: border-box;
		color: #fff;
	}

	.two_box {
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 10rpx;
		border-radius: 20rpx;
	}

	.shop_name {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20rpx 0;
	}

	.shopifo_box {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 20rpx;

	}

	.shopifo_box_left {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-right: 20rpx;
	}

	.shopifo_box_left image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 10rpx;

	}

	.shopifo_box_right {
		flex-grow: 1;
	}

	.trade_name {
		width: 420rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 30rpx;
		font-family: Arial, Helvetica, sans-serif;
		box-sizing: border-box;
	}

	.trade_type {
		display: inline-block;
		font-size: 24rpx;
		background-color: rgba(0, 0, 10, 0.1);
		color: #666;
		padding: 2rpx 15rpx;
		border-radius: 10rpx;
		margin: 20rpx 20rpx 20rpx 0;
	}


	.trade_right_b {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.trade_money {
		font-weight: 800;
		color: #FF3300;
	}

	.trade_number {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #ccc;
	}

	.subnumber,
	.addnumber {
		height: 42rpx;
		width: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 24rpx;
		background-color: rgba(0, 0, 0, 0.1);
		/* border: 1rpx solid #ccc; */
	}

	.buynumber {
		width: 100rpx;
		height: 40rpx;
		text-align: center;
		font-size: 28rpx;
		line-height: 40rpx;
		/* border-top: 1rpx solid #ccc; */
		/* border-bottom: 1rpx solid #ccc; */
	}

	/* 底部结算样式 */
	.cart_buttom {
		height: 96rpx;
		width: 95%;
		box-sizing: border-box;
		padding: 0 10rpx;
		position: fixed;
		bottom: 5rpx;
		/* #ifndef MP-WEIXIN*/
		bottom: 105rpx;
		/* #endif */
		background-color: #fff;
		box-shadow: 0 0 2rpx 5rpx #ccc;
		display: flex;
		border-radius: 30rpx;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		background-color: #ccc;
	}

	.cart_b_left {
		display: flex;
		align-items: center;
	}

	.quanxuan {
		font-size: 30rpx;
		line-height: 92rpx;
	}

	.heji {
		font-size: 24rpx;
	}

	.count_money {
		margin: 0 20rpx;
		color: #FF0000;
	}

	.clearing {
		padding: 10rpx 40rpx;
		border-radius: 40rpx;
		color: #fff;
		background-color: #FF0000;
	}

	.delbox {
		color: #FF0000;
		line-height: 92rpx;
		margin: 30rpx;
		font-size: 28rpx;
	}
</style>
