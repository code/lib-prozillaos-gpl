import ApplicationsManager from "../applications/applications.js";
import { randomRange } from "../math/random.js";
import Vector2 from "../math/vector2.js";
// eslint-disable-next-line no-unused-vars
import { VirtualFile } from "../virtual-drive/virtual-file.js";

export default class WindowsManager {
	constructor() {
		this.windows = {};
		this.updateWindows = () => {};
	}

	open(appId, options) {
		const app = ApplicationsManager.getApplication(appId);
		const size = new Vector2(700, 400);
		const position = new Vector2(randomRange(50, 600), randomRange(50, 450));

		let id = 0;
		while (this.windowIds.includes(id.toString())) {
			id++;
		}

		id = id.toString();

		console.log(`Opening window ${id}:${app.id}`);

		this.windows[id] = {
			id,
			app,
			size,
			position,
			options,
			lastInteraction: new Date().valueOf()
		};

		this.updateWindows(this.windows);
		// console.log(this);
	}

	/**
	 * @param {VirtualFile} file 
	 */
	openFile(file) {
		const app = ApplicationsManager.getFileApplication(file.extension);
		if (app != null)
			this.open(app.id, { file });
	}

	close(windowId) {
		windowId = windowId.toString();

		if (!this.windowIds.includes(windowId)) {
			console.log(`Failed to close window ${windowId}: window not found`);
			return;
		}
		
		console.log(`Closing window ${windowId}`);
		delete this.windows[windowId];

		this.updateWindows(this.windows);
		// console.log(this);
	}

	focus(window) {
		window.lastInteraction = new Date().valueOf();
		this.updateWindows(this.windows);
	}

	isAppActive(appId) {
		let active = false;

		Object.values(this.windows).forEach((window) => {
			if (window.app.id === appId) {
				active = true;
				return;
			}
		});

		return active;
	}

	setUpdateWindows(updateWindows) {
		this.updateWindows = updateWindows;
	}

	get windowIds() {
		return Object.keys(this.windows);
	}
}