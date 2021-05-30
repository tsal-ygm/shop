<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		methods: {
			...mapMutations(['login'])
		},

		onLaunch: function() {
			let usersifo = uni.getStorageSync('usersifo') || '';
			if (usersifo) {
				uni.getStorage({
					key: 'usersifo',
					success: (res) => {
						this.login(res.data)
					}
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
		@import url("./static/base/base.css");
	@import url("static/iconfont/iconfont.css");

</style>
