class Dilong{
	constructor(tet,cont){
		this.tet = tet || "标题党";
		this.cont = cont || "今天天天天天天";
		this.init();
	}

	init(){
		alert(1);
		this.addWrap();
		let wap = this.addWrap();
		let title = this.addTitle(this.tet);
		let cont = this.addContent(this.cont);
		console.log()
		wap.appendChild(title);
		wap.appendChild(cont);
		document.body.appendChild(wap);
	}

	addWrap(){
		let abc = document.createElement("div");
		abc.className="wrap";
		return abc;
	}

	addTitle(tet){
		let title = document.createElement("div");
		let text = document.createElement("span");
		let cha = document.createElement("b");
		title.className="title";
		text.innerHTML = tet;
		title.appendChild(text);
		cha.innerHTML="X";
		cha.className="cha";
		this.hide(cha);
		title.appendChild(cha);
		return title;
	}

	addContent(cont){
		let content = document.createElement("div");
		let text = document.createElement("span");
		content.className="content";
		text.innerHTML=cont;
		content.appendChild(text);
		return content;
	}

	hide(ele){
		ele.addEventListener("click", function(){
			let wp = document.getElementsByClassName("wrap")[0];
			wp.style.display="none";
		}, false)
	}
}
new Dilong();