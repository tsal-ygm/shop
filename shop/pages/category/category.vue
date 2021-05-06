<template>
	<view class="content">
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" fixed shadow>
			<view class="">
				<input class="nav_search" type="text" value="" />
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				meg: '分类'
			}
		}
	}
</script>

<style>
	.nav_search {
		border: 1rpx solid #ccc ;
	}
</style>
