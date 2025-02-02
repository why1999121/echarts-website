window.__EC_DOC_api = {
  "echarts": {
    "desc": "<p>全局 echarts 对象，在 script 标签引入 <code class=\"codespan\">echarts.js</code> 文件后获得，或者在 AMD 环境中通过 <code class=\"codespan\">require(&#39;echarts&#39;)</code> 获得。</p>\n"
  },
  "echartsInstance": {
    "desc": "<p>通过 <a href=\"#echarts.init\">echarts.init</a> 创建的实例。</p>\n"
  },
  "action": {
    "desc": "<p>ECharts 中支持的图表行为，通过 <a href=\"#echartsInstance.dispatchAction\">dispatchAction</a> 触发。</p>\n<p><strong>注：</strong> 代码中的 <code class=\"codespan\">?:</code> 表示该属性是可选的。<em>EVENT:</em> 是 action 对应触发的事件。</p>\n"
  },
  "events": {
    "desc": "<p>在 ECharts 中主要通过 <a href=\"#echartsInstance.on\">on</a> 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。</p>\n<p>ECharts 中的事件分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 <a href=\"#echartsInstance.dispatchAction\">dispatchAction</a> 后触发的事件。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-ts\">myChart.on(&#39;click&#39;, function (params) {\n    console.log(params);\n});\n\nmyChart.on(&#39;legendselectchanged&#39;, function (params) {\n    console.log(params);\n});\n\nchart.on(&#39;click&#39;, &#39;series.line&#39;, function (params) {\n    console.log(params);\n});\n\nchart.on(&#39;mouseover&#39;, {seriesIndex: 1, name: &#39;xx&#39;}, function (params) {\n    console.log(params);\n});\n</code></pre>\n<p>详细的事件注册方式参见 <a href=\"#echartsInstance.on\">on</a>。</p>\n"
  }
}