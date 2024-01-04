# Joomla Gretting Modules

The "joomla-greeting-module" is a basic Joomla module that displays a greeting message on a webpage. Here's a step-by-step guide along with code snippets and explanations for each file in the module.

### File Structure:

```
joomla-greeting-module/
│
├── mod_greeting/
│   ├── mod_greeting.php
│   ├── helper.php
│   ├── mod_greeting.xml
│   ├── tmpl/
│   │   └── default.php
│   └── language/
│       ├── en-GB/
│       │   └── en-GB.mod_greeting.ini
│       └── de-DE/
│           └── de-DE.mod_greeting.ini
│
└── README.md
```

### Code for `mod_greeting.php`:

**`mod_greeting.php`**: This is the main entry point of the module. It includes the helper file, retrieves the greeting message using the helper function, and includes the template file for displaying the greeting.

```php
<?php
defined('_JEXEC') or die;

require_once dirname(__FILE__) . '/helper.php';

$greeting = ModGreetingHelper::getGreeting($params);

require JModuleHelper::getLayoutPath('mod_greeting');
```

### Code for `helper.php`:

**`helper.php`**: Contains the helper class with a function (`getGreeting`) that retrieves the greeting message from the module parameters or defaults to "Hello, World!" if not set.

```php
<?php
defined('_JEXEC') or die;

class ModGreetingHelper {
    public static function getGreeting($params) {
        $greeting = $params->get('greeting', 'Hello, World!');
        return $greeting;
    }
}
```

### Code for `mod_greeting.xml`:

**`mod_greeting.xml`**: Defines the metadata of the module, including its name, author, version, description, file structure, and module parameters (in this case, the greeting message).

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="3.1" type="module" client="site" method="upgrade">
    <name>Greeting Module</name>
    <author>Your Name</author>
    <version>1.0</version>
    <description>A simple Joomla module that displays greetings.</description>
    <files>
        <filename module="mod_greeting">mod_greeting.php</filename>
        <filename>index.html</filename>
        <folder>tmpl</folder>
        <folder>language</folder>
    </files>
    <config>
        <fields name="params">
            <fieldset name="basic">
                <field
                    name="greeting"
                    type="text"
                    label="Greeting"
                    description="Enter the greeting message."
                    default="Hello, World!"
                />
            </fieldset>
        </fields>
    </config>
</extension>
```

### Code for `tmpl/default.php`:

**`tmpl/default.php`**: The template file responsible for displaying the greeting message on the webpage. It retrieves the greeting using the helper function and outputs it within a `<div>` with the class "greeting-module."

```php
<?php
defined('_JEXEC') or die;

$greeting = ModGreetingHelper::getGreeting($params);
echo '<div class="greeting-module">' . $greeting . '</div>';
```

### Code for Language Files (`en-GB.mod_greeting.ini`, `de-DE.mod_greeting.ini`):

**Language Files** (`en-GB.mod_greeting.ini`, `de-DE.mod_greeting.ini`): These files contain language-specific strings. They provide translations for the greeting message in different languages for multilingual support.

#### `en-GB.mod_greeting.ini`:

```ini
GREETING_MESSAGE="Hello, World!"
```

#### `de-DE.mod_greeting.ini`:

```ini
GREETING_MESSAGE="Hallo, Welt!"
```
