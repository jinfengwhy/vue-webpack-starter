<template>
    <div>
        <form @submit.prevent="add">
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

    methods: {
        add () {
            // 1，注册表单提交事件及处理函数
            // 2，配置表单验证
            // 3，收集表单数据
            // 4，提交表单，发起请求，添加学生
            // 5，添加成功，跳转到列表页
            //       编程式导航
            axios.post('http://127.0.0.1:3000/list', this.formData)
                .then ((res) => {
                    if (res.status === 201) {
                        this.$router.back()
                    }
                })
        }
    }
}
</script>