import { createRouter, createWebHistory } from 'vue-router'
import MainLoginComponent from "@/core/domain/components/user-management/main-login.component.vue";
import RegisterUserComponent from "@/core/domain/components/user-management/register-user.component.vue";
import RecoveryPasswordComponent from "@/core/domain/components/user-management/recovery-password.component.vue";
import HomeComponent from "@/core/public/components/home/the-home.component.vue";
import SearchComponent from "@/core/public/components/search-properties/properties-list.component.vue";
import CreditCalculatorComponent from "@/core/domain/components/finance-tool/credit-calculator.component.vue";



const routes = [
    { path: '/', component: MainLoginComponent },
    { path: '/recovery', component: RecoveryPasswordComponent },
    { path: '/register', component: RegisterUserComponent },
    { path: '/home', component: HomeComponent },
    {path: '/search', component: SearchComponent},
    { path: '/calculator', component: CreditCalculatorComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
