<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TuringMachine;
use App\Services\RunMachine;

use validator;
use DB;

class MachineController extends Controller
{
    public function index(){
        $machines = Project::all();

        return $machines->toJson();
    }

    public function store(Request $request){
        $v = $request->validate([
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

            $res = RunMachine::run($machine);

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
