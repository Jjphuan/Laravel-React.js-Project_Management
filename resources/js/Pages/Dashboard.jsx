import { TASK_STATUS_CLASS_MAP } from '@/constants';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard(
            { auth,
            totalPendingTask,
            myPendingTasks,
            totalInProgressTask,
            myInProgressTasks,
            totalCompletedTask,
            myCompletedTasks,
            activeTask}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <h3 className="text-amber-600 text-2xl font-semibold">
                                Pending Tasks
                            </h3>
                            <p className="text-xl mt-4 ml-2">
                                <span className="mr-2">{myPendingTasks}</span>/
                                <span className="ml-2">{totalPendingTask}</span></p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <h3 className="text-blue-400 text-2xl font-semibold">
                                In_Progress Tasks
                            </h3>
                            <p className="text-xl mt-4 ml-2">
                                <span className="mr-2">{myInProgressTasks}</span>/
                                <span className="ml-2">{totalInProgressTask}</span></p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <h3 className="text-emerald-400 text-2xl font-semibold">
                                Completed Tasks
                            </h3>
                            <p className="text-xl mt-4 ml-2">
                                <span className="mr-2">{myCompletedTasks}</span>/
                                <span className="ml-2">{totalCompletedTask}</span></p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <h3 className="text-gray-500 text-2xl font-semibold">
                                My Active Tasks
                            </h3>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Project Name</th>
                                        <th className="px-3 py-3">Task Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeTask.data.map((task)=>(
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={task.id}>
                                            <td className="px-3 py-4">{task.id}</td>
                                            <td className="px-3 py-4 text-white hover:underline">
                                                <Link href={route('project.show',task.project.id)}>
                                                    {task.project.name}
                                                </Link>
                                            </td>
                                            <td className="px-3 py-4 hover:underline">
                                                <Link href={route('task.show',task.id)}>
                                                    {task.name}
                                                </Link>
                                            </td>
                                            <td className="px-3 py-4">
                                                <span className={
                                                    "px-3 py-2 rounded text-white " +
                                                    TASK_STATUS_CLASS_MAP[task.status]
                                                }>
                                                    {task.status}
                                                </span>
                                            </td>
                                            <td className="px-3 py-4">{task.due_date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
