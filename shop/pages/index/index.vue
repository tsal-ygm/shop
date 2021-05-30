<template>
	<view class="home">
		<!-- #ifdef MP-WEIXIN -->
            <view class="search_box">
            	<view class="search" @click="showIco">
            		<icon type="search" v-if="isico"></icon>
            		<input type="text" value="" placeholder="裤子" class="searchinput" />
            	</view>
            </view>
		<!-- #endif -->
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
					<view class="hot_title" @click="shopclick">商品推荐</view>
					<view class="shops_box">
						<navigator v-for="item in shops" :key="item.id" class="shops_item" :url="item.url">
							<image class="shops_img" :src="item.img" mode="widthFix"></image>
							<view class="shops_ifo">{{item.title}}</view>

							<view class="shops_price">
								<view class="newprice">
									￥{{item.newprice}}
								</view>
								<view v-if="item.oldprice" class="oldprice">
									￥{{item.oldprice}}
								</view>
							</view>
							<view class="paynumber">
								{{item.num}}人已付款
							</view>

							<view v-if="item.youhui" class="youhui">
								{{item.youhui}}元
							</view>
						</navigator>

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
				swipesData: '',
				isico: true,
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
			showIco(){
				this.isico = false;
			},
			
			// 获取轮播图数据
			shopclick(){
				uni.removeStorage({
					key:'aaaa',
					success(res) {
						console.log('成功删除');
					}
				})
			},
			
			getSwipes() {
				var data = [{

						id: 0,
						img: "//imgcps.jd.com/ling4/69057791767/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c13869682acdd181deeff13-618/42238f59/cr_1125x449_0_166/s1125x690/q70.jpg",
						url: "https://ww.baidu.com"
					},
					{
						id: 1,
						img: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/179670/9/5818/328414/60abd6beE93f5f0cc/b3a4cbc61c8bee3e.jpg!cr_1125x449_0_166!q70.jpg.dpg",
						url: "https://ww.baidu.com"
					},
					{
						id: 2,
						img: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/186941/23/3247/201331/609e7584E0064e31a/a4878e720d959839.jpg!cr_1125x449_0_166!q70.jpg.dpg",
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
						url: "/pages/detail/detail",
						img: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/177139/28/115/88970/607eb164E3e4136ab/f1605e6f8e2cf430.jpg!q70.dpg.webp",
						title: "萩嫒T恤碎花鱼尾套装女两洋气减龄显瘦气质时尚套装夏款新 图片色 S ",
						newprice: 143.9,
						oldprice: 234,
						youhui: '省1.5',
						num: 423
					},
					{
						id: 1,
						url: "/pages/detail/detail",
						img: "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/180745/12/885/404960/60851b9cE8fb243a5/81d94dcada441117.jpg!q70.dpg.webp",
						title: "中国移动咪咕1/7漫威复仇者联盟钢铁侠手办MK85蜘蛛侠玩具雷神动漫模型超大摆件儿童生日礼物 钢铁侠玩具【关节可动+顺丰】高约28.5cm ",
						newprice: 128,
						oldprice: '',
						youhui: '满减',
						num: 423
					},
					{
						id: 2,
						url: "/pages/detail/detail",
						img: "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/134221/11/14986/144443/5fa38589E050f89b0/cdba1c27e6188f87.jpg!q70.dpg.webp",
						title: "天喜冷水壶玻璃水壶家用泡茶壶耐高温大容量凉白开水杯套装凉水壶 1700ml",
						newprice: 134,
						oldprice: '',
						youhui: '',
						num: 423
					},
					{
						id: 3,
						url: "/pages/detail/detail",
						img: "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/151054/19/8151/140756/5fc0a05aE4d95ffca/0612a92c1912cca2.jpg!q70.dpg.webp",
						title: "索尼（SONY）KD-85X9000H 85英寸 4K超高清液晶电视 专业游戏模式 AI智能语音 HDMI2.1 支持4K120Hz输入",
						newprice: 2134,
						oldprice: '3345',
						youhui: '打7折',
						num: 423
					},
					{
						id: 4,
						url: "/pages/detail/detail",
						img: "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/76790/26/13085/438164/5da52bdeEc173af81/ba61e6b3d651ae68.jpg!q70.dpg.webp",
						title: "好欢螺 螺蛳粉（水煮型）广西柳州特产方便面粉速食米线 袋装300g",
						newprice: 12.9,
						oldprice: '',
						youhui: '',
						num: 423
					},
					{
						id: 5,
						url: "/pages/detail/detail",
						img: "//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/86589/11/13125/33853/5e538668E7f3b5e43/6023ec2f50c17bf1.jpg!q70.dpg.webp",
						title: "日系雨伞s女三折叠伞森系大号复古双人晴雨两用简约小型韩国ljm S1-抹茶绿",
						newprice: 68.9,
						oldprice: '',
						youhui: '',
						num: 423
					}
				];
				this.shops = shops;
			}
		}
	}
</script>

<style>
	/* #ifdef MP-WEIXIN */
	.search_box {
		width: 100%;
		height: 80rpx;
		background-color: #ff0000;
	}
	.search {
		width: 80%;
		height: 60rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0 auto;
		padding: 0 20rpx;
		border: 1rpx solid #ccc;
		border-radius: 10rpx;
		background-color: rgba(250, 250, 250, 0.8);
	}

	.searchinput {
		width: 50%;
		height: 60rpx;
		flex-grow: 1;
	}

	/*#endif */


	/* 轮播图样式 */
	.home,
	swiper {
		width: 100%;
		height: 380rpx;
	}

	.home swiper image {
		width: 100%;
		height: 100%;
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
	/* 	width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 0 102rpx;
		flex-wrap: wrap;
		flex-shrink: 1; */
	    -moz-column-count:2; /* Firefox */
	     -webkit-column-count:2; /* Safari 和 Chrome */
	     column-count:2;
	     -moz-column-gap: 20rpx;
	     -webkit-column-gap: 20rpx;
	     column-gap: 20rpx;
	     width: 100%;
	     margin:20rpx auto;
		 /* #ifdef H5 */ 
		 padding-bottom: 100rpx; 
		 /* #endif */
	}

	.shops_item {
	/* 	width: 49%;
		border-radius: 15rpx;
		overflow: hidden;
		padding-bottom: 30rpx;
		margin-bottom: 10rpx;
		background-color: #fff; */

	  padding: 10rpx;
	  margin-bottom: 20rpx;
	  -moz-page-break-inside: avoid;
	  -webkit-column-break-inside: avoid;
	  break-inside: avoid;
	  overflow: hidden;
	  background-color: #fff;
	  border-radius: 15rpx;
	  padding-bottom: 30rpx
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
		font-size: 20rpx;
		padding: 10rpx;
	}

	.youhui {
		height: 36rpx;
		display: inline;
		border: 1rpx solid red;
		border-radius: 5rpx;
		text-align: center;
		line-height: 36rpx;
		font-size: 20rpx;
		color: red;
		padding: 0 5rpx;
		margin-left: 10rpx;

	}
</style>
