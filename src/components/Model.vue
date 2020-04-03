<template>
  <div>
  <h1>Vue模板语法</h1>
  <h2>插值</h2>
    <input type="text" v-model="message">
    <p>动态赋值：{{message}}</p>
    <p v-once>只赋值一次：{{message}}</p>
    <p v-html="message2">html显示：{{message2}}</p>
    <hr>
  <h2>数据绑定</h2>
    <div id="dynamicId">未绑定id：11</div>
    <div v-bind:id="dynamicId">动态绑定id：22 --- id:{{dynamicId}}</div>
    <div :id="dynamicId">缩写绑定id：33</div>
    按钮显示绑定：<button v-bind:disabled="isButtonDisabled">Button</button>
 <hr>
 <h2>js表达式</h2>
     {number + 1}}
    {{ok?'YES':'NO'}}
    {{info.split(' ').reverse().join(',')}}
<hr>
 <h2>参数</h2>
    <a v-bind:href='url'>baidu</a>
    <a :href='url'>baidu2</a>
 <hr>
  <h2>事件绑定</h2>
    <button v-on:click="doSomething">按钮1</button>
     <button @click="doSomething">按钮2</button>
 <hr>
  <h2>条件语句</h2>
    <p v-if="show">Vue is best!</p>
    <p v-else>Oh no!</p>
  <h3>template</h3>
    <template v-if='ok'>
      <!-- <h4>Title</h4> -->
      <p>Paragraph1</p>
      <p>Paragraph2</p>
    </template>
  <h3>v-else</h3>
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
  <h3>v-else-if</h3>
    <div v-if="type=='A'">
      A
    </div>
    <div v-else-if="type=='B'">
      B
    </div>
    <div v-else-if="type=='C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
 <hr>
  <h3>用key管理可复用的元素</h3>
    <template v-if="loginType === 'username'">
      <label>UserName</label>
      <input placeholder="Enter you username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter you email address" key="email-input">
    </template>
    <button @click="toggle()">toggle</button>
  <h3>v-show</h3>
    <h4 v-show="ok">Hello!</h4>
 <hr>
  <h2>循环语句</h2>
    <h3>列表遍历</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
          {{item.name}}
      </li>
    </ul>
    <h3>index索引参数</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{index}} -- {{item.name}}
      </li>
    </ul>
    <h3>遍历对象</h3>
    <ul>
      <li v-for="(value, index) in object" :key="index">
        {{value}}
      </li>
    </ul>
    <h3>name 属性名参数</h3>
     <ul>
      <li v-for="(value,name,index) in object" :key="index">
        {{name}} --{{index}} -- {{value}}
      </li>
     </ul>
<hr>
<h2>计算属性</h2>
  <div>
    <p>Original message: "{{message}}"</p>
    <p>Computed reversed message: "{{reversedMessage}}"</p>
    <button @click="change()">changeMessage</button>
  </div>
<h2>计算属性缓存 vs 方法</h2>
  <div>
    <p>Original message: "{{message}}"</p>
    <p>Computed reversed message: "{{reversedMessage}}"</p>
    <p>Computed reversed message: "{{reversedMessage}}"</p>
    <p>methods reversed message: "{{reversedMessage2()}}"</p>
    <p>methods reversed message: "{{reversedMessage2()}}"</p>
    <button @click="change()">changeMessage</button>
  </div>
<hr>
<h2>监视属性</h2>
    <input type="text" v-model="n" style="width: 30px">&nbsp;&nbsp;的平方是：&nbsp;&nbsp;{{result}}
<hr>
<h2>样式属性Class与Style绑定</h2>
  <h3>Class样式属性绑定</h3>
  <p class="aclass">以前的class绑定</p>
  <p :class="a">动态class绑定</p>
  <button @click="changeClass">修改样式</button>
  <p class="aclass cclass">以前多样式对象绑定</p>
  <p :class="{bclass:isB, cclass:isC}">动态多样式对象绑定</p>
  <br>
  <h3>Style内联样式绑定</h3>
  <p style="color:blue;font-size:15px">以前的style绑定</p>
  <!-- <p v-bind:style="{ color: activeColor, font-size: fontSize }">动态的style绑定</p> -->
<hr>
<h2>事件处理</h2>
  <button @click="counter+=1">Add 1</button>
  <p>the button above has been clicked {{counter}} times.</p>
  <button @click="greet">Greet</button>
  <button @click="say('hi')">Say Hi</button>
  <button @click="say('what')">Say what</button>
  <div @click="doDivClick" style="width:100px">
    <a @click="doThis" href="www.baidu.com">baidu</a>
    <a @click.stop="doThis" href="www.baidu.com">baidu.stop</a>
    <a @click.prevent="doThis" href="www.baidu.com">baidu.prevent</a>
 <a @click.stop.prevent="doThis" href="www.baidu.com">baidu.stop.prevent</a>
  </div>
  <input v-on:keyup.enter="submit" v-model="enterName">
<hr>
<h2>表单处理</h2>
  <h3>文本框</h3>
  <input v-model="mess" placeholder="edit me">
  <p>Message is: {{mess}}</p>
  <h3>多行文本textarea</h3>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line:">{{mess}}</p>
  <textarea v-model="mess" placeholder="add multiple lines"></textarea>
  <h3>复选框</h3>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{checked}}</label>
  <h3>多个复选框</h3>
  <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="john" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked name: {{checkedNames}}</span>
  <h3>单选框</h3>
  <input type="radio" id="one" value="One1" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two1" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{picked}}</span>
  <h3>下拉框</h3>
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{selected}}</span>
  <h3>多选下拉框</h3>
  <select v-model="selectedMul" multiple style="width: 50px">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>SelectedMul: {{selectedMul}}</span>
 <h3>v-for 遍历下拉 </h3>
 <select v-model="selectedv">
   <option v-for="(option, index) in options" :value="option.value" :key="index">
     {{option.text}}
   </option>
 </select>
 <span>SelectedV-for: {{selectedv}}</span>
 <h3>修饰符</h3>
 <input v-model.lazy="msg">
 <input v-model.number="age" type="number">
 <input v-model.trim="msg">

  </div>
</template>

<script>
let count = 1
export default {
  name: 'Model',
  data () {
    return {
      message: 'hello cc! vue study',
      message2: '<font color="red">hello cc! vue study</font>',
      dynamicId: 33,
      isButtonDisabled: false,
      number: 1,
      ok: true,
      info: 'a b c d e',
      url: 'http://www.baidu.com',
      show: false,
      type: 'D',
      loginType: 'username',
      items: [
        {name: '北京'},
        {name: '南京'},
        {name: '东京'}
      ],
      object: {
        title: 'How to do list in Vue',
        author: 'C c',
        publishedAt: '2020-03-25'
      },
      n: 1,
      result: 1,
      a: 'aclass',
      isB: true,
      isC: true,
      activeColor: 'green',
      fontSize: '15px',
      counter: 0,
      name: 'hello cc',
      enterName: '',
      mess: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selectedMul: [],
      selectedv: 'a',
      options: [
        {text: 'One', value: 'a'},
        {text: 'Two', value: 'b'},
        {text: 'Three', value: 'c'}
      ],
      age: 0,
      msg: ''
    }
  },
  methods: {
    doSomething () {
      alert('clicked me!')
    },
    toggle () {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
    },
    change () {
      this.message = 'olleh hello'
    },
    reversedMessage2 () {
      count++
      return count + ' ' + this.message.split('').reverse().join('')
    },
    changeClass () {
      this.a = (this.a === 'bclass' ? 'aclass' : 'bclass')
      this.isC = (this.isC ? 0 : true)
    },
    greet (event) {
      alert(this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    say (message) {
      alert(message)
    },
    doThis () {
      alert('执行了a')
    },
    doDivClick () {
      alert('执行了div')
    },
    submit () {
      alert(this.enterName)
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage () {
      count++
      return count + ' ' + this.message.split('').reverse().join('')
    }
    // result(){
    //   return this.n*this.n
    // }
  },
  watch: {
    n (newN, oldN) {
      console.log(newN)
      this.result = newN * newN
    }
  }
}

</script>

<style>
  .aclass{
    color:red
  }
  .bclass{
    color:blueviolet
  }
  .cclass{
    font-size: 15px
  }
</style>
