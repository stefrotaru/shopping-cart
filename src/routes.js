import ReviewRoute from "./components/review-route-component/ReviewRoute";
import FinishRoute from "./components/finish-route-component/FinishRoute";
import SecureCheckoutRoute from "./components/secure-checkout-route/SecureCheckoutRoute";

export const routes = [
    { path: '/', component: SecureCheckoutRoute },
    { path: '/review', component: ReviewRoute },
    { path: '/finish', component: FinishRoute }
]