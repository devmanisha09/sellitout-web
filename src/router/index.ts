import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { PsValueProvider } from '@/store/modules/core/PsValueProvider';
//const route = useRoute();
const routes: Array<RouteRecordRaw> = [
    // *** General ***
    {
      // path: "/:catchAll(.*)",
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () =>
        import(/* webpackChunkName: "Not Fount" */ "../views/general/NotFound.vue")
    },
    // *** Dashboard ***
    {
      path: "/",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "Not Fount" */ "../views/dashboard/Dashboard.vue"),
        //component: Dashboard
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our Buysell.'
          }
        ]
      }
    },
    // *** Users ***
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Login" */  /* webpackPrefetch: true */ "../views/user/Login.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The login page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/login/phone",
      name: "phone-login",
      component: () =>
        import(/* webpackChunkName: "PhoneLogin" */ /* webpackPrefetch: true */ "../views/user/PhoneLogin.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The phoneLogin page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "Profile" */ /* webpackPrefetch: true */ "../views/user/Profile.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The profile page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/other-profile/:userId",
      name: "other-profile",
      component: () =>
        import(/* webpackChunkName: "OtherProfile" */ /* webpackPrefetch: true */ "../views/user/OtherProfile.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The otherProfile page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: () =>
        import(/* webpackChunkName: "EditProfile" */ /* webpackPrefetch: true */ "../views/user/EditProfile.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The editProfile page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "Register" */ /* webpackPrefetch: true */ "../views/user/Register.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The register page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: () =>
        import(/* webpackChunkName: "ForgotPassword" */ /* webpackPrefetch: true */ "../views/user/ForgotPassword.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The forgotPassword page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/followers",
      name: "followers",
      component: () =>
        import(/* webpackChunkName: "FollowerList" */ /* webpackPrefetch: true */ "../views/user/FollowerList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The followers page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/following",
      name: "following",
      component: () =>
        import(/* webpackChunkName: "FollowingList" */ /* webpackPrefetch: true */ "../views/user/FollowingList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The following page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/blocked-users",
      name: "blocked-users",
      component: () =>
        import(/* webpackChunkName: "BlockedUserList" */ /* webpackPrefetch: true */ "../views/user/BlockedUserList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The blockUser page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/verify-code",
      name: "verify-code",
      component: () =>
        import(/* webpackChunkName: "VerifyCode" */ /* webpackPrefetch: true */ "../views/user/VerifyCode.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The verifyCode page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/verify-email",
      name: "verify-email",
      component: () =>
        import(/* webpackChunkName: "VerifyEmail" */ /* webpackPrefetch: true */ "../views/user/VerifyEmail.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The verifyEmail page of our Buysell.'
          }
        ]
      }
    },
    // *** Items ***
    {
      path: "/item-list/:manufacturerName",
      name: "item-list",
      component: () =>
        import(/* webpackChunkName: "ItemList" */ /* webpackPrefetch: true */ "../views/item/list/ItemList.vue"),   
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The item page of our Buysell.'
          }
        ]
      }     
    },
    {
      path: "/item-list",
      name: "item-list",
      component: () =>
        import(/* webpackChunkName: "Item" */ /* webpackPrefetch: true */ "../views/item/list/ItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The item page of our Buysell.'
          }
        ]
      }        
    },
    {
      path: "/item/itemName",
      name: "item",
      component: () =>
        import(/* webpackChunkName: "ItemDetail" */ /* webpackPrefetch: true */ "../views/item/detail/ItemDetail.vue"),
      meta: {
        reload: true,
        metaTags: [
          {
            name: 'description',
          }
        ]
      }
    },
    {
      path: "/item-entry",
      name: "item-entry",
      component: () =>
        import(/* webpackChunkName: "ItemEntry" */ /* webpackPrefetch: true */ "../views/item/entry/ItemEntry.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The itemEntry page of our Buysell.'
          }
        ]
      }       
    },
    {
      path: "/favourite",
      name: "favourite",
      component: () =>
        import(/* webpackChunkName: "FavouriteList" */ /* webpackPrefetch: true */ "../views/item/favourite/FavouriteList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The favourite page of our Buysell.'
          }
        ]
      } 
    },
    {
      path: "/reported-items",
      name: "reported-items",
      component: () =>
        import(/* webpackChunkName: "ReportedItemList" */ /* webpackPrefetch: true */ "../views/item/reported/ReportedItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The reportItem page of our Buysell.'
          }
        ]
      } 
    },
    {
      path: "/paid-items",
      name: "paid-items",
      component: () =>
        import(/* webpackChunkName: "PaidItemList" */ /* webpackPrefetch: true */ "../views/item/list/PaidItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The paidItem page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/active-items",
      name: "active-items",
      component: () =>
        import(/* webpackChunkName: "ActiveItemList" */ /* webpackPrefetch: true */ "../views/item/list/ActiveItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The activeItem page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/follower-items",
      name: "follower-items",
      component: () =>
        import(/* webpackChunkName: "FollowerItemList" */ /* webpackPrefetch: true */ "../views/item/list/FollowerItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The followerItem page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/pending-items",
      name: "pending-items",
      component: () =>
        import(/* webpackChunkName: "PendingItemList" */ /* webpackPrefetch: true */ "../views/item/list/PendingItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The pendingItem page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/reject-items",
      name: "reject-items",
      component: () =>
        import(/* webpackChunkName: "RejectItemList" */ /* webpackPrefetch: true */ "../views/item/list/RejectItemList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The rejectItem page of our Buysell.'
          }
        ]
      }
    },
    // *** UI ***
    {
      path: "/ui-collection",
      name: "ui-collection",
      component: () =>
        import(/* webpackChunkName: "UiCollection" */ /* webpackPrefetch: true */ "../views/general/UiCollection.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The ui-collection page of our Buysell.'
          }
        ]
      }
    },
    // *** Chat ***
    {
      path: "/chat",
      name: "chat",
      component: () =>
        import(/* webpackChunkName: "Chat" */ /* webpackPrefetch: true */ "../views/chat/Chat.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The chat page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/chat-list",
      name: "chat-list",
      component: () =>
        import(/* webpackChunkName: "ChatList" */ /* webpackPrefetch: true */ "../views/chat/list/ChatList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The chatlist page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/offer-list",
      name: "offer-list",
      component: () =>
        import(/* webpackChunkName: "OfferList" */ /* webpackPrefetch: true */ "../views/chat/list/OfferList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The offerList page of our Buysell.'
          }
        ]
      }
    },
    // *** Contact Us ***
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "Contact" */ /* webpackPrefetch: true */ "../views/contact/ContactUs.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The contactUs page of our Buysell.'
          }
        ]
      }
    },
    // *** About Us ***
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "About" */ /* webpackPrefetch: true */ "../views/about/About.vue"),
      meta: {
        title: 'About Page - Buysell App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our Buysell.'
          }
        ]
      },
    },
    // *** Privacy ***
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        import(/* webpackChunkName: "Privacy" */ /* webpackPrefetch: true */ "../views/privacy/Privacy.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The privacy page of our Buysell.'
          }
        ]
      }
    },
    // *** Safety ***
    {
      path: "/safety",
      name: "safety",
      component: () =>
        import(/* webpackChunkName: "Safety" */ /* webpackPrefetch: true */ "../views/safety/Safety.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The safety page of our Buysell.'
          }
        ]
      }
    },
    // *** Blog ***
    {
      path: "/blog",
      name: "blog-list",
      component: () =>
        import(/* webpackChunkName: "BlogList" */ /* webpackPrefetch: true */ "../views/blog/list/BlogList.vue"),    
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The blog page of our Buysell.'
          }
        ]
      }    
    },
    {
      path: "/category",
      name: "category-list",
      component: () =>
        import(/* webpackChunkName: "CategoryList" */ /* webpackPrefetch: true */ "../views/category/list/CategoryList.vue"),   
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The category page of our Buysell.'
          }
        ]
      }     
    },
    {
      path: "/category/:catId/:catName",
      name: "sub-category-list",
      component: () =>
        import(/* webpackChunkName: "SubCategoryList" */ /* webpackPrefetch: true */ "../views/subCategory/list/SubCategoryList.vue"),  
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The category page of our Buysell.'
          }
        ]
      }      
    },
    {
      path: "/blog/:blogId",
      name: "blog-detail",
      component: () =>
        import(/* webpackChunkName: "BlogDetail" */ /* webpackPrefetch: true */ "../views/blog/detail/BlogDetail.vue"), 
      meta: {
        metaTags: [
          {
            name: 'description',
          }
        ]
      }       
    },
    // *** Notification ***
    {
      path: "/notification/:notificationId",
      name: "notification",
      component: () =>
        import(/* webpackChunkName: "Notification" */ /* webpackPrefetch: true */ "../views/notification/Notification.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The notificationDetail page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/notification",
      name: "notification-list",
      component: () =>
        import(/* webpackChunkName: "NotificationList" */ /* webpackPrefetch: true */ "../views/notification/NotificationList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The notification page of our Buysell.'
          }
        ]
      }
    },

    // *** Credit Card Entry ***
    // {
    //     path: "/card-entry",
    //     name: "card-entry",
    //     component: () =>
    //         import(/* webpackChunkName: "Card Entry" */ "../views/card/CreditCardView.vue")
    // },
    // *** Review ***
    {
      path: "/review-list",
      name: "review-list",
      component: () =>
        import(/* webpackChunkName: "Review" */ /* webpackPrefetch: true */ "../views/review/ReviewList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The review page of our Buysell.'
          }
        ]
      }
    },
    {
      path: "/deal",
      name: "deal-list",
      component: () =>
        import(/* webpackChunkName: "DealList" */ /* webpackPrefetch: true */ "../views/deal/DealList.vue"),
      meta: {
        metaTags: [
          {
            name: 'description',
            content: 'The deal page of our Buysell.'
          }
        ]
      }
    },

];

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    // history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {

        if(to.name == from.name) {
            return { savedPosition };
        }
        return { left: 0, top: 0 };
    }
    
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  let setitemName = '';
  let setblogName = '';
  if (to.query.itemName) {
    const psValueHolder = PsValueProvider.psValueHolder;
    setitemName = to.query.itemName.toString() || "ro";
  }
  if (to.params.blogName) {
    setblogName = to.params.blogName.toString() || "ro";
  }
  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode?.removeChild(el));
  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();
  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    if (setitemName) {
      tag.setAttribute('content', setitemName);
    }
    if (setblogName) {
      tag.setAttribute('content',setblogName);
    }
    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...

export default router;