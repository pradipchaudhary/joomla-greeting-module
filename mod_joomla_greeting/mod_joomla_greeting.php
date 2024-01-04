<?php
<?php
/**
 * @package    [joomla_greeting_module]
 *
 * @author     [Pradip Chaudhary] <[chaudharypradip678@gmail.com]>
 * @copyright  [COPYRIGHT]
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       [https://pradipchaudhary.com.np/]
 */

// No direct access to this file
defined('_JEXEC') or die;

// Include the helper file
require_once dirname(__FILE__) . '/helper.php';

// Get module parameters
$greeting = ModJoomlaGreetingHelper::getGreeting($params);

require JModuleHelper::getLayoutPath('mod_joomla_greeting');
