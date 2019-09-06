<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TuringMachine;
use App\Services\RunMachine;

use Validator;
use DB;

class MachineController extends Controller
{
    public function index(){
        $machines = Project::all();

        return $machines->toJson();
    }

    public function store(Request $request){
        $v =  Validator::make($request->all(), [
            'q' => 'String|required',
            'sigma' => 'String|required',
            'gamma' => 'String|required',
            'delta' => 'String|required',
            'q0' => 'String|required',
            'vazio' => 'String|required',
            'f' => 'String|required',
            'word' => 'String|required',
        ]);

        if($v->fails()){
            return response()->json($e);
        }

        DB::beginTransaction();
        try{
            $machine = new TuringMachine;
            $machine->q = $request->q;
            $machine->sigma = $request->sigma;
            $machine->gamma = $request->gamma;
            $machine->delta = $request->delta;
            $machine->q0 = $request->q0;
            $machine->vazio = $request->vazio;
            $machine->f = $request->f;
            $machine->word = $request->word;

            //https://github.com/Kreyo/php-turing/blob/master/index.php
            // $acceptedStates = [7];
            // $rules = [
            //     0 => ['_' => ['S', 'R', 1]],
            //     1 => ['_' => ['T', 'R', 2]],
            //     2 => ['_' => ['5', 'R', 3]],
            //     3 => ['_' => ['6', 'R', 4]],
            //     4 => ['_' => ['5', 'R', 5]],
            //     5 => ['_' => ['2', 'R', 6]],
            //     6 => ['_' => ['3', 'R', 7]],
            // ];
            // $tape = [];
            // $position = 0;
            // $state = 0;

            $res = new RunMachine($tape, $position, $state, $rules, $acceptedStates);
            $res = $res->run();

            $machine->res = $res;

            $machine->save();
            DB::commit();
            
            return reponse()->json($machine->res);
        }catch(\PDOException $e){
            DB::rollBack();

            return reponse()->json($e);
        }

        return response()->json('Project created!');
    }
}
