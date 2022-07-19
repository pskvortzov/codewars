<?php
function parse($data) {
  $value = 0;
  $result = [];
  
  foreach (str_split($data) as $command) {
    switch ($command) {
      case "i":
        $value += 1;  
        break;
        
      case "d":
        $value -= 1;  
        break;
        
      case "s":
        $value **= 2;  
        break;
        
      case "o":
        $result[] = $value;
        break;
    }
  }
  
  return $result;
}