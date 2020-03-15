import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
{"authorization":"84788ce0-5399-49a7-b34e-00112b44af96","name":"超级管理员","id":"8955c2fe334b11e9b0e87cd30ae45976","topOrgId":"3091977294316544","permission":["cloud:sys:view","cloud:sys:orm:view","cloud:sys:orm:add","cloud:sys:orm:update","cloud:sys:orm:delete","cloud:sys:role:view","cloud:sys:role:add","cloud:sys:role:set","cloud:sys:role:update","cloud:sys:role:delete","cloud:sys:user:view","cloud:sys:user:add","cloud:sys:user:update","cloud:sys:user:resetpwd","cloud:sys:user:freeze","cloud:sys:user:thawing","cloud:sys:user:logoff","cloud:sys:user:delete","cloud:sys:wechat:view","cloud:sys:wechat:add","cloud:sys:wechat:binding","cloud:sys:wechat:delete","cloud:sys:wechat:menu","cloud:sys:oil:view","cloud:sys:oil:add","cloud:sys:oil:update","cloud:sys:oil:price","cloud:sys:oil:inactive","cloud:sys:oil:active","cloud:sys:config:view","cloud:sys:config:editShow","cloud:sys:log:view","cloud:sys:invoice:view","cloud:sys:invoiceItem:view","cloud:sys:invoiceItem:add","cloud:sys:invoiceItem:target","cloud:sys:invoiceItem:edit","cloud:sys:invoiceItem:delete","cloud:set:view","cloud:set:fixed:view","cloud:set:fixed:add","cloud:set:fixed:update","cloud:set:fixed:delete","cloud:set:fixed:privilege","cloud:set:grow:view","cloud:set:grow:add","cloud:set:grow:update","cloud:set:grow:delete","cloud:set:grow:set","cloud:set:grow:privilege","cloud:mem:view","cloud:mem:personal:view","cloud:mem:personal:freeze","cloud:mem:personal:thawing","cloud:mem:personal:logoff","cloud:mem:personal:return","cloud:mem:personal:grade","cloud:mem:personal:under","cloud:mem:personal:recharge","cloud:mem:personal:editBtn","cloud:mem:personal:billing","cloud:mem:teammanager:view","cloud:mem:teammanager:addteam","cloud:mem:teammanager:updateteam","cloud:mem:teammanager:resetpwd","cloud:mem:teammanager:freeze","cloud:mem:teammanager:thawing","cloud:mem:teammanager:logoff","cloud:mem:teammanager:addson","cloud:mem:teammanager:return","cloud:mem:teammanager:under","cloud:mem:teammanager:recharge","cloud:mem:teammanager:oilExportBox","cloud:mem:teammanager:billing","cloud:mem:teammem:view","cloud:mem:teammem:update","cloud:mem:teammem:freeze","cloud:mem:teammem:thawing","cloud:mem:teammem:logoff","cloud:mem:teammem:recharge","cloud:mem:teammem:billing","cloud:mem:lock:view","cloud:certificate:view","cloud:certificate:money:view","cloud:certificate:money:add","cloud:certificate:money:delete","cloud:certificate:convert:view","cloud:certificate:convert:add","cloud:certificate:convert:delete","cloud:certificate:raffle:view","cloud:certificate:raffle:add","cloud:certificate:raffle:delete","cloud:certificate:grant:view","cloud:certificate:transcertificate:view","cloud:certificate:grantcertificate:view","cloud:activity:view","cloud:activity:certificate:view","cloud:activity:certificate:add","cloud:activity:certificate:delete","cloud:activity:certificate:stop","cloud:activity:recharge:view","cloud:activity:recharge:add","cloud:activity:recharge:delete","cloud:activity:recharge:stop","cloud:activity:free:view","cloud:activity:free:add","cloud:activity:free:delete","cloud:activity:free:stop","cloud:activity:discount:view","cloud:activity:discount:add","cloud:activity:discount:delete","cloud:activity:discount:stop","cloud:activity:gift:view","cloud:activity:gift:add","cloud:activity:gift:delete","cloud:activity:gift:stop","cloud:activity:all:view","cloud:activity:all:delete","cloud:activity:all:stop","cloud:point:view","cloud:point:list:view","cloud:point:list:add","cloud:point:list:update","cloud:point:list:shelves","cloud:point:list:ban","cloud:point:list:delete","cloud:point:convert:view","cloud:data:view","cloud:data:oil:view","cloud:data:recharge:view","cloud:data:recharge:cancel","cloud:data:return:view","cloud:data:teamreport:view","cloud:data:teamtrans:view","cloud:data:member:view","cloud:data:cardissuing:view","cloud:data:siteFunds:view","cloud:data:siteFunds:rate:view","cloud:data:siteReceivables:view","cloud:data:sitePayable:view","cloud:data:wechat:view","cloud:data:reportRecord:view","cloud:data:balanceSheet:view","cloud:data:messageSendRecord:view","cloud:data:billing:view","cloud:data:invoice:view","cloud:analysis:view","cloud:analysis:oilSales:view","cloud:analysis:memberConsumption:view","cloud:analysis:marketingCost:view","cloud:analysis:memberBehavior:view","cloud:dataseven:view","cloud:dataseven:oil:view","cloud:dataseven:recharge:view","cloud:dataseven:return:view","cloud:dataseven:teamreport:view","cloud:memberList:view","cloud:memberList:personal:view","cloud:memberList:teammanager:view","cloud:memberList:teammem:view","cloud:sale:view","cloud:sale:list:view","cloud:sale:daily:view","cloud:help:view","cloud:help:set:view","cloud:help:set:add","cloud:help:set:update","cloud:help:set:delete"],"flag":false}
{"menu":
    {
        "minLeftMenuWidth":35,
        "maxLeftMenuWidth":180,
        "sidebar":
        {"opened":true,"width":180},
        "isCollapse":false,
        "isFooter":false},
    "user":{"userInfo":{"authorization":"9743eda2-abb6-4b02-affd-eae2f891626a","name":"超级管理员","id":"8955c2fe334b11e9b0e87cd30ae45976","topOrgId":"3091977294316544","permission":["cloud:sys:view","cloud:sys:orm:view","cloud:sys:orm:add","cloud:sys:orm:update","cloud:sys:orm:delete","cloud:sys:role:view","cloud:sys:role:add","cloud:sys:role:set","cloud:sys:role:update","cloud:sys:role:delete","cloud:sys:user:view","cloud:sys:user:add","cloud:sys:user:update","cloud:sys:user:resetpwd","cloud:sys:user:freeze","cloud:sys:user:thawing","cloud:sys:user:logoff","cloud:sys:user:delete","cloud:sys:wechat:view","cloud:sys:wechat:add","cloud:sys:wechat:binding","cloud:sys:wechat:delete","cloud:sys:wechat:menu","cloud:sys:oil:view","cloud:sys:oil:add","cloud:sys:oil:update","cloud:sys:oil:price","cloud:sys:oil:inactive","cloud:sys:oil:active","cloud:sys:config:view","cloud:sys:config:editShow","cloud:sys:log:view","cloud:sys:invoice:view","cloud:sys:invoiceItem:view","cloud:sys:invoiceItem:add","cloud:sys:invoiceItem:target","cloud:sys:invoiceItem:edit","cloud:sys:invoiceItem:delete","cloud:set:view","cloud:set:fixed:view","cloud:set:fixed:add","cloud:set:fixed:update","cloud:set:fixed:delete","cloud:set:fixed:privilege","cloud:set:grow:view","cloud:set:grow:add","cloud:set:grow:update","cloud:set:grow:delete","cloud:set:grow:set","cloud:set:grow:privilege","cloud:mem:view","cloud:mem:personal:view","cloud:mem:personal:freeze","cloud:mem:personal:thawing","cloud:mem:personal:logoff","cloud:mem:personal:return","cloud:mem:personal:grade","cloud:mem:personal:under","cloud:mem:personal:recharge","cloud:mem:personal:editBtn","cloud:mem:personal:billing","cloud:mem:teammanager:view","cloud:mem:teammanager:addteam","cloud:mem:teammanager:updateteam","cloud:mem:teammanager:resetpwd","cloud:mem:teammanager:freeze","cloud:mem:teammanager:thawing","cloud:mem:teammanager:logoff","cloud:mem:teammanager:addson","cloud:mem:teammanager:return","cloud:mem:teammanager:under","cloud:mem:teammanager:recharge","cloud:mem:teammanager:oilExportBox","cloud:mem:teammanager:billing","cloud:mem:teammem:view","cloud:mem:teammem:update","cloud:mem:teammem:freeze","cloud:mem:teammem:thawing","cloud:mem:teammem:logoff","cloud:mem:teammem:recharge","cloud:mem:teammem:billing","cloud:mem:lock:view","cloud:certificate:view","cloud:certificate:money:view","cloud:certificate:money:add","cloud:certificate:money:delete","cloud:certificate:convert:view","cloud:certificate:convert:add","cloud:certificate:convert:delete","cloud:certificate:raffle:view","cloud:certificate:raffle:add","cloud:certificate:raffle:delete","cloud:certificate:grant:view","cloud:certificate:transcertificate:view","cloud:certificate:grantcertificate:view","cloud:activity:view","cloud:activity:certificate:view","cloud:activity:certificate:add","cloud:activity:certificate:delete","cloud:activity:certificate:stop","cloud:activity:recharge:view","cloud:activity:recharge:add","cloud:activity:recharge:delete","cloud:activity:recharge:stop","cloud:activity:free:view","cloud:activity:free:add","cloud:activity:free:delete","cloud:activity:free:stop","cloud:activity:discount:view","cloud:activity:discount:add","cloud:activity:discount:delete","cloud:activity:discount:stop","cloud:activity:gift:view","cloud:activity:gift:add","cloud:activity:gift:delete","cloud:activity:gift:stop","cloud:activity:all:view","cloud:activity:all:delete","cloud:activity:all:stop","cloud:point:view","cloud:point:list:view","cloud:point:list:add","cloud:point:list:update","cloud:point:list:shelves","cloud:point:list:ban","cloud:point:list:delete","cloud:point:convert:view","cloud:data:view","cloud:data:oil:view","cloud:data:recharge:view","cloud:data:recharge:cancel","cloud:data:return:view","cloud:data:teamreport:view","cloud:data:teamtrans:view","cloud:data:member:view","cloud:data:cardissuing:view","cloud:data:siteFunds:view","cloud:data:siteFunds:rate:view","cloud:data:siteReceivables:view","cloud:data:sitePayable:view","cloud:data:wechat:view","cloud:data:reportRecord:view","cloud:data:balanceSheet:view","cloud:data:messageSendRecord:view","cloud:data:billing:view","cloud:data:invoice:view","cloud:analysis:view","cloud:analysis:oilSales:view","cloud:analysis:memberConsumption:view","cloud:analysis:marketingCost:view","cloud:analysis:memberBehavior:view","cloud:dataseven:view","cloud:dataseven:oil:view","cloud:dataseven:recharge:view","cloud:dataseven:return:view","cloud:dataseven:teamreport:view","cloud:memberList:view","cloud:memberList:personal:view","cloud:memberList:teammanager:view","cloud:memberList:teammem:view","cloud:sale:view","cloud:sale:list:view","cloud:sale:daily:view","cloud:help:view","cloud:help:set:view","cloud:help:set:add","cloud:help:set:update","cloud:help:set:delete"],"flag":false}},"userInfo":{"authorization":"","name":"","id":"","topOrgId":"","permission":"","menu":"","flag":""}}

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addShop',
			component: addShop,
			meta: ['添加数据', '添加商铺'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/userList',
			component: userList,
			meta: ['数据管理', '用户列表'],
		},{
			path: '/shopList',
			component: shopList,
			meta: ['数据管理', '商家列表'],
		},{
			path: '/foodList',
			component: foodList,
			meta: ['数据管理', '食品列表'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['数据管理', '订单列表'],
		},{
			path: '/adminList',
			component: adminList,
			meta: ['数据管理', '管理员列表'],
		},{
			path: '/visitor',
			component: visitor,
			meta: ['图表', '用户分布'],
		},{
			path: '/newMember',
			component: newMember,
			meta: ['图表', '用户数据'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		},{
			path: '/explain',
			component: explain,
			meta: ['说明', '说明'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
