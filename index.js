document.getElementById("add-time").addEventListener("click", (e) => {
	e.preventDefault();

    let container = document.createElement("div");
    container.setAttribute("class", "input-container")


    let break_el = document.createElement("br");
    let label = document.createElement("label");
	let input = document.createElement("div");
    input.setAttribute("class", "select-container");
	label.innerHTML = "Caffiene intake";
    input.innerHTML = `<select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>`

    let label_time = document.createElement("label");
	let input_time = document.createElement("input");
    input_time.setAttribute("type", "time");
    input_time.setAttribute("required", "true");
    label_time.innerHTML = "Time: "

    
    container.appendChild(break_el);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(label_time);
    container.appendChild(input_time);

    document.getElementById("form").appendChild(container)
});


document.getElementById("remove-time").addEventListener("click", (e) => {
	e.preventDefault();
    document.getElementsByClassName("input-container")[0].remove(-1);

});