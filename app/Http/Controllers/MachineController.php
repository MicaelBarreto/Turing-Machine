<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MachineController extends Controller
{
    public function index(){
        $machines = Project::all();

        return $machines->toJson();
    }

    public function store(Request $request){
        // $validatedData = $request->validate([
        //     'name' => 'required',
        //     'description' => 'required',
        // ]);

        // $project = Project::create([
        //     'name' => $validatedData['name'],
        //     'description' => $validatedData['description'],
        // ]);

        return response()->json('Project created!');
    }
}
