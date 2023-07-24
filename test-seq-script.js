document.addEventListener("DOMContentLoaded", function () {
    const selectNumber = document.getElementById("selectNumber");

    // 連番を生成する関数
    function generateSequence(start, end) {
        const sequence = [];
        for (let i = start; i <= end; i++) {
            sequence.push(i);
        }
        return sequence;
    }

    // プルダウンリストに連番を表示する関数
    function populateDropdownList(selectElement, sequence) {
        sequence.forEach((number) => {
            const option = document.createElement("option");
            option.textContent = number;
            selectElement.appendChild(option);
        });
    }

    // 連番の範囲を指定して連番を生成し、プルダウンリストに表示
    const startNumber = 1;
    const endNumber = 10;
    const sequence = generateSequence(startNumber, endNumber);
    populateDropdownList(selectNumber, sequence);
    populateDropdownList(selectNumber2, sequence);

});
