<template>
  <div>
    <h1>A simple UIKit for vue </h1>
    <h2>Visual</h2>
    <h3>Buttons</h3>
    <div>
      <button class="v-bttn">Default</button>
      <button class="v-bttn v-bttn--success">Success</button>
      <button class="v-bttn v-bttn--warning">Warning</button>
      <button class="v-bttn v-bttn--danger">Danger</button>
      <button disabled class="v-bttn">Disabled</button>
      <div>
        <pre v-highlightjs>
        <code class="html">&ltbutton class="v-bttn"&gtDefault&lt/button&gt
&ltbutton class="v-bttn v-bttn--success"&gtSuccess&lt/button&gt
&ltbutton class="v-bttn v-bttn--warning"&gtWarning&lt/button&gt
&ltbutton class="v-bttn v-bttn--danger"&gtDanger&lt/button&gt
&ltbutton disabled class="v-bttn"&gtDisabled&lt/button&gt</code>
        </pre>
      </div>
    </div>
    <h3>Grouping Stuff</h3>
    <p>Leveraging the power of flex for positioning:</p>
    <div class=" h-resizable width-phone">
      <ul class="h-equal-list">
        <li>
          <button class="v-bttn v-bttn--success fullWidth"><i class="fa fa-home" aria-hidden="true"></i></button>
        </li>
        <li>
          <button class="v-bttn v-bttn--danger fullWidth"><i class="fa fa-id-card" aria-hidden="true"></i></button>
        </li>
        <li>
          <button class="v-bttn fullWidth"><i class="fa fa-address-book" aria-hidden="true"></i></button>
        </li>
      </ul>
    </div>
    <div>
    <pre v-highlightjs>
      <code class="html">&ltul class="h-equal-list"&gt
    &ltli&gt...&lt/li&gt
    &ltli&gt...&lt/li&gt
    &ltli&gt...&lt/li&gt
&lt/ul&gt</code>
      </pre>
    </div>
    <div>
    </div>
    <br>
    <div class="nav max-width-tablet">
      <ul class="h-list">
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div>
      <pre v-highlightjs>
    <code class="html">&ltdiv class="nav"&gt
  &ltul class="h-list"&gt
    &ltli&gt&lta&gtHome&lt/a&gt&lt/li&gt
    &ltli&gt&lta&gtBlog&lt/a&gt&lt/li&gt
    &ltli&gt&lta&gtAbout&lt/a&gt&lt/li&gt
  &lt/ul&gt
&lt/div&gt</code>
      </pre>
    </div>
    <br>
    <div class="nav max-width-tablet">
      <ul class="h-list--end">
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div>
      <pre v-highlightjs>
    <code class="html">&ltdiv class="nav"&gt
  &ltul class="h-list--end"&gt
    &ltli&gt&lta&gtHome&lt/a&gt&lt/li&gt
    &ltli&gt&lta&gtBlog&lt/a&gt&lt/li&gt
    &ltli&gt&lta&gtAbout&lt/a&gt&lt/li&gt
  &lt/ul&gt
&lt/div&gt</code>
      </pre>
    </div>
    <br>
    <div class="nav h-equal-list max-width-tablet">
      <div class="fullWidth">
        <ul class="h-list">
          <li><a>Home</a></li>
          <li><a>Blog</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
      <div class="fullWidth">
        <ul class="h-list--end">
          <li><a>Login</a></li>
          <li><a>Info</a></li>
          <li><a>Cart</a></li>
        </ul>
      </div>
    </div>
    <div>
    <pre v-highlightjs>
    <code class="html">&ltdiv class="nav h-equal-list"&gt
    &ltdiv class="fullWidth"&gt
      &ltul class="h-list"&gt
        &ltli&gt&lta&gtHome&lt/a&gt&lt/li&gt
        &ltli&gt&lta&gtBlog&lt/a&gt&lt/li&gt
        &ltli&gt&lta&gtAbout&lt/a&gt&lt/li&gt
      &lt/ul&gt
    &lt/div&gt
    &ltdiv class="fullWidth"&gt
      &ltul class="h-list--end"&gt
        &ltli&gt&lta&gtLogin&lt/a&gt&lt/li&gt
        &ltli&gt&lta&gtInfo&lt/a&gt&lt/li&gt
        &ltli&gt&lta&gtCart&lt/a&gt&lt/li&gt
      &lt/ul&gt
    &lt/div&gt
  &lt/div&gt</code>
      </pre>
      </div>
    <h2>Components</h2>
    <h3 id="modals">Modals</h3>
    <p>Modals uses <a href="https://github.com/vouill/vue-geb"><strong>vue-geb</strong></a>. Hence no binding between modal and parent component.</p>
    <p>This means you can call any modals from anywhere</p>
    <button class="v-bttn" v-geb-click-emit="{id:'foo'}">Click here for modal foo</button>
    <button class="v-bttn v-bttn--success" v-geb-click-emit="{id:'bar'}">Click here for modal bar</button>
    <modal modalId="foo"></modal>
    <modal modalId="bar">
      <h1 slot="header">Header</h1>
      <p slot="content">Content </p>
    </modal>
    <div>
    <pre v-highlightjs><code class="html">    &ltbutton class="v-bttn" v-geb-click-emit="{id:'foo'}"&gtClick here for modal foo&lt/button&gt
    &ltbutton class="v-bttn v-bttn--success" v-geb-click-emit="{id:'bar'}"&gtClick here for modal bar&lt/button&gt
    &ltmodal modalId="foo"&gt&lt/modal&gt
    &ltmodal modalId="bar"&gt
      &lth1 slot="header"&gtHeader&lt/h1&gt
      &ltp slot="content"&gtContent &lt/p&gt
    &lt/modal&gt</code></pre>
      </div>
    <h3>Tooltip</h3>
    <p>It kinda <vouilltip content="I am sorry :(">works</vouilltip></p>
    <pre v-highlightjs><code class="html">&ltp&gtIt kinda &ltvouilltip content="I am sorry :("&gtworks&lt/vouilltip&gt&lt/p&gt</code></pre>

  </div>
</template>
<style>
  .hljs {
    display: inline-block;
  }
</style>
<script>
  export default{
    name: 'mainview',
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
