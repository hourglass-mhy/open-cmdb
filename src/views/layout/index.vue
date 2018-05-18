<template>
	<div class="layout">
		<div class="theme-navbar-container navbar-container ">
			<navbar></navbar>
		</div>
		<div class="main-container">
			<div class="left theme-layout-left" id="left">
				<sidebar></sidebar>
			</div>
			<div class="right">
				<div class="bread-crumb theme-bread-crumb">
					<breadcrumb></breadcrumb>
				</div>
				<div class="page theme-page">
					<router-view></router-view>
				</div>
			</div>
		</div>
		
	</div>

</template>

<script>
	import Navbar from './Navbar.vue'
	import Sidebar from './Sidebar.vue'
	import AppMain from './AppMain.vue'
	import Breadcrumb from './Breadcrumb.vue'

	export default {
		name: 'Layout',

		components: {
			Navbar,
			Sidebar,
			AppMain,
			Breadcrumb
		},

		mounted(){
		},

		computed: {
			
		},
		
		methods: {
			
		},
	}
</script>
<style lang="scss">
	html,body {
		height: 100%;
		width: 100%;
	}
	body {
	    // background: #edf2f6;
	    overflow: hidden;
	}
</style>

<style lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.layout {
		height: 100%;
		width: 100%;
		.navbar-container {
	        height: 60px;
	        position: fixed;
	        top: 0;
	        left: 0;
	        width: 100%;
	        z-index: 910;
	        line-height: 60px;
		}
		.main-container {
			height: 100%;
			width: 100%;
			display: flex;
			padding-top: 60px;
			.left {
				height: 100%;
			    overflow: hidden;
			    transition: all .28s ease-out;
			    flex: 0 0 160px;
			    border-color: #e4e7eb;
			}
			.right {
				height: 100%;
				width: 100%;
				.bread-crumb {
					height: 40px;
					width: 100%;
				}
				.page {
				    padding: 15px;
				    height: calc(100% - 75px);
				    overflow-x: hidden;
				    overflow-y: auto;
				    margin-left: 15px;
				    margin-top: 15px;
				}
			}

		}
	}
</style>