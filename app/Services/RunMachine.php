<?php

namespace App\Services;


class RunMachine{

    const MOVE_RIGHT = 'R';
    const MOVE_LEFT = 'L';
    protected $line;
    protected $position;
    protected $state;
    protected $rules;
    protected $acceptedStates;
    
    function __construct($line, $position, $state, $rules, $acceptedStates)
    {
        $this->line = $line;
        $this->position = $position;
        $this->state = $state;
        $this->rules = $rules;
        $this->acceptedStates = $acceptedStates;
    }
    
    function moveLeft()
    {
        $this->position--;
        if ($this->position < 0) {
            $this->position++;
            array_unshift($this->line, '_');
        }
    }
    
    function moveRight()
    {
        $this->position++;
        if ($this->position >= count($this->line)) {
            array_push($this->line, '_');
        }
    }
    
    function readLine($position)
    {
        return isset($this->line[$position]) ? $this->line[$position] : '_';
    }
    
    function matchRule()
    {
        $value = $this->readLine($this->position);
        if (!isset($this->rules[$this->state][$value])) {
            var_dump('No rule found for value ' . $value);
            die;
        }
        return $this->rules[$this->state][$value];
    }
    
    function step($rule)
    {
        $output = $rule[0];
        $direction = $rule[1];
        $nextState = $rule[2];
        $this->line[$this->position] = $output;
        switch ($direction) {
            case self::MOVE_LEFT:
                $this->moveRight();
                break;
            case self::MOVE_RIGHT:
                $this->moveRight();
                break;
            default:
                var_dump('Movimento ilegal na posição ' . $this->position);
                break;
        }
        $this->state = $nextState;
    }
    
    function run()
    {
        while (!in_array($this->state, $this->acceptedStates)) {
            $rule = $this->matchRule();
            $this->step($rule);
        }
        return $this->line;
    }

}