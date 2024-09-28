var toggleButton = document.getElementById('Toggle-Btn');
var ProjectSections = document.querySelectorAll('.Resume-Components');
toggleButton.addEventListener('click', function () {
    ProjectSections.forEach(function (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
        ;
    });
});
