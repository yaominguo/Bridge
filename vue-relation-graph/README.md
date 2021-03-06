# RelationGraph
关系图组件
A Vue component to draw a relation graph with d3.

## How to start
```bash
#First, install
npm install @omniview/vue-relation-graph --save
```
```javascript
//Then, import it in main.js
import RelationGraph from '@omniview/vue-relation-graph'

Vue.use(RelationGraph)
```
___
## 参数说明

> ## config

参数|说明|类型
-|-|-
isHighLight|是否开启鼠标hover高亮选中点、线，默认为true|Boolean
isScale|是否开启缩放和平移功能，默认为true|Boolean
scaleExtent|缩放的比例尺范围，默认为[0.2, 1.5]|Array
chargeStrength|万有引力，默认为-300|Number
collide|碰撞力的大小（影响节点间的距离），默认为100|Number
alphaDecay|控制力学模拟衰减率，默认为0.0228|Number
r|圈圈节点半径 [30-45]， 默认为45|Number
nodeColor|圈圈节点背景颜色，默认为'skyblue'|String
fontColor|圈圈内文字的颜色，默认为'#000'|String
linkSrc|划线时候的弧度，默认为30|Number
linkColor|关系线颜色，默认为'gray'|String
strokeColor|圈圈节点外围边框的颜色，默认为'gray'|String
strokeWidth|圈圈节点外围边框的宽度，默认为0|Number


> ## data

参数|说明|类型
-|-|-
data|关系图数据|Object
-|nodes：关系点数据|Array[Object]
-|links：关系线数据|Array[Object]

> ### nodes

参数|说明|类型
-|-|-
name|（必须）节点名称|String
id|（必须）节点唯一标识|[Number, String]
color|（可选）节点背景色，会覆盖config中的节点默认背景色|String
strokeColor|（可选）节点边框色，会覆盖config中的默认边框色|String

> ### links

参数|说明|类型
-|-|-
id|（必须）关系线唯一标识|[Number, String]
source|（必须）来源节点id|[Number, String]
target|（必须）连接节点id|[Number, String]
relation|（必须）关系线的名称|String
color|（可选）关系线颜色，会覆盖config中的关系线默认颜色|String

---
## Example

```html javascript
<template>
<relation-graph 
  :data="data" 
  :config="config" 
  style="background:#fff;width:100%; height:100vh"/>
</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
      data: {},
      config: {
        strokeColor: 'skyblue'
      },
    }
  },
  mounted() {
    const json = {
      "nodes": [{
        "id": 119828,
        "name": "上海上实物业管理有限公司",
        "cspAddress": "上海市浦东新区浦东南路360号8楼",
        "cspId": "120302184910583",
        "color": "#82DF12",
        "index": 0,
        "x": 477.55056997846737,
        "y": 258.0991179058284,
        "vy": 0.015468822208985674,
        "vx": -0.09482328126482943
      }, {
        "id": 2191,
        "name": "地杰国际城F街坊（欧香四季）",
        "sectAddress": "御桥路1978弄",
        "sectId": "120302190631416",
        "cspId": "120302184910583",
        "csmId": "1807131176932409",
        "color": "pink",
        "index": 1,
        "x": 827.9439862247012,
        "y": 653.7522566978123,
        "vy": 0.017203251786801845,
        "vx": -0.08619690081525651
      }, {
        "id": 2303,
        "name": "浦东新区浦东世纪花园二期小区",
        "sectAddress": "银霄路39弄",
        "sectId": "120302190335787",
        "cspId": "120302184910583",
        "csmId": "120302185430024",
        "color": "pink",
        "index": 2,
        "x": 203.0752240505647,
        "y": 47.32122257038382,
        "vy": 0.012977775082658611,
        "vx": -0.09761988808612744
      }, {
        "id": 3314,
        "name": "金桥瑞仕花园",
        "sectAddress": "枣庄路399弄",
        "sectId": "120302190622545",
        "cspId": "120302184910583",
        "csmId": "1706061138724669",
        "color": "pink",
        "index": 3,
        "x": 919.0861579502003,
        "y": -32.63016870608719,
        "vy": 0.01230290299089266,
        "vx": -0.0906524369006897
      }, {
        "id": 3523,
        "name": "家化滨江苑",
        "sectAddress": "浦明路1188弄",
        "sectId": "120302190619661",
        "cspId": "120302184910583",
        "csmId": "1708091145667207",
        "color": "pink",
        "index": 4,
        "x": 157.77147503485796,
        "y": 390.4097457158214,
        "vy": 0.01658688771341018,
        "vx": -0.09841039135618555
      }, {
        "id": 3889,
        "name": "广兰丽园三期（水岸新郡）",
        "sectAddress": "祖冲之路2201弄",
        "sectId": "1607011107810174",
        "cspId": "120302184910583",
        "csmId": "1905061183325316",
        "color": "pink",
        "index": 5,
        "x": 675.408205350506,
        "y": 284.31914206433936,
        "vy": 0.015201436493413748,
        "vx": -0.09024381750749001
      }, {
        "id": 3919,
        "name": "谐趣鑫庭",
        "sectAddress": "上丰路1483弄1-40号；宏雅路8、18、36、58、80号",
        "sectId": "1607011107810186",
        "cspId": "120302184910583",
        "csmId": "1607191109712112",
        "color": "pink",
        "index": 6,
        "x": 522.9912570230817,
        "y": -85.01255156575041,
        "vy": 0.012140823431825232,
        "vx": -0.09563352866075074
      }, {
        "id": 4527,
        "name": "张江南二编制单元B1-8地块项目",
        "sectAddress": "盛荣路188弄1-5号",
        "sectId": "1508211072661230",
        "cspId": "120302184910583",
        "csmId": "1806021175624149",
        "color": "pink",
        "index": 7,
        "x": 1071.5259681818584,
        "y": 336.8417250333232,
        "vy": 0.01379040172932755,
        "vx": -0.08541520191694248
      }, {
        "id": 4553,
        "name": "桥语别墅",
        "sectAddress": "唐安路199弄1号",
        "sectId": "120302190632761",
        "cspId": "120302184910583",
        "csmId": "1609271116614035",
        "color": "pink",
        "index": 8,
        "x": 553.7307232409793,
        "y": 442.81524506685486,
        "vy": 0.016475630803987725,
        "vx": -0.09183114597573705
      }, {
        "id": 4949,
        "name": "地杰国际城E街坊",
        "sectAddress": "御桥路2066弄",
        "sectId": "120302190631463",
        "cspId": "120302184910583",
        "csmId": "1807131176932409",
        "color": "pink",
        "index": 9,
        "x": 431.81572076725575,
        "y": 601.318610972062,
        "vy": 0.01765586606701204,
        "vx": -0.0907190506979843
      }, {
        "id": 5148,
        "name": "中国航海博物馆",
        "sectAddress": "申港大道197号",
        "sectId": "1805311175270742",
        "cspId": "120302184910583",
        "csmId": "1805311175270744",
        "color": "pink",
        "index": 10,
        "x": 644.8914951910173,
        "y": -243.39241045904376,
        "vy": 0.00958389946806233,
        "vx": -0.09654360926771219
      }, {
        "id": 5197,
        "name": "环球金融中心",
        "sectAddress": "上海市浦东新区世纪大道100号",
        "sectId": "1805311175264805",
        "cspId": "120302184910583",
        "csmId": "1805311175264810",
        "color": "pink",
        "index": 11,
        "x": 949.7218594771383,
        "y": 495.2828188824847,
        "vy": 0.015636065196823264,
        "vx": -0.08567094494686826
      }, {
        "id": 5434,
        "name": "张江南二编制单元B1-9地块",
        "sectAddress": "浦东新区盛荣路288弄",
        "sectId": "1806021175624147",
        "cspId": "120302184910583",
        "csmId": "1806021175624149",
        "color": "pink",
        "index": 12,
        "x": 995.1654592670088,
        "y": 152.11335706142492,
        "vy": 0.012937877561956943,
        "vx": -0.08636631426342771
      }, {
        "id": 5458,
        "name": "上海市浦东新区三林体育中心",
        "sectAddress": "上海市浦东新区齐河路201号",
        "sectId": "1805311175301523",
        "cspId": "120302184910583",
        "csmId": "1805311175301525",
        "color": "pink",
        "index": 13,
        "x": 324.912326359955,
        "y": -111.18783967152294,
        "vy": 0.011869007305472043,
        "vx": -0.09775385096064017
      }, {
        "id": 119743,
        "name": "顾忠华",
        "phone": "13761084612",
        "csId": "1807131176932409",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 14,
        "x": 629.8754055337664,
        "y": 627.6690677386077,
        "vy": 0.015991671430421007,
        "vx": -0.0883891354628461
      }, {
        "id": 118977,
        "name": "李婷婷",
        "phone": "13641626091",
        "csId": "120302185430024",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 15,
        "x": 279.5140254385836,
        "y": 231.8946235686577,
        "vy": 0.015531548709303952,
        "vx": -0.09750722181663286
      }, {
        "id": 119737,
        "name": "王健军",
        "phone": "13818060472",
        "csId": "1706061138724669",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 16,
        "x": 797.2404045271334,
        "y": 125.92288751769426,
        "vy": 0.012860239609528442,
        "vx": -0.09032431957008168
      }, {
        "id": 119736,
        "name": "康检辉",
        "phone": "15002109448",
        "csId": "1708091145667207",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 17,
        "x": 355.80332485200705,
        "y": 416.5572948119201,
        "vy": 0.017158228064442914,
        "vx": -0.0957443021328764
      }, {
        "id": 118613,
        "name": "方军",
        "phone": "13917673000",
        "csId": "1607191109712112",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 18,
        "x": 599.2752268657393,
        "y": 99.66883752039296,
        "vy": 0.013466373771190195,
        "vx": -0.09377294936457928
      }, {
        "id": 119337,
        "name": "丁维金",
        "phone": "15921867750",
        "csId": "1806021175624149",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 19,
        "x": 1193.1940530232691,
        "y": 178.20591204480817,
        "vy": 0.014190380569656623,
        "vx": -0.08359320003914546
      }, {
        "id": 119465,
        "name": "叶丽英",
        "phone": "15301895050",
        "csId": "1609271116614035",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 20,
        "x": 751.5964969385469,
        "y": 469.05778121108244,
        "vy": 0.015950775153532167,
        "vx": -0.08732774840489065
      }, {
        "id": 118644,
        "name": "俞彬",
        "phone": "13917775142",
        "csId": "1805311175270744",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 21,
        "x": 721.0724539538485,
        "y": -58.75798539996169,
        "vy": 0.01142861234508079,
        "vx": -0.0935050071815398
      }, {
        "id": 118693,
        "name": "陈江",
        "phone": "13818867858",
        "csId": "1805311175264810",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 22,
        "x": 873.3847715232649,
        "y": 310.6003453085982,
        "vy": 0.014291556709615679,
        "vx": -0.08690507955543568
      }, {
        "id": 119557,
        "name": "杨爱芳",
        "phone": "13916463385",
        "csId": "1805311175301525",
        "cspId": "120302184910583",
        "color": "gold",
        "index": 23,
        "x": 401.2518989133498,
        "y": 73.47511161414829,
        "vy": 0.013447469674636874,
        "vx": -0.09656100674935258
      }],
      "links": [{
        "id": "382328211169456128",
        "source": 119828,
        "target": 2191,
        "relation": "项目"
      }, {
        "id": "382328211626635327",
        "source": 119828,
        "target": 2303,
        "relation": "项目"
      }, {
        "id": "382328212079620211",
        "source": 119828,
        "target": 3314,
        "relation": "项目"
      }, {
        "id": "382328212499050555",
        "source": 119828,
        "target": 3523,
        "relation": "项目"
      }, {
        "id": "382328212914286596",
        "source": 119828,
        "target": 3889,
        "relation": "项目"
      }, {
        "id": "382328213295968256",
        "source": 119828,
        "target": 3919,
        "relation": "项目"
      }, {
        "id": "382328213681844224",
        "source": 119828,
        "target": 4527,
        "relation": "项目"
      }, {
        "id": "382328214076108800",
        "source": 119828,
        "target": 4553,
        "relation": "项目"
      }, {
        "id": "382328214487150687",
        "source": 119828,
        "target": 4949,
        "relation": "项目"
      }, {
        "id": "382328214893998113",
        "source": 119828,
        "target": 5148,
        "relation": "项目"
      }, {
        "id": "382328215363760128",
        "source": 119828,
        "target": 5197,
        "relation": "项目"
      }, {
        "id": "382328215774801920",
        "source": 119828,
        "target": 5434,
        "relation": "项目"
      }, {
        "id": "382328216177455104",
        "source": 119828,
        "target": 5458,
        "relation": "项目"
      }, {
        "id": "382328211169456129",
        "source": 119743,
        "target": 2191,
        "relation": "管理"
      }, {
        "id": "382328211626635328",
        "source": 118977,
        "target": 2303,
        "relation": "管理"
      }, {
        "id": "382328212079620212",
        "source": 119737,
        "target": 3314,
        "relation": "管理"
      }, {
        "id": "382328212499050556",
        "source": 119736,
        "target": 3523,
        "relation": "管理"
      }, {
        "id": "382328213295968257",
        "source": 118613,
        "target": 3919,
        "relation": "管理"
      }, {
        "id": "382328213681844225",
        "source": 119337,
        "target": 4527,
        "relation": "管理"
      }, {
        "id": "382328214076108801",
        "source": 119465,
        "target": 4553,
        "relation": "管理"
      }, {
        "id": "382328214487150688",
        "source": 119743,
        "target": 4949,
        "relation": "管理"
      }, {
        "id": "382328214893998114",
        "source": 118644,
        "target": 5148,
        "relation": "管理"
      }, {
        "id": "382328215363760129",
        "source": 118693,
        "target": 5197,
        "relation": "管理"
      }, {
        "id": "382328215774801921",
        "source": 119337,
        "target": 5434,
        "relation": "管理"
      }, {
        "id": "382328216177455105",
        "source": 119557,
        "target": 5458,
        "relation": "管理"
      }, {
        "id": "382328216567525376",
        "source": 118613,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525377",
        "source": 118644,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525378",
        "source": 118693,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525379",
        "source": 118977,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525380",
        "source": 119337,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525381",
        "source": 119465,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525382",
        "source": 119557,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525383",
        "source": 119736,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525384",
        "source": 119737,
        "target": 119828,
        "relation": "属于"
      }, {
        "id": "382328216567525385",
        "source": 119743,
        "target": 119828,
        "relation": "属于"
      }]
    }
    this.$nextTick(() => {
      this.data = json
    })
  },
}
</script>

```