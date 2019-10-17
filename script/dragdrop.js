function dragImage(ev) {
    ev.dataTransfer.setData("draggedImage", ev.target.id);
}

function dropImage(ev) {
	ev.preventDefault();
    const imageID = ev.dataTransfer.getData("draggedImage");
	const myImage = document.getElementById(imageID);
	ev.target.appendChild(myImage);
}

function allowDrop(ev) {
    ev.preventDefault();
}
