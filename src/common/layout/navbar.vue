<template>
  <Panel title="导航栏" :cname="$style.panel">
    <ul :class="$style.content">
      <li v-for="item of enters" :key="item.id">
        <router-link :to="{name: item.name}">
          <img :src="item.icon" :alt="item.name">
          <h4>{{item.name}}</h4>
        </router-link>
      </li>
    </ul>
  </Panel> 
</template>

<script>
import Panel from '../components/panel.vue';

export default {
  name: 'LayoutNavbar',
  components: {
    Panel
  },
  data () {
    return {
      enters: [
        {
          id: '1',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60',
          name: '首页'
        },
        {
          id: '2',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60',
          name: '赚钱'
        },
        {
          id: '3',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60',
          name: '借钱'
        },
        {
          id: '4',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56',
          name: '省钱'
        },
        {
          id: '5',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60',
          name: '金融会员'
        },
      ]
    }
  }
}
</script>

<style lang="scss" module>
  @import "../../assets/styles/element.scss";

  .panel {
    @include panel;
    margin: 0 !important;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    > h4 {
      display: none;
    }

    .content {
      @include list(row);
      padding: 8px 0;
      
      > li {
        width: 20%;
        text-align: center;

        a {
          text-decoration: none;
        }

        img {
          height: 40px;
          width: 40px;
          margin-bottom: 5px;
        }

        h4 {
          font-size: 20px;
          color: #B1B4BB;
        }
      }
    }
  }
</style>
