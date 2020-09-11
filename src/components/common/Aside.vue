<template>
	<div class="col-sm-3 col-md-2 sidebar">
		<ul class="nav nav-sidebar">
			<!--
            Router-link 默认渲染成 a 链接，但也可以配置渲染成其它元素
            Router-link 匹配成功，还会自带一个样式类：router-link-active 我们也可以修改
			-->
			<router-link to="/" exact tag="li">
				<a>HOME</a>
			</router-link>
			<router-link to="/crud" tag="li">
				<a>CRUD</a>
			</router-link>
		</ul>
	</div>
</template>
