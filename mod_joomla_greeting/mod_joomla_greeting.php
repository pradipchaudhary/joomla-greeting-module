<?php
<?php
/**
 * @package    [PACKAGE_NAME]
 *
 * @author     [AUTHOR] <[AUTHOR_EMAIL]>
 * @copyright  [COPYRIGHT]
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       [AUTHOR_URL]
 */

// No direct access to this file
defined('_JEXEC') or die;

// Include the helper file
require_once dirname(__FILE__) . '/helper.php';

// Get module parameters
$greeting = ModJoomlaGreetingHelper::getGreeting($params);

require JModuleHelper::getLayoutPath('mod_joomla_greeting');
