import { defineStore } from 'pinia';
import { MESSAGE_COMMANDS, WebviewToExtensionMessage } from '@shared/messages';

export const useVsCodeStore = defineStore('vsCode', {
    state: () => ({
        cliStatus: null as WebviewToExtensionMessage | null,
        projectInfo: null as any,
        projectStatus: null as any,
    }),
    actions: {
        handleMessage(message: any) {
            switch (message.command) {
                case MESSAGE_COMMANDS.ARDUINO_CLI_STATUS:
                    this.cliStatus = message;
                    break;
                case MESSAGE_COMMANDS.ARDUINO_PROJECT_INFO:
                    this.projectInfo = message;
                    break;
                case MESSAGE_COMMANDS.ARDUINO_PROJECT_STATUT:
                    this.projectStatus = message;
                    break;
                default:
                    console.warn('Unknown command received:', message.command);
            }
        },
    },
});