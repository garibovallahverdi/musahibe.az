import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import MainPage from "../pages/main"
import NewsPage from "../pages/news"
import ErrorPage from "../pages/error"
import Reading from "../pages/reading"

const validCategories  =["xeberler","medeniyyet","iqtisadiyyat","texnologiya","siyaset","idman"]
export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage/>,
            children:[
                {
                    path:"/",
                    element:<MainPage/>
                },
                {

                    path:"/news/:category",
                    element:<NewsPage validCategories={validCategories}/>, 
                       
                },
                {
                    path:"reading/:slug",
                    element:<Reading/>
                }
              
            ]
            
        },
        // {
        //     path: "/auth",
        //     element: <AuthLayout />,
        //     children: [
        //         {
        //             path: "sign-in",
        //             element: <SignIn />
        //         },
        //         {
        //             path: "sign-up",
        //             element: <SignUp />
        //         },
        //         {
        //             path: "forgot-password",
        //             element: <ForgotPassword />
        //         },
        //         {
        //             path: "verification-account",
        //             element: <VerificationAccount />
        //         }
        //     ]
        // },
        // {
        //     path: "/profile",
        //     element: <ProfileLayout />,
        //     children: [
        //         {
        //             path: "my-auctions",
        //             element: <MyAuctions />
        //         },
        //         {
        //             path: "account-details",
        //             element: <AccountDetails />
        //         },
        //         {
        //             path: "change-password",
        //             element: <ChangePassword />
        //         },
        //         {
        //             path: "advertise-auctions",
        //             element: <AdvertiseAuctions />
        //         },
        //         {
        //             path: "win-auctions",
        //             element: <WinningAuctions />
        //         },
        //         {
        //             path: "deal-auctions",
        //             element: <DealAuctions />
        //         },
        //         {
        //             path: "card-info",
        //             element: <CardInfo />
        //         },
        //     ]
        // },
        // {
        //     path: "/admin",
        //     element: <AdminLayout />,
        //     children: [
        //         {
        //             path: "auctions",
        //             element: <Auctions />
        //         },
        //         {
        //             path: "auction-check/:id",
        //             element: <AuctionCheck />
        //         },
        //         {
        //             path: "login",
        //             element: <AdminLogin />
        //         },
        //     ]
        // },
       
    ])