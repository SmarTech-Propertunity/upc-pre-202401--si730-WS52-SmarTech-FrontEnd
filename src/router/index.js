import { createRouter, createWebHistory } from 'vue-router'
import MainLoginComponent from "@/core/domain/components/user-management/main-login.component.vue";
import RegisterUserComponent from "@/core/domain/components/user-management/register-user.component.vue";
import RecoveryPasswordComponent from "@/core/domain/components/user-management/recovery-password.component.vue";
import HomeComponent from "@/core/public/components/components/home.component.vue";
import NotFoundComponent from "@/core/public/pages/not-found.component.vue";
import PropertyInformationComponent from "@/core/domain/components/properties/components/property-information.component.vue";
import ListProperty from '../core/domain/components/properties/components/list-property.component.vue';

const routes = [
    { path: '/', component: MainLoginComponent },
    { path: '/recovery', component: RecoveryPasswordComponent },
    { path: '/register', component: RegisterUserComponent },
    { path: '/home', component: HomeComponent },
    { path: '/property/:id', component: PropertyInformationComponent, props: true },
    { path: '/properties', component: ListProperty },
    { path: '/:pathMatch(.*)', redirect: '/404' },
    { path: '/404', name: '404', component: NotFoundComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
