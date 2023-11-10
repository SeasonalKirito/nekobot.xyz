// script.js

fetch('variables.json')
    .then(response => response.json())
    .then(data => {
        let dropdown = document.getElementById('variableDropdown');

        data.forEach(variable => {
            let option = document.createElement('option');
            option.text = variable.name;
            option.value = variable.value;
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error:', error));

function showVariableValue() {
    let dropdown = document.getElementById('variableDropdown');
    let selectedValue = dropdown.options[dropdown.selectedIndex].value;
    let apiUrl = `https://nekobot.xyz/api/image?type=${selectedValue}`;

    if (selectedValue) {
        const imageElement = document.getElementById('dynamic-image');
        imageElement.style.display = 'none';

        const loader = document.getElementById('loader');
        loader.style.display = 'inline-block';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.message;
                imageElement.src = imageUrl;
                imageElement.style.display = 'block';
                loader.style.display = 'none';
            })
            .catch(error => {
                console.error(error);
                loader.style.display = 'none';
            });
    }
}

function refreshImage() {
    let dropdown = document.getElementById('variableDropdown');
    let selectedValue = dropdown.options[dropdown.selectedIndex].value;
    let apiUrl = `https://nekobot.xyz/api/image?type=${selectedValue}`;

    if (selectedValue) {
        const imageElement = document.getElementById('dynamic-image');
        imageElement.style.display = 'none';

        const loader = document.getElementById('loader');
        loader.style.display = 'inline-block';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.message;
                imageElement.src = imageUrl;
                imageElement.style.display = 'block';
                loader.style.display = 'none';
            })
            .catch(error => {
                console.error(error);
                loader.style.display = 'none';
            });
    }
}
