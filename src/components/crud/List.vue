<template>
	<div>
		<!-- <a class="btn btn-success" href="/crud/new" style="margin-bottom: 10px;">添加学生</a> -->
        <router-link class="btn btn-success" to="/crud/new" style="margin-bottom: 10px;">添加学生</router-link>
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>姓名</th>
						<th>年龄</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in list" :key="item.id">
						<td>{{ item.id }}</td>
						<td>{{ item.name }}</td>
						<td>{{ item.age }}</td>
						<td>
							<router-link :to="`/crud/update?id=${item.id}`">编辑</router-link>
							<a @click.prevent="deleteById(item.id)" href="#">删除</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            list: [
                {
                    id: 1,
                    name: 'Jack',
                    age: 18
                }
            ]
        }
    },
    
    async created () {
        // json-server 默认开启的服务已经在服务端处理了跨域问题
        // 它会在响应头中加入一个字段：Access-Control-Allow-Origin
        // 这个字段的含义就是允许浏览器跨域请求这个资源
        // axios.get('http://127.0.0.1:3000/list').then((res) => {
        //     this.list = res.data
        // })

        // 异步 API 写起来像同步代码一样
        this.loadList()
	},
	
	methods: {
		// 单独封装成方法，是为了可以重用
		async loadList () {
			let res = await axios.get('http://127.0.0.1:3000/list')
        	this.list = res.data
		},

		deleteById (id) {
			// 1，绑定注册删除事件处理函数	
			// 2，发起请求删除数据	
			// 3，根据响应结果来处理	
			axios.delete(`http://127.0.0.1:3000/list/${id}`)
				.then(() => {
					if (!window.confirm('确定要删除吗？')) {
						return
					}
					this.loadList()
				})
		}
	}
}
</script>