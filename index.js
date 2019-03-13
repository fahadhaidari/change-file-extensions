// IIFE function that accepts 3 params
// target directory that hosts the files, current extesion to be changed,
// and the required extension
((dir_name, current_extension, target_extension) => {
  const fs = require('fs');
  const path = require('path');
  
  fs.readdir(dir_name, (err, files) => {
    if (err) return err;

    files.forEach(file => {
      const fileName = file.toString().split('.').slice(0, -1).join('.');
      const extension = path.extname(file);

      if (extension === '.' + current_extension) {
        const newFile = `${dir_name}${fileName}.${target_extension}`;

        fs.rename(`${dir_name}${file}`, newFile, (err) => {
          if ( err ) return err;
          console.log('Renamed', file, 'to', newFile);
        });
      }
    });
  });
})('./', 'js', 'jsx');