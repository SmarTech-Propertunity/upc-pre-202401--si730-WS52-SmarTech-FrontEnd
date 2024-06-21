import { createRouter, createWebHistory } from 'vue-router'
import MainLoginComponent from "@/core/domain/components/user-management/main-login.component.vue";
import RegisterUserComponent from "@/core/domain/components/user-management/register-user.component.vue";
import RecoveryPasswordComponent from "@/core/domain/components/user-management/recovery-password.component.vue";
import HomeComponent from "@/core/public/components/home/the-home.component.vue";
import SearchComponent from "@/core/public/components/search-properties/properties-list.component.vue";
import CreditCalculatorComponent from "@/core/domain/components/finance-tool/credit-calculator.component.vue";
import PostOverview from "@/core/domain/components/property-post/post-overview.component.vue";
import NotFoundComponent from "@/core/public/pages/not-found.component.vue";
import CreateProperty from "@/core/domain/components/property-form/create-property.vue";

const routes = [
    { path: '/', component: MainLoginComponent },
    { path: '/recovery', component: RecoveryPasswordComponent },
    { path: '/register', component: RegisterUserComponent },
    { path: '/home', component: HomeComponent },
    { path: '/search', component: SearchComponent},
    {
        path: '/search/:propertyDistrict/:propertyType/:maxvalue/:minvalue',
        name: 'SearchComponent',
        component: SearchComponent,
        props: true // Habilita la recepción de props desde la URL
    },
    {path: '/create-property', component: CreateProperty},
    { path: '/calculator', component: CreditCalculatorComponent },
    { path: '/property/:id', component: PostOverview, props: true},
    { path: '/:pathMatch(.*)', redirect: '/404' },
    { path: '/404', name: '404', component: NotFoundComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
