import { createBrowserRouter } from 'react-router-dom';
import datas from '../api/logements.json'
import House from '../views/House';
import ErrorPage from '../views/ErrorPage';
import Home from '../views/Home';
import About from '../views/About';
import BaseTemplate from '../views/BaseTemplate';

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseTemplate />,
        errorElement: <ErrorPage />,
        children: [
            {
                children: [
                    {
                        index: true,
                        element: <Home />,
                        loader: () => {
                            return datas
                        }
                    },
                    {
                        path: "house/:houseId",
                        element: <House />,
                        loader: ({ params }) => {
                            const data = datas.find(house =>
                                house.id === params.houseId
                            )
                            if (!data) {
                                throw new Response("", { status: 404 })
                            } else {

                                return data;
                            }
                        }
                    },
                    {
                        path: "about/",
                        element: <About />,
                    },
                ],
            }],
    }
]);

export default router;
