<?php
defined('_JEXEC') or die;

class ModJoomlaGreetingHelper {
    public static function getGreeting($params) {
        $greeting = $params->get('greeting', 'Hello, World!');
        return $greeting;
    }
}
