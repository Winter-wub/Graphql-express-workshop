class Di {
	constructor() {
		this.di = {};
	}
	get(depName) {
		return this.di[depName];
	}
	set(depName, depObj) {
		this.di[depName] = depObj;
	}
}

module.exports = new Di();
