<?php
defined('_JEXEC') or die;

$greeting = ModJoomlaGreetingHelper::getGreeting($params);
echo '<div class="joomla-greeting-module">' . $greeting . '</div>';
