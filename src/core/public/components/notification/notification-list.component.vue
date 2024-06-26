<script setup>

import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";
import TheFooter from "@/core/public/components/the-footer.component.vue";
import {onMounted, ref} from "vue";
import {NotificationApiService} from "@/core/public/services/notification-api.service.js";

const notifications = ref([]);
const user = "Charlie";

onMounted(async () => {
  const response = await NotificationApiService.getNotificationById(user);
  notifications.value = response.data;
  console.log(notifications.value);
})

</script>

<template>
  <RetraceToolbar/>
  <div class="container">
    <div class="title">
      <h1> Notificaciones </h1>
    </div>
    <ul class="notification-list" role="list">
      <li v-for="notification in notifications" :key="notification.id" class="card-container">
        <div class="card">
          <div class="card-content">
            <h3>{{ notification.title }} - {{ notification.user_sender }}</h3>
            <p>{{ notification.message }}</p>
            <div class="meta">
              <span>{{ notification.date }} {{ notification.time }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <TheFooter />
</template>

<style scoped>
.title{
  margin: 20px;
  text-align: center;
  color: #FFA500;
  border-top: 2px solid;
  border-bottom: 2px solid;
}
.title h1{
  padding: 10px;
}

.notification-list {
  list-style-type: none;
  padding: 0;
}

.card-container {
  margin-bottom: 10px;
}

.card-content p{
  font-size: 20px;
  margin: 10px;
}

.card {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  margin: 0 0 5px;
}

.card-content .meta {
  margin-top: auto;
  text-align: right;
}
</style>