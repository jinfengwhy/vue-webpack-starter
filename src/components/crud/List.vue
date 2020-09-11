<template>
	<div>
		<a class="btn btn-success" href="/crud/new" style="margin-bottom: 10px;">添加学生</a>
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
							<a href="#">编辑</a>
							<a href="#">删除</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
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
    }
}
</script>