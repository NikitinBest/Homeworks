class Options {

	constructor(height = "120px", width = "100px", bg = "green", 	
			fontSize = "11pt", textAlign = "center") {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	create () {
		var div = document.createElement("div");
		div.textContent = "Привет!";
		div.style.cssText = `width: ${this.width}; height: ${this.height}; background: ${this.background}; font-size: ${this.fontSize}; text-align: ${this.textAlign}; `;
	}
}

let opt = new Options("140px", "120px", "green", "200%", "center");
opt.create();