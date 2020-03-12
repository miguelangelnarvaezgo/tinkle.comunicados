import * as mangFastUi from "./js/mang-fast-ui.js";

const contentBox = `
	<div class="mang-col-xxs-12 mang-col-xs-6 mang-col-sm-4 mang-col-mg-4 mang-col-xl-3">
		<div class="box-image">
		</div>
		<div class="mang-content-box box-info">
			<h5 class="#">Título de caja</h5>
			<p class="mang-no-margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <p>
			<span class="mang-footnote">Sed ut perspiciatis unde omnis</span>
		</div>
	</div>
	`;

//mangFastUi.insertHTML(0, 9, "contentBox", contentBox);

const shadowTest = (opt, id) => {	
	let shadowBox = (index) => {
		console.log(index);
		let foo = `<div class="box-shadow mang-border-0003 mang-col-xxs-6 mang-off-3 mang-shadow-0${index+1}"></div>`;
		return foo;
	}
	
	for (let i = 0; i < 5; i++) {
		document.getElementById(id).insertAdjacentHTML(opt, shadowBox(i));
	}
}

//mangFastUi.insertHTML(0, 1, "shadowContent", shadowTest("beforeend", "shadowContent"));