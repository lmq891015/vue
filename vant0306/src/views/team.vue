<template>
  <div>
    <!-- <van-overlay show="show"/> -->
    <!-- <van-loading v-if="loading" size="34px" color="#333" vertical text-size='20px'>权限验证中...</van-loading> -->
    <span @click="loadList()">111</span>
    {{openId}}
    <div v-if='show'>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadList"
      >
        <div v-for="(item,index) in lists" :key="index" :title="item.stationName">
          <span class="date">{{nowDate}}</span>
        </div>
      </van-list>
      <van-collapse v-model="activityName" accordion>
        <van-collapse-item :title="item.stationName" :name="item.openStationId" v-for="(item, index) in lists" :key="index">
            <span class="date" @click="loadList()">{{item.stationName}} - {{nowDate}}</span>
        </van-collapse-item>
      </van-collapse> 
    </div>
  </div>
</template>

<script>
import {teamData} from '@/common/api';
import {getNowDate,getToken} from '@/common/tools';
import {mapGetters,mapActions } from 'vuex'

export default {
  data() {
    return {
      show:false,
      loading:false,
      finished:false,
      lists:[],
      nowDate:getNowDate(),
      activityName:['1'],
      info:{
        openId:this.$route.query.openId,
        pageIndex:1,
        pageSize:3,
      }
    }
  },
  computed:{
    ...mapGetters([
      'openId',
    ])
  },
  mounted: function() {
  // console.log(openId);
    // console.log(this.$route.query.openId);
    // this.loadList();//读取数据列表
  },
  methods:{

    loadList() {
      teamData(this.info).then(res => {
      if (res.status == 200 && res.data.length>0) {
        const list = res.data;
        
        this.show = true;
        this.loading = false;
        let stationArr = [];//存储去重后stationId的数组
        let dealArr = []; //组装的数组
        for (let i = 0; i < list.length; i++) {
          if (stationArr.indexOf(list[i].stationName) === -1) {
            dealArr.push({
              openStationId: list[i].openStationId,
              stationName: list[i].stationName,
              children: [list[i]]
            });
            stationArr.push(list[i].stationName);
          } else {
            for (let j = 0; j < dealArr.length; j++) {
              if (dealArr[j].stationName == list[i].stationName) {
                dealArr[j].children.push(list[i]);
                break;
              }
            }
          }
        }
        this.lists = dealArr;
        console.log(this.lists);
        // 如果总页数大于当前页码，页码+1
        
      }else{
        
      }
    });
    }
  }
}
</script>

<style scoped>
.van-loading{z-index: 2;margin-top: 20%;}
.van-loading__text{color:#333;}
.date{color:#222;}
</style>