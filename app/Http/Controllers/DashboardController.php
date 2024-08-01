<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){

        $user = auth()->user();

        $totalPendingTask = Task::query()
                        ->where('status','pending')
                        ->count();
        $myPendingTasks = Task::query()
                        ->where('status','pending')
                        ->where('assigned_user_id',$user->id)
                        ->count();

        $totalInProgressTask = Task::query()
                        ->where('status','In_progress')
                        ->count();
        $myInProgressTasks = Task::query()
                        ->where('status','In_progress')
                        ->where('assigned_user_id',$user->id)
                        ->count();

        $totalCompletedTask = Task::query()
                        ->where('status','completed')
                        ->count();
        $myCompletedTasks = Task::query()
                        ->where('status','completed')
                        ->where('assigned_user_id',$user->id)
                        ->count();

        $activeTask = Task::query()
                        ->whereIn('status',['pending','In_progress'])
                        ->where('assigned_user_id',$user->id)
                        ->limit(10)
                        ->get();

        $activeTask = TaskResource::collection($activeTask);

        return inertia('Dashboard',
                        compact('totalPendingTask',
                                'myPendingTasks',
                                'totalInProgressTask',
                                'myInProgressTasks',
                                'totalCompletedTask',
                                'myCompletedTasks',
                                'activeTask'));

    }
}
