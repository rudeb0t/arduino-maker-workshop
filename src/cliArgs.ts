import { arduinoProject } from "./extension";

const configCommandArduino: string = 'config';
const dumpOption: string = 'dump';
const jsonOutputArduino: string = '--json';
const removeOption: string = 'remove';
const addtionalURLOption: string = '--additional-urls';
const configAdditionnalURLsetting: string = 'board_manager.additional_urls';
const addOption: string = 'add';
const initOption: string = 'init';
const setOption: string = 'set';
const compileCommandArduino: string = 'compile';
const compileCleanOption: string = '--clean';
const buildPathArduino: string = '--build-path';
const jobsOptionArduino: string = '--jobs';
const verboseOptionArduino: string = '-v';
const noColorOptionArduino: string = '--no-color';
const fqbnOptionArduino: string = '--fqbn';
const uploadCommandArduino: string = 'upload';
const portOptionArduino: string = '-p';
const inputDirOptionArduino: string = '--input-dir';
const preprocessCompileOptionArduino: string = '--preprocess';
const versionCommandArduino: string = 'version';
const sketchCommandArduino: string = 'sketch';
const boardCommandArduino: string = 'board';
const libraryCommandArduino: string = 'lib';
const listFunctionArduino: string = 'list';
const detailsFunctionArduino: string = 'details';
const outdatedCommandArduino: string = 'outdated';
const coreCommandArduino: string = 'core';
const updateOption: string = 'update-index';
const newOption: string = 'new';
const installOption: string = 'install';
const uninstallOption: string = 'uninstall';
const searchOption: string = 'search';
const listOption: string = 'list';
const configDirDataSetting: string = 'directories.data';
const configDirDownloadSetting: string = 'directories.downloads';
const configDirUserSetting: string = 'directories.user';

export class CLIArguments {
    public getConfigSetDowloadDirectory(dir: string): string[] {
        const command = [
            `${configCommandArduino}`,
            `${setOption}`,
            `${configDirDownloadSetting}`,
            `${dir}`,
        ];
        return command;
    }
    public getConfigSetDataDirectory(dir: string): string[] {
        const command = [
            `${configCommandArduino}`,
            `${setOption}`,
            `${configDirDataSetting}`,
            `${dir}`,
        ];
        return command;
    }
    public getConfigSetUserDirectory(dir: string): string[] {
        const command = [
            `${configCommandArduino}`,
            `${setOption}`,
            `${configDirUserSetting}`,
            `${dir}`,
        ];
        return command;
    }
    public getOutdatedArguments(): string[] {
        const outdatedCommand = [
            `${outdatedCommandArduino}`,
            `${jsonOutputArduino}`
        ];
        return outdatedCommand;
    }
    public getNewSketchArguments(name: string): string[] {
        const outdatedCommand = [
            `${sketchCommandArduino}`,
            `${newOption}`,
            `${name}`,
            `${jsonOutputArduino}`
        ];
        return outdatedCommand;
    }
    public getCoreUpdateArguments(): string[] {
        const updateCoreCommand = [
            `${coreCommandArduino}`,
            `${updateOption}`,
        ];
        return updateCoreCommand;
    }
    public getInstallCoreVersionArguments(version: string): string[] {
        const installCoreVersionCommand = [
            `${coreCommandArduino}`,
            `${installOption}`,
            `--run-post-install`,
            `--run-pre-uninstall`,
            `${version}`
        ];
        return installCoreVersionCommand;
    }
    public getInstallLibraryVersionArguments(version: string): string[] {
        const command = [
            `${libraryCommandArduino}`,
            `${installOption}`,
            `${version}`
        ];
        return command;
    }
    public getUninstallLibraryArguments(name: string): string[] {
        const installCoreVersionCommand = [
            `${libraryCommandArduino}`,
            `${uninstallOption}`,
            `${name}`
        ];
        return installCoreVersionCommand;
    }
    public getUninstallCoreArguments(board_id: string): string[] {
        const installCoreVersionCommand = [
            `${coreCommandArduino}`,
            `${uninstallOption}`,
            `--run-post-install`,
            `--run-pre-uninstall`,
            `${board_id}`
        ];
        return installCoreVersionCommand;
    }
    public getPortListArguments(): string[] {
        const compileCommand = [
            `${boardCommandArduino}`,
            `${listFunctionArduino}`,
            `${jsonOutputArduino}`
        ];
        return compileCommand;
    }
    public getVersionArguments(): string[] {
        const versionCommand = [
            `${versionCommandArduino}`,
            `${jsonOutputArduino}`
        ];
        return versionCommand;
    }
    public getBoardsListArguments(): string[] {
        const searchAllCommand = [
            `${boardCommandArduino}`,
            `${searchOption}`,
            `${jsonOutputArduino}`
        ];
        return searchAllCommand;
    }
    public getBoardConnectedArguments(): string[] {
        const command = [
            `${boardCommandArduino}`,
            `${listOption}`,
            `${jsonOutputArduino}`
        ];
        return command;
    }
    public getCoreSearchArguments(): string[] {
        const searchAllCommand = [
            `${coreCommandArduino}`,
            `${searchOption}`,
            `-a`,
            `${jsonOutputArduino}`
        ];
        return searchAllCommand;
    }

    public getLibrarySearchArguments(): string[] {
        const libSearchCommand = [
            `${libraryCommandArduino}`,
            `${searchOption}`,
            `--omit-releases-details`,
            `${jsonOutputArduino}`
        ];
        return libSearchCommand;
    }
    public getLibraryInstalledArguments(): string[] {
        const command = [
            `${libraryCommandArduino}`,
            `${listOption}`,
            `${jsonOutputArduino}`
        ];
        return command;
    }
    public getBoardConfigurationArguments(): string[] {
        let boardConfigArg = "";
        if (arduinoProject.getBoardConfiguration() === "") {
            boardConfigArg = arduinoProject.getBoard();
        } else {
            boardConfigArg = `${arduinoProject.getBoard()}:${arduinoProject.getBoardConfiguration()}`;
        }
        const compileCommand = [
            `${boardCommandArduino}`,
            `${detailsFunctionArduino}`,
            `${fqbnOptionArduino}`,
            // `${this.getBoard()}:${this.getBoardConfiguration()}`,
            `${boardConfigArg}`,
            `${jsonOutputArduino}`
        ];
        return compileCommand;
    }
    public getPreprocessCommandArguments(): string[] {
        const compileCommand = [
            `${compileCommandArduino}`,
            `${verboseOptionArduino}`,
            `${preprocessCompileOptionArduino}`,
            `${noColorOptionArduino}`,
            `${fqbnOptionArduino}`,
            `${arduinoProject.getBoard()}:${arduinoProject.getBoardConfiguration()}`,
            arduinoProject.getProjectPath()
        ];
        return compileCommand;
    }
    public getUploadArguments(): string[] {
        arduinoProject.readConfiguration();
        const compileCommand = [
            `${uploadCommandArduino}`,
            `${verboseOptionArduino}`,
            `${noColorOptionArduino}`,
            `${portOptionArduino}`,
            `${arduinoProject.getPort()}`,
            `${fqbnOptionArduino}`,
            `${arduinoProject.getBoard()}:${arduinoProject.getBoardConfiguration()}`,
            `${inputDirOptionArduino}`,
            arduinoProject.getProjectPath() + '/' + arduinoProject.getOutput(),
            arduinoProject.getProjectPath()
        ];
        return compileCommand;
    }
    public getCompileCommandArguments(jsonOutput: boolean = false, clean: boolean = false): string[] {
        const compileCommand = [
            `${compileCommandArduino}`,
            `${verboseOptionArduino}`,
            `${noColorOptionArduino}`,
            `${fqbnOptionArduino}`,
            `${arduinoProject.getBoard()}:${arduinoProject.getBoardConfiguration()}`,
            `${buildPathArduino}`,
            arduinoProject.getProjectPath() + '\\' + arduinoProject.getOutput(),
            arduinoProject.getProjectPath()
        ];
        if (jsonOutput) {
            compileCommand.push(`${jsonOutputArduino}`);
        }
        if (clean) {
            compileCommand.push(`${compileCleanOption}`);
        }
        return compileCommand;
    }
    public getConfigDumpArgs(): string[] {
        const command = [
            `${configCommandArduino}`,
            `${dumpOption}`,
            `${jsonOutputArduino}`
        ];
        return command;
    }
    public getConfigRemoveAdditionalBoardURLArgs(URL: string): string[] {
        const command = [
            `${configCommandArduino}`,
            `${removeOption}`,
            `${configAdditionnalURLsetting}`,
            `${URL}`,
        ];
        return command;
    }
    public getConfigAddAdditionalBoardURLArgs(URL: string): string[] {
        const command = [
            `${configCommandArduino}`,
            `${addOption}`,
            `${configAdditionnalURLsetting}`,
            `${URL}`,
        ];
        return command;
    }
    public getConfigSetAdditionalBoardURLArgs(URL: string): string[] {
        const urls = URL.split(' ');
        const command = [
            `${configCommandArduino}`,
            `${setOption}`,
            `${configAdditionnalURLsetting}`,
            `${urls[0]}`,
            `${urls[1]}`,
        ];
        return command;
    }
    public getConfigInitArgs(): string[] {
        const command = [
            `${configCommandArduino}`,
            `${initOption}`,
            `${jsonOutputArduino}`
        ];
        return command;
    }
}