<template>
	<view class="home">
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单"  fixed backgroundColor="#ff0000" color="#fff" statusBar>
			<input class="h_search" type="text" value="衣服" />
		</uni-nav-bar>
		<swiper indicator-dots circular indicator-active-color="#fff" autoplay>
			<swiper-item v-for="item in swipesData" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view class="box">
			<view class="content">
				<view class="nav">
					<navigator v-for="item in girs" :key="item.id" :url="item.url" class="nav_item">
						<image :src="item.img"></image>
						<text>{{item.name}}</text>
					</navigator>

				</view>

				<view class="hot">
					<view class="hot_title">商品推荐</view>
					<view class="shops_box">
						<navigator v-for="item in shops" :key="item.id" class="shops_item" :url="item.url">
							<image class="shops_img" :src="item.img" mode="widthFix"></image>
							<view class="shops_ifo">{{item.title}}</view>

							<view class="shops_price">
								<view class="newprice">
									￥{{item.newprice}}
								</view>
								<view class="oldprice">
									￥{{item.oldprice}}
								</view>
							</view>
							<view class="paynumber">
								{{item.num}}人已付款
							</view>

							<view class="youhui">
								积分减{{item.youhui}}元
							</view>
						</navigator>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				swipesData: '',
				girs: "",
				shops: ""
			}
		},
		onLoad() {
			this.getSwipes();
			this.getGirs();
			this.getshops()
		},
		methods: {
			// 获取轮播图数据
			getSwipes() {
				var data = [{

						id: 0,
						img: "http://m.itheima.com/images/slidead/mobile/20191213180241750x410.jpg",
						url: "https://ww.baidu.com"
					},
					{
						id: 1,
						img: "http://m.itheima.com/images/slidead/mobile/20191210154717750-410.jpg",
						url: "https://ww.baidu.com"
					}
				];
				this.swipesData = data;
			},

			//获取nav导航栏数据
			getGirs() {
				var girs = [{
						id: 0,
						name: "服饰",
						url: "https://www.baidu.com",
						img: "../../static/img/fuzuan.png"
					},
					{
						id: 1,
						name: "数码家电",
						url: "https://www.baidu.com",
						img: "../../static/img/jiadian.png"
					},
					{
						id: 2,
						name: "精品家具",
						url: "https://www.baidu.com",
						img: "../../static/img/jiaju.png"
					},
					{
						id: 3,
						name: "母婴用品",
						url: "https://www.baidu.com",
						img: "../../static/img/muying.png"
					},
					{
						id: 4,
						name: "新鲜水果",
						url: "https://www.baidu.com",
						img: "../../static/img/shuiguo.png"
					},
					{
						id: 5,
						name: "儿童玩具",
						url: "https://www.baidu.com",
						img: "../../static/img/wanju.png"
					},
					{
						id: 6,
						name: "护理用品",
						url: "https://www.baidu.com",
						img: "../../static/img/xihu.png"
					},
					{
						id: 7,
						name: "更多",
						url: "https://www.baidu.com",
						img: "../../static/img/gengduo.png"
					},
				]
				this.girs = girs;
			},

			// 获取商品数据
			getshops() {
				var shops = [{
						id: 0,
						url: "###",
						img: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/177139/28/115/88970/607eb164E3e4136ab/f1605e6f8e2cf430.jpg!q70.dpg.webp",
						title: "萩嫒T恤碎花鱼尾套装女两洋气减龄显瘦气质时尚套装夏款新 图片色 S ",
						newprice: 143.9,
						oldprice: 234,
						youhui: 1.5,
						num: 423
					},
					{
						id: 1,
						url: "###",
						img: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/177139/28/115/88970/607eb164E3e4136ab/f1605e6f8e2cf430.jpg!q70.dpg.webp",
						title: "萩嫒T恤碎花鱼尾套装女两洋气减龄显瘦气质时尚套装夏款新 图片色 S ",
						newprice: 143.9,
						oldprice: 234,
						youhui: 1.5,
						num: 423
					},
					{
						id: 2,
						url: "###",
						img: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/177139/28/115/88970/607eb164E3e4136ab/f1605e6f8e2cf430.jpg!q70.dpg.webp",
						title: "萩嫒T恤碎花鱼尾套装女两洋气减龄显瘦气质时尚套装夏款新 图片色 S ",
						newprice: 143.9,
						oldprice: 234,
						youhui: 1.5,
						num: 423
					}
				];
				this.shops = shops;
			}
		}
	}
</script>

<style>
	.header {
		width: 100%;
		background-color: #007AFF;
		height: var(--status-bar-height);
		width: 100%;
	}
	
    .h_search {
		width: 100%;
		height: 60rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}

	/* 轮播图样式 */
	.home,
	swiper {
		width: 100%;
		height: 380rpx;
	}

	.home swiper image {
		width: 100%;
		height: 200%;
	}

	/* nav导航样式 */
	.box {
		width: 100%;
		background-color: rgba(240, 230, 230, 0.5);
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 94%;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-shrink: 1;
		flex-wrap: wrap;
		margin: 20rpx 0;
	}

	.nav_item {
		height: 100%;
		width: 24%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 15rpx;
	}

	.nav_item text {
		font-size: 24rpx;
		color: #666;
		text-align: center;
		margin-top: 10rpx;
	}

	.nav_item image {
		width: 80rpx;
		height: 80rpx;
	}

	/* 商品推荐样式 */
	.hot {
		width: 100%;
	}

	.hot_title {
		width: 100%;
		color: #fff;
		background-color: #FF0000;
		margin-top: 15rpx;
		line-height: 64rpx;
		text-align: center;
		border-radius: 20rpx;
		letter-spacing: 30rpx;
	}

	.shops_box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 0 102rpx;
		flex-wrap: wrap;
		flex-shrink: 1;
	}

	.shops_item {
		width: 49%;
		border-radius: 15rpx;
		overflow: hidden;
		padding-bottom: 30rpx;
		margin-bottom: 10rpx;
		background-color: #fff;
	}

	.shops_img {
		width: 100%;
	}

	.shops_ifo {
		width: 100%;
		height: 74rpx;
		padding: 10rpx;
		margin-bottom: 10rpx;
		font-size: 24rpx;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.shops_price {
		padding: 10rpx 10rpx 10rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.newprice {
		color: #FF0000;
		font-weight: 700;
		text-align: center;
		line-height: 36rpx;
		margin-right: 10rpx;
	}

	.oldprice {
		color: #666666;
		text-decoration: line-through;
		font-weight: 700;
		text-align: center;
		line-height: 36rpx;
	}

	.paynumber {
		font-size: 12rpx;
		padding: 10rpx;
	}

	.youhui {
		height: 36rpx;
		display: inline;
		border: 1rpx solid red;
		border-radius: 5rpx;
		text-align: center;
		line-height: 36rpx;
		font-size: 16rpx;
		color: red;
		padding: 0 5rpx;
		margin-left: 10rpx;

	}
</style>
