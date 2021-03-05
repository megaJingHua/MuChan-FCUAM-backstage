import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import FooterManager from '@/pages/FooterManager';
import MenuManager from '@/pages/MenuManager';
import RecruitManager from '@/pages/RecruitManager';
import ArticleManager from '@/pages/ArticleManager';
import AboutManager from '@/pages/AboutManager';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home }, // 首頁
    { path: '/menu-manager', name: 'MenuManager', component: MenuManager }, //menu
    { path: '/footer-manager', name: 'FooterManager', component: FooterManager }, //頁底
    { path: '/recruit-manager', name: 'RecruitManager', component: RecruitManager }, //招生管理
    { path: '/article-manager', name: 'ArticleManager', component: ArticleManager }, //文章管理
    { path: '/about-manager', name: 'AboutManager', component: AboutManager }, //關於本系管理
  ],
})