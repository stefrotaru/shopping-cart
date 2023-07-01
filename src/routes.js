import ReviewRoute from "./components/review-route-component/ReviewRoute";
import FinishRoute from "./components/finish-route-component/FinishRoute";
import SecureCheckoutRoute from "./components/secure-checkout-route/SecureCheckoutRoute";

export const routes = [
    {
      path: "/",
      redirect: { name: "SecureCheckout"}
    },
    { 
      path: "/shopping-cart/", 
      name: "SecureCheckout",
      component: SecureCheckoutRoute 
    },
    { 
      path: "/shopping-cart/review",
      name: "Review", 
      component: ReviewRoute
    },
    { 
      path: "/shopping-cart/finish",
      name: "Finish", 
      component: FinishRoute 
    }
  ];