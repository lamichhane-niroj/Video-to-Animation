import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UploadVideo from './components/UploadVideo';
import HomePage from './HomePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/uploadVideo",
        element: <UploadVideo />,
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}