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
                            return datas.find(house =>
                                house.id === params.houseId
                            ) || null
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
