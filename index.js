
function creat_task(task){
    const task_el = document.createElement("div");
    task_el.classList.add("task");


    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);
    
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly","readonly");
    
    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
    task_edit_el.title = "Edit the task";
    
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";
    task_delete_el.title = "Delete the task";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_input_el.addEventListener('click', () =>{
        task_el.classList.toggle("done");
        
    });

    var task_to_edit_index = task123.indexOf(task_input_el.value);
    task_edit_el.addEventListener('click', () =>{
        if(task_edit_el.innerText.toLowerCase() == "edit"){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
            
            task_to_edit_index = task123.indexOf(task_input_el.value);
            // console.log(task_to_edit_index);
        }
        else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Edit";
            // console.log(task_to_edit_index);
            
            task123[task_to_edit_index] = task_input_el.value;            
            localStorage.setItem("tasks", JSON.stringify(task123));
        }
    });

    task_delete_el.addEventListener('click', () => {
        list_el.removeChild(task_el);
        const task_to_edit_index = task123.indexOf(task_input_el.value);
        task123.splice(task_to_edit_index, 1);
        localStorage.setItem("tasks", JSON.stringify(task123));

    });

    // console.log(task);
}


// window.addEventListener('load', () => {
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    const list_el = document.querySelector("#tasks");
    const theme_button = document.querySelector("#theme_button");
    const theme_logo = document.querySelector("#theme_logo");


    if(localStorage.getItem("tasks")){
        var task123 = JSON.parse(localStorage.getItem("tasks"));
        i = 0;
        while(i < task123.length){
            input.value = task123[i];
            const task = input.value;
            creat_task(task);
            i++;
            // console.log(task123[i]);
        }
    }
    else{
        var task123 =[];
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task){
            alert("Please fill out the task!!")
            return;
        }

        task123.push(task);


        localStorage.setItem("tasks", JSON.stringify(task123));

        creat_task(task);

    });

   localStorage.setItem("theme", "dark");
    var theme = localStorage.getItem("theme");
    set_theme(theme);

    theme_button.addEventListener("click", () =>{
        // set_theme(theme);

        if(theme == "dark"){
            // $(':root').css('--hard', '#dadada');
            // $(':root').css('--harder', '#f5f5f5');
            // $(':root').css('--hardest', '#fefefe');
            document.documentElement.style.setProperty('--hard', '#dadada');
            document.documentElement.style.setProperty('--harder', '#f5f5f5');
            document.documentElement.style.setProperty('--hardest', '#fefefe');
            document.documentElement.style.setProperty('--task_color', '#6b7280');
            theme_logo.src = "https://cdn4.iconfinder.com/data/icons/biticon-weather-line/24/weather_sun_sunny_day-512.png"
            theme = "light";
            localStorage.setItem("theme", theme);
        }
        else if(theme == "light"){
            // $(':root').css('--hard', '#374151');
            // $(':root').css('--harder', '#d6dadf');
            // $(':root').css('--hardest', '#111827');
            document.documentElement.style.setProperty('--hard', '#374151');
            document.documentElement.style.setProperty('--harder', '#1f2937');
            document.documentElement.style.setProperty('--hardest', '#111827');
            document.documentElement.style.setProperty('--task_color', '#fff');
            theme_logo.src = "https://cdn4.iconfinder.com/data/icons/biticon-weather-line/24/weather_night_moon_lunar-512.png"
            theme = "dark";
            localStorage.setItem("theme", theme);
        }
    })

function set_theme(theme){
    if(theme == "dark"){
        // $(':root').css('--hard', '#dadada');
        // $(':root').css('--harder', '#f5f5f5');
        // $(':root').css('--hardest', '#fefefe');
        document.documentElement.style.setProperty('--hard', '#374151');
        document.documentElement.style.setProperty('--harder', '#1f2937');
        document.documentElement.style.setProperty('--hardest', '#111827');
        document.documentElement.style.setProperty('--task_color', '#fff');
        theme_logo.src = "https://cdn4.iconfinder.com/data/icons/biticon-weather-line/24/weather_night_moon_lunar-512.png"

    }
    else if(theme == "light"){
        // $(':root').css('--hard', '#374151');
        // $(':root').css('--harder', '#d6dadf');
        // $(':root').css('--hardest', '#111827');
        document.documentElement.style.setProperty('--hard', '#dadada');
        document.documentElement.style.setProperty('--harder', '#f5f5f5');
        document.documentElement.style.setProperty('--hardest', '#fefefe');
        document.documentElement.style.setProperty('--task_color', '#6b7280');
        theme_logo.src = "https://cdn4.iconfinder.com/data/icons/biticon-weather-line/24/weather_sun_sunny_day-512.png"

    }
}


// });

// localStorage.clear();
