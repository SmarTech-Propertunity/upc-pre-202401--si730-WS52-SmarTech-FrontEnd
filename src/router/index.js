import { createRouter, createWebHistory } from 'vue-router'
import MainLoginComponent from "@/core/domain/components/user-management/main-login.component.vue";
import RegisterUserComponent from "@/core/domain/components/user-management/register-user.component.vue";
import RecoveryPasswordComponent from "@/core/domain/components/user-management/recovery-password.component.vue";

const routes = [
    { path: '/', component: MainLoginComponent },
    { path: '/recovery', component: RecoveryPasswordComponent },
    { path: '/register', component: RegisterUserComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
