class Options {

	constructor(height = "height: 120px", width = "width: 100px", bg = "background: green", fontSize = "font-size: 11pt", textAlign = "text-align: center"){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	create () {
		var div = document.createElement("div");
		div.textContent = "Привет!";
		div.style.cssText = `${this.height}; \ ${this.width}; \ ${this.bg}; \ ${this.fontSize}; \ ${this.textAlign}; \ `;
	}
}

let opt = new Options("height: 140px", "width: 120px", "background: green", "font-size: 200%", "text-align: center");
opt.create();