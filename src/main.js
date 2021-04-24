import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import Navigation from './components/UI/Navigation.vue'
import SideBar from './components/UI/SideBar.vue'
import ContentBody from './components/UI/ContentBody.vue'
import UpdateStatus from './components/UI/UpdateStatus.vue'



const app = createApp(App);


app.component('base-card', BaseCard);
app.component('navigation', Navigation);
app.component('side-bar', SideBar);
app.component('content-body', ContentBody);
app.component('update-status', UpdateStatus);

app.mount('#app');