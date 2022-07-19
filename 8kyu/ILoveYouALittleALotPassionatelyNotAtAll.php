<?php
function how_much_i_love_you(int $nb_petals): string {
  $phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  
  return $phrases[($nb_petals - 1) % 6];
}