export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onClick1(){
      this.$message.error('错了哦，这是一条错误消息');
    },
    onClick2(){
      this.$alert('哈哈哈傻瓜，点进来了吧', '铸币', {
        confirmButtonText: '2333',
        callback: action => {
          this.$message.success('已完成')
        }
      });
    }
  }
}
