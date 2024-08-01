import { TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP, TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

function Show({auth , task, tasks , queryParams}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {`Tasks "${task.name}"`}
                </h2>
                <Link href={route('task.edit',task.id)} className="bg-emerald-400 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                    Edit
                </Link>
                </div>
        }>
            <Head title={`Tasks "${task.name}"`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <img src={task.image_path}
                                alt=""
                                className="w-full h-64 object-cover"/>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Task ID
                                        </label>
                                        <p className="mt-1">{task.id}</p>
                                    </div>
                                    <div className="mt-2">
                                        <label className="font-bold text-lg">
                                            Task Name
                                        </label>
                                        <p className="mt-1">{task.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Task Status
                                        </label>
                                        <p className="mt-1">
                                            <td className="px-1 py-2">
                                                <span className={
                                                    "px-2 py-2 rounded text-white " +
                                                    TASK_STATUS_CLASS_MAP[task.status]
                                                }>
                                                    {TASK_STATUS_TEXT_MAP[task.status]}
                                                </span>
                                            </td>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Priority
                                        </label>
                                        <p className="mt-1">
                                            <td className="px-1 py-2">
                                                <span className={
                                                    "px-2 py-2 rounded text-white " +
                                                    TASK_PRIORITY_CLASS_MAP[task.priority]
                                                }>
                                                    {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                                </span>
                                            </td>
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <label className="font-bold text-lg">
                                            Created By
                                        </label>
                                        <p className="mt-1">{task.createdBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Due Date</label>
                                        <p className="mt-1">{task.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Create Date</label>
                                        <p className="mt-1">{task.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Updated By</label>
                                        <p className="mt-1">{task.updatedBy.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Project</label>
                                        <Link href={route('project.show',task.project.id)} className="hover:underline">
                                            <p className="mt-1">
                                                {task.project.name}
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Assigned User</label>
                                        <p className="mt-1">{task.updatedBy.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">
                                    Task Description
                                </label>
                                <p className="mt-1">{task.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Show
