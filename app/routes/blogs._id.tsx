import { Outlet } from "@remix-run/react";

export default function BlogsLayout() {
    return (
        <div className="flex justify-center items-center w-full h-full mt-4">
            <div className="w-full px-4 md:w-1/2">
                <Outlet />
            </div>
        </div>
    )
}