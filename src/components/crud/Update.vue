<template>
    <div>
        <h3>编辑学生</h3>
        <form @submit.prevent="update">
            <div class="form-group">
                <label for>姓名</label>
                <input required
                    v-model="formData.name"
                    type="text" class="form-control" id placeholder name="name" />
            </div>
            <div class="form-group">
                <label for>年龄</label>
                <input required
                    v-model.number="formData.age"
                    class="form-control" type="number" id name="age" />
            </div>
            <button type="submit" class>Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            formData: {
                name: '',
                age: ''
            }
        }
    },

    async created () {
        // this.$router 访问到的是路由实例对象
        // this.$route 访问到的是路由参数对象
        // this.$route.query 获取查询字符串参数
        const {id} = this.$route.query
        const {data} = await axios.get(`http://127.0.0.1:3000/list/${id}`)
        this.formData = data
    },

    methods: {
        async update () {
            const {id} = this.$route.query
            const {data} = await axios.patch(`http://127.0.0.1:3000/list/${id}`, this.formData)
            this.$router.back()
        }
    }
}
</script>