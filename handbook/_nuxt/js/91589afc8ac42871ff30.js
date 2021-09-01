(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{393:function(n,e,t){"use strict";t.r(e),e.default="# ECharts 中的样式简介\n\n本文主要是大略概述，用哪些方法，可以在 Apache ECharts<sup>TM</sup> 中设置样式，改变图形元素或者文字的颜色、明暗、大小等。\n\n> 为了让表述更通俗易懂，我们在这里用了“样式”这种可能不很符合数据可视化思维的词\n\n本文介绍这几种方式，他们的功能范畴可能会有交叉（即同一种细节的效果可能可以用不同的方式实现），但是他们各有各的场景偏好。\n\n- 颜色主题（Theme）\n- 调色盘\n- 直接样式设置（itemStyle、lineStyle、areaStyle、label、...）\n- 视觉映射（visualMap）\n\n## 颜色主题（Theme）\n\n最简单的更改全局样式的方式，是直接采用颜色主题（theme）。例如，在 [示例集合](${websitePath}/examples) 中，可以通过切换深色模式，直接看到采用主题的效果。\n\nECharts5 除了一贯的默认主题外，还内置了`'dark'`主题。可以如下切换成深色模式：\n\n```js\nvar chart = echarts.init(dom, 'dark');\n```\n\n其他的主题，没有内置在 ECharts 中，需要自己加载。这些主题可以在 [主题编辑器](https://echarts.apache.org/theme-builder.html) 里访问到。也可以使用这个主题编辑器，自己编辑主题。下载下来的主题可以这样使用：\n\n如果主题保存为 JSON 文件，那么可以自行加载和注册，例如：\n\n```js\n// 假设主题名称是 \"vintage\"\n$.getJSON('xxx/xxx/vintage.json', function(themeJSON) {\n  echarts.registerTheme('vintage', JSON.parse(themeJSON));\n  var chart = echarts.init(dom, 'vintage');\n});\n```\n\n如果保存为 UMD 格式的 JS 文件，那么支持了自注册，直接引入 JS 文件即可：\n\n```js\n// HTML 引入 vintage.js 文件后（假设主题名称是 \"vintage\"）\nvar chart = echarts.init(dom, 'vintage');\n// ...\n```\n\n## 调色盘\n\n调色盘，可以在 option 中设置。它给定了一组颜色，图形、系列会自动从其中选择颜色。\n可以设置全局的调色盘，也可以设置系列自己专属的调色盘。\n\n```js\noption = {\n  // 全局调色盘。\n  color: [\n    '#c23531',\n    '#2f4554',\n    '#61a0a8',\n    '#d48265',\n    '#91c7ae',\n    '#749f83',\n    '#ca8622',\n    '#bda29a',\n    '#6e7074',\n    '#546570',\n    '#c4ccd3'\n  ],\n\n  series: [\n    {\n      type: 'bar',\n      // 此系列自己的调色盘。\n      color: [\n        '#dd6b66',\n        '#759aa0',\n        '#e69d87',\n        '#8dc1a9',\n        '#ea7e53',\n        '#eedd78',\n        '#73a373',\n        '#73b9bc',\n        '#7289ab',\n        '#91ca8c',\n        '#f49f42'\n      ]\n      // ...\n    },\n    {\n      type: 'pie',\n      // 此系列自己的调色盘。\n      color: [\n        '#37A2DA',\n        '#32C5E9',\n        '#67E0E3',\n        '#9FE6B8',\n        '#FFDB5C',\n        '#ff9f7f',\n        '#fb7293',\n        '#E062AE',\n        '#E690D1',\n        '#e7bcf3',\n        '#9d96f5',\n        '#8378EA',\n        '#96BFFF'\n      ]\n      // ...\n    }\n  ]\n};\n```\n\n## 直接的样式设置 itemStyle, lineStyle, areaStyle, label, ...\n\n直接的样式设置是比较常用设置方式。纵观 ECharts 的 [option](${optionPath}) 中，很多地方可以设置 [itemStyle](${optionPath}series-bar.itemStyle)、[lineStyle](${optionPath}series-line.lineStyle)、[areaStyle](${optionPath}series-line.areaStyle)、[label](${optionPath}series-bar.label) 等等。这些的地方可以直接设置图形元素的颜色、线宽、点的大小、标签的文字、标签的样式等等。\n\n一般来说，ECharts 的各个系列和组件，都遵从这些命名习惯，虽然不同图表和组件中，`itemStyle`、`label` 等可能出现在不同的地方。\n\n在下面例子中我们给气泡图设置了阴影，渐变色等复杂的样式，你可以修改代码中的样式看修改后的效果：\n\n```js live\nvar data = [\n  [\n    [28604, 77, 17096869, 'Australia', 1990],\n    [31163, 77.4, 27662440, 'Canada', 1990],\n    [1516, 68, 1154605773, 'China', 1990],\n    [13670, 74.7, 10582082, 'Cuba', 1990],\n    [28599, 75, 4986705, 'Finland', 1990],\n    [29476, 77.1, 56943299, 'France', 1990],\n    [31476, 75.4, 78958237, 'Germany', 1990],\n    [28666, 78.1, 254830, 'Iceland', 1990],\n    [1777, 57.7, 870601776, 'India', 1990],\n    [29550, 79.1, 122249285, 'Japan', 1990],\n    [2076, 67.9, 20194354, 'North Korea', 1990],\n    [12087, 72, 42972254, 'South Korea', 1990],\n    [24021, 75.4, 3397534, 'New Zealand', 1990],\n    [43296, 76.8, 4240375, 'Norway', 1990],\n    [10088, 70.8, 38195258, 'Poland', 1990],\n    [19349, 69.6, 147568552, 'Russia', 1990],\n    [10670, 67.3, 53994605, 'Turkey', 1990],\n    [26424, 75.7, 57110117, 'United Kingdom', 1990],\n    [37062, 75.4, 252847810, 'United States', 1990]\n  ],\n  [\n    [44056, 81.8, 23968973, 'Australia', 2015],\n    [43294, 81.7, 35939927, 'Canada', 2015],\n    [13334, 76.9, 1376048943, 'China', 2015],\n    [21291, 78.5, 11389562, 'Cuba', 2015],\n    [38923, 80.8, 5503457, 'Finland', 2015],\n    [37599, 81.9, 64395345, 'France', 2015],\n    [44053, 81.1, 80688545, 'Germany', 2015],\n    [42182, 82.8, 329425, 'Iceland', 2015],\n    [5903, 66.8, 1311050527, 'India', 2015],\n    [36162, 83.5, 126573481, 'Japan', 2015],\n    [1390, 71.4, 25155317, 'North Korea', 2015],\n    [34644, 80.7, 50293439, 'South Korea', 2015],\n    [34186, 80.6, 4528526, 'New Zealand', 2015],\n    [64304, 81.6, 5210967, 'Norway', 2015],\n    [24787, 77.3, 38611794, 'Poland', 2015],\n    [23038, 73.13, 143456918, 'Russia', 2015],\n    [19360, 76.5, 78665830, 'Turkey', 2015],\n    [38225, 81.4, 64715810, 'United Kingdom', 2015],\n    [53354, 79.1, 321773631, 'United States', 2015]\n  ]\n];\n\noption = {\n  backgroundColor: {\n    type: 'radial',\n    x: 0.3,\n    y: 0.3,\n    r: 0.8,\n    colorStops: [\n      {\n        offset: 0,\n        color: '#f7f8fa'\n      },\n      {\n        offset: 1,\n        color: '#cdd0d5'\n      }\n    ]\n  },\n  grid: {\n    left: 10,\n    containLabel: true,\n    bottom: 10,\n    top: 10,\n    right: 30\n  },\n  xAxis: {\n    splitLine: {\n      show: false\n    }\n  },\n  yAxis: {\n    splitLine: {\n      show: false\n    },\n    scale: true\n  },\n  series: [\n    {\n      name: '1990',\n      data: data[0],\n      type: 'scatter',\n      symbolSize: function(data) {\n        return Math.sqrt(data[2]) / 5e2;\n      },\n      emphasis: {\n        focus: 'series',\n        label: {\n          show: true,\n          formatter: function(param) {\n            return param.data[3];\n          },\n          position: 'top'\n        }\n      },\n      itemStyle: {\n        shadowBlur: 10,\n        shadowColor: 'rgba(120, 36, 50, 0.5)',\n        shadowOffsetY: 5,\n        color: {\n          type: 'radial',\n          x: 0.4,\n          y: 0.3,\n          r: 1,\n          colorStops: [\n            {\n              offset: 0,\n              color: 'rgb(251, 118, 123)'\n            },\n            {\n              offset: 1,\n              color: 'rgb(204, 46, 72)'\n            }\n          ]\n        }\n      }\n    },\n    {\n      name: '2015',\n      data: data[1],\n      type: 'scatter',\n      symbolSize: function(data) {\n        return Math.sqrt(data[2]) / 5e2;\n      },\n      emphasis: {\n        focus: 'series',\n        label: {\n          show: true,\n          formatter: function(param) {\n            return param.data[3];\n          },\n          position: 'top'\n        }\n      },\n      itemStyle: {\n        shadowBlur: 10,\n        shadowColor: 'rgba(25, 100, 150, 0.5)',\n        shadowOffsetY: 5,\n        color: {\n          type: 'radial',\n          x: 0.4,\n          y: 0.3,\n          r: 1,\n          colorStops: [\n            {\n              offset: 0,\n              color: 'rgb(129, 227, 238)'\n            },\n            {\n              offset: 1,\n              color: 'rgb(25, 183, 207)'\n            }\n          ]\n        }\n      }\n    }\n  ]\n};\n```\n\n## 高亮的样式：emphasis\n\n在鼠标悬浮到图形元素上时，一般会出现高亮的样式。默认情况下，高亮的样式是根据普通样式自动生成的。但是高亮的样式也可以自己定义，主要是通过 [emphasis](${optionPath}series-bar.emphasis) 属性来定制。[emphsis](${optionPath}series-bar.emphasis) 中的结构，和普通样式的结构相同，例如：\n\n```js\noption = {\n  series: {\n    type: 'scatter',\n\n    // 普通样式。\n    itemStyle: {\n      // 点的颜色。\n      color: 'red'\n    },\n    label: {\n      show: true,\n      // 标签的文字。\n      formatter: 'This is a normal label.'\n    },\n\n    // 高亮样式。\n    emphasis: {\n      itemStyle: {\n        // 高亮时点的颜色。\n        color: 'blue'\n      },\n      label: {\n        show: true,\n        // 高亮时标签的文字。\n        formatter: 'This is a emphasis label.'\n      }\n    }\n  }\n};\n```\n\n注意：在 ECharts4 以前，高亮和普通样式的写法，是这样的：\n\n```js\noption = {\n  series: {\n    type: 'scatter',\n\n    itemStyle: {\n      // 普通样式。\n      normal: {\n        // 点的颜色。\n        color: 'red'\n      },\n      // 高亮样式。\n      emphasis: {\n        // 高亮时点的颜色。\n        color: 'blue'\n      }\n    },\n\n    label: {\n      // 普通样式。\n      normal: {\n        show: true,\n        // 标签的文字。\n        formatter: 'This is a normal label.'\n      },\n      // 高亮样式。\n      emphasis: {\n        show: true,\n        // 高亮时标签的文字。\n        formatter: 'This is a emphasis label.'\n      }\n    }\n  }\n};\n```\n\n这种写法 **仍然被兼容**，但是，不再推荐。事实上，多数情况下，使用者只会配置普通状态下的样式，而使用默认的高亮样式。所以在 ECharts4 中，支持不写 `normal` 的配置方法（即本文开头的那种写法），使得配置项更扁平简单。\n\n## 通过 visualMap 组件设定样式\n\n[visualMap 组件](${optionPath}visualMap) 能指定数据到颜色、图形尺寸的映射规则，详见 [数据的视觉映射](${lang}/concepts/visual-map)。\n"}}]);