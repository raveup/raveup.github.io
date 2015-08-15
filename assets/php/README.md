## php

- `php 5.4.30`
- Execute in terminal with `php filename.php`
- PHP image class: [eventviva/php-image-resize](https://github.com/eventviva/php-image-resize)

### Files

`index.php`

- List php files with command.

`createSmallCopy.php`

- Read `cover` subdir images and create a copy (if not present) with `.jpg` replaced by `s.jpg` with quality 100%.  
  If image horizontal size is more than 300px, copy is scaled by 50% and saved with quality 75%.

`deleteSmallCopy.php`

- Read `cover` subdir images and delete images (if present) with `.jpg` replaced by `s.jpg` or `ss.jpg`.
