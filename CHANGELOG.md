# Change Log

All notable changes to the Arduino Malker Workshop extension will be documented in this file.

**Version 0.6.5**
- Added user setting to set user directory, equivalent of the Arduino IDE's 'sketchbook' directory. Library Manager installations are made to the libraries subdirectory of the user director
- UI Performance improvement by using cache to avoid repeated calls to the arduino-cli
- Correctly report to the user that a project is compiled "clean"
- Fixed bug when adding additional URL

**Version 0.6.2**
- Fixed libraries with patchlevel 0 showing wrongly as updatable ([issue](https://github.com/thelastoutpostworkshop/arduino-maker-workshop/issues/22))
- Fixed upload error when starting a new sketch
- Fixed cancel or upload error forcing a recompilation
- Fixed user error reporting when create a sketch with a name that already exist

**Version 0.6.1**
- Serial monitor settings on Home page by [rudeb0t](https://github.com/rudeb0t)
- Code Snippets added : [Documentation](https://github.com/thelastoutpostworkshop/arduino-maker-workshop/blob/main/Arduino_Snippets_Documentation.md)
- IntelliSense improvements
- Upload command will trigger compile if build is not valid

**Version 0.5.1**
- Implement notification and cancel for upload by [rudeb0t](https://github.com/rudeb0t)
- Fixed bundled CLI permission on macOS Silicon by [rudeb0t](https://github.com/rudeb0t)
- Fixed Arduino CLI path in settings on Windows
- Changes to Arduino CLI settings are applied to the current workspace
- Fixed intellisense adding duplicate defines

**Version 0.5.0**
- Linux x64 now supported
- Bugs corrected

**Version 0.4.92**
- Resolved and restored conflict with `which` import for MacOS

**Version 0.4.8**
- MacOS ARM64 version, thanks to [rudeb0t](https://github.com/rudeb0t)
- Build output in invalidated when changes to project files and arduino configuration

**Version 0.4.7**
- New help dialog when adding and additionnal board URL

**Version 0.4.6**
- Corrected typo in Webview 

**Version 0.4.5**
- Repackaged as Win32-x64 since Linux and MacOS support are not avalaible yet. 
