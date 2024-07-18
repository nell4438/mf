<?php
function writeMsg()
{
    echo "Hello world!";
}

$add = function ($value) {
    if ($value > 0) {
        return "Positive";
    } else {
        return "Non-positive";
    }
};

$myNameIs = fn($name) => "Hello, my name is $name!";